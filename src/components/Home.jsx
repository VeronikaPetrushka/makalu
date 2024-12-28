import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import UserProfile from "./UserProfile";
import SettingsModal from "./SettingsModal";
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();
    const [profileModalVisible, setProfileModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [uploadedImage, setUploadedImage] = useState({ uri: Image.resolveAssetSource(require('../assets/avatar/user.png')).uri });

    const loadAvatar = async () => {
        try {
          const storedImageUri = await AsyncStorage.getItem('uploadedImage');
            
          if (storedImageUri) {
            setUploadedImage(({ uri: storedImageUri }));
        } else {
            setUploadedImage({ uri: Image.resolveAssetSource(require('../assets/avatar/user.png')).uri });
        }
        } catch (error) {
          console.error('Error loading avatar:', error);
        }
      };
    
    useEffect(() => {
        loadAvatar();
    }, []);

    const handleProfileVisible = async () => {
        setProfileModalVisible(!profileModalVisible)
        await loadAvatar();
    }

    const handleSettingsVisible = async () => {
        setSettingsModalVisible(!settingsModalVisible);
        setUploadedImage({ uri: Image.resolveAssetSource(require('../assets/avatar/user.png')).uri });
        await loadAvatar();
    }

    return(
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <View style={styles.btnsContainer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={handleProfileVisible}>
                            <Image 
                                source={uploadedImage} 
                                style={styles.avatarImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.btnText}>Profile</Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={[styles.btn, {borderWidth: 0, borderRadius: 0}]} onPress={handleSettingsVisible}>
                            <Icons type={'settings'} />
                        </TouchableOpacity>
                        <Text style={styles.btnText}>Settings</Text>
                    </View>
                </View>

                <UserProfile visible={profileModalVisible} onClose={handleProfileVisible} />
                <SettingsModal visible={settingsModalVisible} onClose={handleSettingsVisible} />
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({

     container: {
        flex: 1,
        padding: 20,
        paddingTop: height * 0.07,
        alignItems: 'center',
        justifyContent: 'flex-start'
     },

     btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: height * 0.05
     },

     btnContainer: {
        alignItems: 'center',
        justifyContent:'center'
    },

    btn: {
        borderRadius: 100,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: 5,
    },

    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    btnText: {
        fontSize: 11,
        fontWeight: '900',
        color: '#3d4145'
    },

})

export default Home;