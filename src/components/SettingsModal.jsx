import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Vibration, Dimensions, Modal, Image, TextInput, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMusic } from '../constants/music.js';
import Icons from './Icons.jsx';

const { height } = Dimensions.get('window');

const SettingsModal = ({ visible, onClose }) => {
    const { isPlaying, togglePlay } = useMusic();
    const [showResetConfirmation, setShowResetConfirmation] = useState(false);
    const [vibrationEnabled, setVibrationEnabled] = useState(true);

    useEffect(() => {  
        loadSettings();
    }, []); 

    const loadSettings = async () => {
            try {
                const storedVibration = await AsyncStorage.getItem('vibrationEnabled');
                if (storedVibration !== null) {
                    setVibrationEnabled(JSON.parse(storedVibration));
                }
            } catch (error) {
                console.log('Error loading settings:', error);
            }
        };

    const handleToggleLoudness = async () => {
        togglePlay();
    };

    const handleToggleVibration = async () => {
        const newVibrationState = !vibrationEnabled;
        setVibrationEnabled(newVibrationState);

        try {
            await AsyncStorage.setItem('vibrationEnabled', JSON.stringify(newVibrationState));
            if (newVibrationState) {
                Vibration.vibrate();
            }
        } catch (error) {
            console.log('Error saving vibration setting:', error);
        }
    };

    const handleReset = async () => {
        try {
            await AsyncStorage.setItem('userProfile');
            await AsyncStorage.setItem('userProfileName');
            await AsyncStorage.removeItem('uploadedImage');
            await AsyncStorage.removeItem('birthDate');

            setShowResetConfirmation(false);

            Alert.alert('Progress Reset', 'Your progress has been reset successfully!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);

            if (vibrationEnabled) {
                Vibration.vibrate();
            }

            await loadSettings();

            onClose();

        } catch (error) {
            console.error('Error resetting progress:', error);
            Alert.alert('Error', 'There was a problem resetting your progress. Please try again later.');
        }
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                    <Icons type={'close'} />
                </TouchableOpacity>
                {showResetConfirmation ? (
                    <>
                        <Text style={styles.confirmationText}>
                        Are you sure you want to reset your account? This action will delete your profile, including your user name, uploaded photo, score,archive, and purchased articles!
                        </Text>
                        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
                            <Text style={styles.btnText}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelReset} onPress={() => setShowResetConfirmation(false)}>
                            <Text style={styles.cancelBtnText}>Close</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={styles.title}>Settings</Text>

                        <ScrollView style={{width: '100%'}}>

                            <View style={styles.regulatorContainer}>
                                <View style={{width: 60, height: 60}}>
                                    <Icons type={isPlaying ? 'play' : 'pause'} />
                                </View>
                                <Text style={[styles.toggleText, isPlaying ? styles.toggleTextOn : styles.toggleTextOff]}>
                                    {isPlaying ? 'On' : 'Off'}
                                </Text>
                                <TouchableOpacity style={[styles.toggleContainer, isPlaying ? styles.toggleContainer : styles.toggleContainerOff]} onPress={handleToggleLoudness}>
                                    <View style={[styles.toggle, isPlaying ? styles.toggleOn : styles.toggleOff]}></View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.regulatorContainer}>
                                <View style={{width: 60, height: 60}}>
                                    <Icons type={vibrationEnabled ? 'vibration' : 'vibration-off'} />
                                </View>
                                <Text style={[styles.toggleText, vibrationEnabled ? styles.toggleTextOn : styles.toggleTextOff]}>
                                    {vibrationEnabled ? 'On' : 'Off'}
                                </Text>
                                <TouchableOpacity style={[styles.toggleContainer, vibrationEnabled ? styles.toggleContainer : styles.toggleContainerOff]} onPress={handleToggleVibration}>
                                    <View style={[styles.toggle, vibrationEnabled ? styles.toggleOn : styles.toggleOff]}></View>
                                </TouchableOpacity>
                            </View>

                            <View style={{height: height * 0.02}} />

                            <TouchableOpacity style={styles.resetBtn} onPress={() => setShowResetConfirmation(true)}>
                                <Text style={styles.btnText}>Reset</Text>
                            </TouchableOpacity>

                        </ScrollView>

                    </>
                )}
                </View>
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    title: {
        fontWeight: '900',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: height * 0.06,
        color: '#4d9189',
    },
    regulatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: height * 0.04,
    },
    regulatorText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#4d9189'
    },
    toggleContainer: {
        padding: 7,
        width: 100,
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#4d9189',
    },
    toggleContainerOff: {
        borderColor: '#ccc',
    },
    toggleText: {
        fontSize: 16,
    },
    toggleTextOn: {
        color: '#4d9189',
    },
    toggleTextOff: {
        color: '#ccc',
    },
    toggle: {
        borderRadius: 30,
        width: '45%',
        height: '100%',
    },
    toggleOn: {
        backgroundColor: '#4d9189',
        alignSelf: 'flex-end',
    },
    toggleOff: {
        backgroundColor: '#ccc',
        alignSelf: 'flex-start',
    },
    btnText: {
        fontSize: 19,
        fontWeight: '800',
        color: '#3d4145',
    },
    resetBtn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#3d4145',
        backgroundColor: '#78c2b9',
    },
    confirmationText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: height * 0.1,
        marginTop: height * 0.08,
        color: '#5109ae',
    },
    cancelReset: {
        width: '100%',
        borderColor: '#3d4145',
        borderWidth: 3,
        borderRadius: 30,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.02
    },
    cancelBtnText: {
        fontSize: 19,
        fontWeight: '800',
        color: '#3d4145',
    },      
      closeBtn: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 5,
        right: 5
    },

});

export default SettingsModal;
