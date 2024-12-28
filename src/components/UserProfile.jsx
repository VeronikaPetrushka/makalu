import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, 
    KeyboardAvoidingView, Keyboard, Alert, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from './Icons';

const { height, width } = Dimensions.get('window');

const UserProfile = ({ visible, onClose }) => {
    const [name, setName] = useState("");
    const [uploadedImage, setUploadedImage] = useState({ uri: Image.resolveAssetSource(require('../assets/avatar/user.png')).uri });
    const [birthDay, setBirthDay] = useState(null);
    const [birthMonth, setBirthMonth] = useState(null);
    const [birthYear, setBirthYear] = useState(null);
    const [about, setAbout] = useState('');
    const [visitDate, setVisitDate] = useState(null);
    const [inputHeight, setInputHeight] = useState(80);
    const [buttonText, setButtonText] = useState("Create account");
    const [errorMessage, setErrorMessage] = useState("");
    const [dayOpen, setDayOpen] = useState(false);
    const [monthOpen, setMonthOpen] = useState(false);
    const [yearOpen, setYearOpen] = useState(false);
    const [visitOpen, setVisitOpen] = useState(false);
  
    const days = Array.from({ length: 31 }, (_, i) => ({
      label: `${(i + 1).toString().padStart(2, '0')}`,
      value: i + 1
  }));
  
    const months = Array.from({ length: 12 }, (_, i) => ({
      label: `${(i + 1).toString().padStart(2, '0')}`,
      value: i + 1
  }));
    const years = Array.from({ length: 100 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { label: `${year}`, value: year };
    });

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const storedName = await AsyncStorage.getItem('userProfileName');
                const storedImageUri = await AsyncStorage.getItem('uploadedImage');
                const storedBirthDate = await AsyncStorage.getItem('birthDate');
  
                if (storedName) setName(storedName);
                if (storedImageUri) setUploadedImage({ uri: storedImageUri });
                if (storedBirthDate) {
                    const { day, month, year } = JSON.parse(storedBirthDate);
                    setBirthDay(day);
                    setBirthMonth(month);
                    setBirthYear(year);
                }
            } catch (error) {
                console.error('Error loading user profile:', error);
            }
        };
  
        if (visible) {
            loadProfile();
        }
    }, [visible]);
  
    const handleSubmit = async () => {
        if (name.length > 20) {
            setErrorMessage("Name cannot exceed 20 characters.");
            return;
        }

        if (!birthDay || !birthMonth || !birthYear) {
            setErrorMessage("Please select a valid birth date.");
            return;
        }

        const birthDate = { day: birthDay, month: birthMonth, year: birthYear };
        const userProfile = { name, birthDate, about };

        try {
            await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
            if (uploadedImage.uri) {
                await AsyncStorage.setItem('uploadedImage', uploadedImage.uri);
            }
            setErrorMessage("");
            setButtonText("Save changes");
            handleClose();
        } catch (error) {
            console.error('Error saving user profile:', error);
        }
    };

    const uploadImageFromLibrary = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.didCancel) return;
            if (response.errorMessage) {
                Alert.alert('Error', response.errorMessage);
            } else {
                const imageUri = response.assets[0].uri;
                setUploadedImage({ uri: imageUri });
            }
        });
    };

    const handleClose = () => {
      setVisitDate(null);
      onClose();
    }

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={handleClose}
        >
            <View style={styles.modalContainer}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                                <Icons type="close" />
                            </TouchableOpacity>
                            <ScrollView style={{ width: '100%' }}>

                                <Text style={styles.modalTitle}>Profile</Text>

                                    <View style={[styles.avatarPlaceholder, uploadedImage && styles.imagePlaceholder]}>
                                        <Image source={uploadedImage} style={styles.uploadedAvatarImage} />
                                    </View>
                                    <TouchableOpacity style={styles.btnUploadImage} onPress={uploadImageFromLibrary}>
                                        <Text style={[styles.btnText, {color: '#4d9189'}]}>Upload photo</Text>
                                    </TouchableOpacity>
                                    <TextInput
                                        value={name}
                                        placeholder="Enter your name"
                                        placeholderTextColor="#4d9189"
                                        onChangeText={(text) => setName(text)}
                                        style={styles.input}
                                    />

                                    <Text style={styles.text}>Date of birth</Text>

                                     <View style={styles.dropdownContainer}>
                                      <View style={{width: '28%'}}>
                                        <DropDownPicker
                                              open={dayOpen}
                                              setOpen={setDayOpen}
                                              value={birthDay}
                                              setValue={setBirthDay}
                                              items={days}
                                              placeholder="Day"
                                              style={styles.dropdown}
                                              dropDownContainerStyle={{ borderColor: '#4d9189', backgroundColor: '#e3effa', width: '100%', height: 80 }}
                                              placeholderStyle={{ color: '#2C3E50', fontSize: 16 }}
                                              textStyle={{ color: '#4d9189', fontSize: 16, fontWeight: '500' }}
                                              dropDownDirection="BOTTOM"                        
                                          />
                                      </View>
                                      <View style={{width: '34%'}}>
                                        <DropDownPicker
                                              open={monthOpen}
                                              setOpen={setMonthOpen}
                                              value={birthMonth}
                                              setValue={setBirthMonth}
                                              items={months}
                                              placeholder="Month"
                                              style={styles.dropdown}
                                              dropDownContainerStyle={{ borderColor: '#4d9189', backgroundColor: '#e3effa', width: '100%', height: 80 }}
                                              placeholderStyle={{ color: '#2C3E50', fontSize: 16 }}
                                              textStyle={{ color: '#4d9189', fontSize: 16, fontWeight: '500' }}
                                              dropDownDirection="BOTTOM"                        
                                          />
                                        </View>
                                        <View style={{width: '33%'}}>
                                          <DropDownPicker
                                              open={yearOpen}
                                              setOpen={setYearOpen}
                                              value={birthYear}
                                              setValue={setBirthYear}
                                              items={years}
                                              placeholder="Year"
                                              style={styles.dropdown}
                                              dropDownContainerStyle={{ borderColor: '#4d9189', backgroundColor: '#e3effa', width: '100%', height: 80 }}
                                              placeholderStyle={{ color: '#2C3E50', fontSize: 16 }}
                                              textStyle={{ color: '#4d9189', fontSize: 16, fontWeight: '500' }}
                                              dropDownDirection="BOTTOM"                        
                                          />
                                        </View>
                                    </View>
                                    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

                                    <TextInput
                                        value={about}
                                        placeholder="Tell about your-self"
                                        placeholderTextColor="#4d9189"
                                        onChangeText={(text) => setAbout(text)}
                                        style={[styles.input, { height: inputHeight, marginTop: 0 }]}
                                          multiline={true}
                                          onContentSizeChange={(event) => {
                                            const contentHeight = event.nativeEvent.contentSize.height;
                                            setInputHeight(Math.max(80, contentHeight));
                                          }}
                                    />
                                    <TouchableOpacity style={[styles.btnCreate, {marginBottom: 40}]} onPress={handleSubmit}>
                                        <Text style={styles.btnCreateText}>{buttonText}</Text>
                                    </TouchableOpacity>

                            </ScrollView>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 25
    },
    modalContent: {
        width: width * 0.90,
        height: '100%',
        padding: 20,
        paddingTop: 40,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

    },
  modalTitle: {
        fontWeight: '900',
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 20,
        color: '#4d9189'
    },

  closeButton: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 5,
    right: 5
  },
    
  text: {
      fontSize: 16,
      fontWeight: "400",
      marginBottom: 10,
      color: '#ccc'
    },
    
    avatarPlaceholder: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
        marginBottom: 20
      },
    
      imagePlaceholder: {
        padding: 0
      },
    
      uploadedAvatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      },
    
      input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: height * 0.05,
        borderWidth: 1,
        borderColor: "#4d9189",
        borderRadius: 10,
        width: "100%",
        fontSize: 17,
        color: '#3d4145',
        marginBottom: 20,
        textAlignVertical: 'top',
      },
    
      btnCreate: {
        width: "100%",
        alignItems: "center",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#4d9189',
      },
    
      btnCreateText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
      },
    
      btnText: {
        fontSize: 18,
        color: '#3d4145',
        fontWeight: '700'
      },
    
      btnUploadImage: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#4d9189',
        borderRadius: 30,
        width: '100%',
        flexDirection: 'row'
      },
    
      errorText: {
        color: '#e1251b',
        fontSize: 14,
        marginTop: -25,
        marginBottom: 10,
      },

      dropdown: {
        borderColor: '#3d4145',
        borderRadius: 10,
        marginBottom: 15,
        width: '100%'
    },

    dropdownContainer: {
        width: '100%',
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    recommendationContainer: {
      width: '100%',
      marginTop: 20,
      alignItems: 'center',
  },
    recommendedPlace: {
        marginBottom: 10,
        alignItems: 'center',
    },
    recommendedPlaceImage: {
        width: width * 0.79,
        height: height * 0.2,
        borderRadius: 12,
        marginBottom: 10,
    },
    recommendedPlaceName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#3d4145',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default UserProfile;
