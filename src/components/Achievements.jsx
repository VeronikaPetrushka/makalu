import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground,  ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height, width } = Dimensions.get('window');

const Achievements = () => {
    const navigation = useNavigation();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const storedPlaces = await AsyncStorage.getItem('places');
            if (storedPlaces) {
                setPlaces(JSON.parse(storedPlaces));
            }
        };
        fetchPlaces();
    }, []);

    return(
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                <Icons type={'back'} />
            </TouchableOpacity>

            <Text style={styles.title}>Achievements</Text>

            {places.length === 0 ? (
                    <Text style={styles.noAchievementsText}>No achievements yet. Start exploring!</Text>
                ) : (
                    <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer}>
                        {places.map((place, index) => (
                            <View key={index} style={styles.achievementCard}>
                                <Image source={place.image} style={styles.placeImage} />
                                <View style={styles.achievementDetails}>
                                    <Text style={styles.placeName}>{place.name}</Text>
                                    <Text style={styles.country}>{place.country}</Text>
                                    {place.achievement.map((achieve, idx) => (
                                        <View key={idx} style={styles.achievementItem}>
                                            <Text style={styles.achievementTitle}>{achieve.title}</Text>
                                            <Text style={styles.achievementDescription}>{achieve.description}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                )}

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

     back: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: height * 0.055,
        left: 20,
        zIndex: 10
     },

     title: {
        fontSize: 26,
        fontWeight: '900',
        color: '#3d4145',
        textAlign: 'center',
        marginBottom: height * 0.03,
    },

    noAchievementsText: {
        fontSize: 18,
        color: '#3d4145',
        textAlign: 'center',
        marginTop: height * 0.2,
    },

    scrollContainer: {
        alignItems: 'center',
    },

    achievementCard: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    placeImage: {
        width: '100%',
        height: height * 0.25,
        resizeMode: 'cover',
    },

    achievementDetails: {
        padding: 15,
    },

    placeName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#3d4145',
        marginBottom: 5,
    },

    country: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3d4145',
        marginBottom: 15,
    },

    achievementItem: {
        marginBottom: 10,
    },

    achievementTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#4d9189',
    },

    achievementDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: '#3d4145',
        marginTop: 5,
    },

});

export default Achievements;