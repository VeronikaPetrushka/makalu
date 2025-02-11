import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from './Icons.jsx';

const { height } = Dimensions.get('window');

const SettingsModal = ({ visible, onClose }) => {
    const [showResetConfirmation, setShowResetConfirmation] = useState(false);

    const handleReset = async () => {
        try {
            await AsyncStorage.removeItem('userProfile');
            await AsyncStorage.removeItem('userProfileName');
            await AsyncStorage.removeItem('uploadedImage');
            await AsyncStorage.removeItem('birthDate');
            await AsyncStorage.removeItem('album');
            await AsyncStorage.removeItem('places');
            await AsyncStorage.removeItem('notes');

            setShowResetConfirmation(false);

            Alert.alert('Progress Reset', 'Your progress has been reset successfully!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);

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
                        Are you sure you want to reset your account? This action will delete your profile, including your notes, photo album, visited places, and achievements!
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
        color: '#3d4145',
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
