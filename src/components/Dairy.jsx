import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ImageBackground, Modal, TextInput, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get('window');

const Dairy = () => {
    const navigation = useNavigation();
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [dateError, setDateError] = useState('');
    const [editIndex, setEditIndex] = useState(null); // To track the index of the note being edited
    
    useEffect(() => {
        const loadNotes = async () => {
            const storedNotes = await AsyncStorage.getItem('notes');
            if (storedNotes) {
                setNotes(JSON.parse(storedNotes));
            }
        };
        loadNotes();
    }, []);
    
    const handleCreateNote = async () => {
        if (!title || !note) {
            setDateError('Both title and note are required.');
            return;
        }
        
        const currentDate = new Date().toLocaleString();
        const newNote = { title, note, date: currentDate };
        
        let updatedNotes = [...notes];
        
        if (editIndex !== null) {
            updatedNotes[editIndex] = newNote; // Update the note if editing
        } else {
            updatedNotes.push(newNote); // Add a new note
        }
        
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
        
        setNotes(updatedNotes);
        setIsModalVisible(false);
        setTitle('');
        setNote('');
        setDateError('');
        setEditIndex(null); // Reset edit index after submitting
    };
    
    const handleEditNote = (index) => {
        const noteToEdit = notes[index];
        setTitle(noteToEdit.title);
        setNote(noteToEdit.note);
        setEditIndex(index); // Set the index of the note being edited
        setIsModalVisible(true);
    };
    
    const handleDeleteNote = async (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setTitle('');
        setNote('');
        setDateError('');
        setEditIndex(null);
    };
    
    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Text style={styles.title}>Diary</Text>

                <TouchableOpacity style={styles.createBtn} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.createBtnText}>Create a new note</Text>
                </TouchableOpacity>
                
                <ScrollView style={styles.notesList}>
                    {notes.map((noteItem, index) => (
                        <View key={index} style={styles.noteItem}>
                            <Text style={styles.noteTitle}>{noteItem.title}</Text>
                            <Text style={styles.noteText}>{noteItem.note}</Text>
                            <Text style={styles.noteDate}>{noteItem.date}</Text>
                            <View style={styles.noteActions}>
                                <TouchableOpacity style={styles.editBtn} onPress={() => handleEditNote(index)}>
                                    <Text style={styles.actionText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteNote(index)}>
                                    <Text style={styles.actionText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    <View style={{height: 100}} />
                </ScrollView>

                {/* Modal for creating or editing a note */}
                <Modal visible={isModalVisible} animationType="fade" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter title"
                                value={title}
                                onChangeText={setTitle}
                            />
                            <TextInput
                                style={[styles.input, styles.noteInput]}
                                placeholder="Enter note"
                                value={note}
                                onChangeText={setNote}
                                multiline
                            />
                            {dateError ? <Text style={styles.errorText}>{dateError}</Text> : null}
                            <TouchableOpacity style={styles.submitBtn} onPress={handleCreateNote}>
                                <Text style={styles.submitBtnText}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                                <Text style={styles.submitBtnText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        </ImageBackground>
    );
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
        marginBottom: height * 0.05,
    },

    createBtn: {
        width: '100%',
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#3d4145',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: height * 0.03,
        zIndex: 10
    },

    createBtnText: {
        fontSize: 17,
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },

    noteInput: {
        height: 100,
        textAlignVertical: 'top',
    },

    errorText: {
        color: 'red',
        marginBottom: 10,
    },

    submitBtn: {
        backgroundColor: '#3d4145',
        padding: 12,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },

    submitBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    closeBtn: {
        backgroundColor: '#ccc',
        padding: 12,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
    },

    notesList: {
        width: '100%',
    },

    noteItem: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        width: '100%',
    },

    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    noteText: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },

    noteDate: {
        marginTop: 5,
        fontSize: 12,
        color: '#888',
    },

    noteActions: {
        flexDirection: 'row',
        marginTop: 10,
    },

    editBtn: {
        backgroundColor: '#4d9189',
        padding: 5,
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    deleteBtn: {
        backgroundColor: '#ccc',
        padding: 5,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    actionText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Dairy;
