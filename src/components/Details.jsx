import React, { useRef, useEffect, useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView, Modal, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import Icons from "./Icons";

const { height, width } = Dimensions.get('window');

const Details = ({ place }) => {
    const mapRef = useRef(null);
    const navigation = useNavigation();
    const [isMap, setIsMap] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isVisited, setIsVisited] = useState(false);
    const [checkInDate, setCheckInDate] = useState('');
    const [dateError, setDateError] = useState('');

    useEffect(() => {
        const fetchUploadedImages = async () => {
            const album = await AsyncStorage.getItem('album');
            const parsedAlbum = album ? JSON.parse(album) : {};
            setUploadedImages(parsedAlbum[place.name] || []);

            console.log(album)
        };
        fetchUploadedImages();
    }, [place.name]);
    
    const handleUploadImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
    
        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
                alert('Error selecting image. Please try again.');
            } else if (response.assets && response.assets.length > 0) {
                const newImage = response.assets[0].uri;
    
                const album = await AsyncStorage.getItem('album');
                const parsedAlbum = album ? JSON.parse(album) : {};
    
                const updatedImages = [...(parsedAlbum[place.name] || []), newImage];
                parsedAlbum[place.name] = updatedImages;
    
                await AsyncStorage.setItem('album', JSON.stringify(parsedAlbum));
    
                setUploadedImages(updatedImages);
            }
        });
    };

    const handleShowMap = () => {
        if (isMap) {
            setIsMap(false)
        } else {
            setIsMap(true)
        }
    };

    useEffect(() => {
        const fetchUploadedImages = async () => {
            const album = await AsyncStorage.getItem('album');
            const parsedAlbum = album ? JSON.parse(album) : {};
            setUploadedImages(parsedAlbum[place.name] || []);
        };
    
        const checkVisitedStatus = async () => {
            const visitedPlaces = await AsyncStorage.getItem('places');
            const parsedPlaces = visitedPlaces ? JSON.parse(visitedPlaces) : [];
            const alreadyVisited = parsedPlaces.some(p => p.name === place.name);
            setIsVisited(alreadyVisited);
        };
    
        fetchUploadedImages();
        checkVisitedStatus();
    }, [place.name]);    

    const handleCheckIn = async () => {
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!checkInDate || !dateRegex.test(checkInDate)) {
            setDateError('Please enter a valid date in the format dd.mm.yyyy.');
            return;
        }
    
        const [day, month, year] = checkInDate.split('.').map(num => parseInt(num, 10));
    
        if (month < 1 || month > 12) {
            setDateError('Month must be between 01 and 12.');
            return;
        }
    
        if (day < 1 || day > 31) {
            setDateError('Day must be between 01 and 31.');
            return;
        }
    
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
            setDateError(`This month only has ${daysInMonth} days.`);
            return;
        }
    
        const today = new Date();
        const inputDate = new Date(year, month - 1, day);
        if (inputDate > today) {
            setDateError('Please enter a date that is not in the future.');
            return;
        }
    
        const visitedPlaces = await AsyncStorage.getItem('places');
        const parsedPlaces = visitedPlaces ? JSON.parse(visitedPlaces) : [];
        
        const updatedPlaces = [...parsedPlaces, { ...place, checkInDate }];
        await AsyncStorage.setItem('places', JSON.stringify(updatedPlaces));
        
        setIsVisited(true);
        setIsModalVisible(false);
        setDateError('');
    };
    

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <View style={styles.iconsContainer}>

                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                        <Icons type={'back'} light />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.back} onPress={handleShowMap}>
                        <Icons type={'map'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.back} onPress={handleUploadImage}>
                        <Icons type={'camera'} />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={[styles.checkBtn, isVisited && { backgroundColor: 'rgba(77, 145, 137, 0.6)' }]}
                    onPress={() => !isVisited && setIsModalVisible(true)}
                    disabled={isVisited}
                >
                    <Text style={styles.checkBtnText}>{isVisited ? 'Visited' : 'Check in'}</Text>
                </TouchableOpacity>

                {
                    isMap ? (
                        <View style={styles.mapContainer}>
                            <MapView
                                ref={mapRef}
                                style={styles.map}
                                initialRegion={{
                                    latitude: place.coordinates[0].lat,
                                    longitude: place.coordinates[0].lng,
                                    latitudeDelta: 0.2,
                                    longitudeDelta: 0.2,
                                }}
                            >
                                <Marker
                                    key={place.name}
                                    coordinate={{
                                        latitude: place.coordinates[0].lat,
                                        longitude: place.coordinates[0].lng,
                                    }}
                                >
                                    <View>
                                        <Image
                                            source={place.image}
                                            style={styles.markerImage}
                                        />
                                    </View>
                                </Marker>
                            </MapView>
                        </View>            
                    ) : (
                        <View style={{height: height * 0.35, marginBottom: height * 0.03}}>
                            <ScrollView 
                                style={{height: height * 0.35}} 
                                horizontal={true}
                                showsHorizontalScrollIndicator={true} 
                                contentContainerStyle={styles.imageScrollContainer}
                                >
                                <Image source={place.image} style={styles.scrollableImage} />
                                {uploadedImages.length > 0 &&
                                    uploadedImages.map((item, index) => (
                                        <Image
                                            key={`${place.name}_${index}`}
                                            source={{ uri: item }}
                                            style={styles.scrollableImage}
                                        />
                                    ))
                                }
                            </ScrollView>                    
                        </View>
                    )
                }
                

                <Text style={styles.name}>{place.name}</Text>

                <ScrollView style={{width: '100%'}}>
                    <Text style={styles.description}>{place.description}</Text>
                    <Text style={styles.subTitle}>Climbing Route</Text>
                    {
                        place.route.map((r, i) => (
                            <Text key={i} style={styles.description}>{r.title}: {r.description}</Text>
                        ))
                    }
                    <Text style={styles.subTitle}>Climber tips</Text>
                    <Text style={styles.description}>{place.tip}</Text>
                    <View style={{height: 50}} />
                </ScrollView>

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>
                                Have you visited {place.name} in {place.country}? Let’s check in to grab your achievement!
                            </Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter date dd.mm.yyyy"
                                value={checkInDate}
                                onChangeText={setCheckInDate}
                                keyboardType="numeric"
                            />
                            {dateError ? <Text style={styles.errorText}>{dateError}</Text> : null}
                            <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
                                    <Text style={styles.modalButtonText}>Not Yet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.modalButton, {backgroundColor: '#4d9189'}]} onPress={handleCheckIn}>
                                    <Text style={styles.modalButtonText}>Check In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: height * 0.05,
    },

    iconsContainer: {
        position: 'absolute',
        left: 30,
        top: height * 0.07,
        zIndex: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },

    back: {
        width: 40,
        height: 40,
        zIndex: 10,
        marginVertical: 10,
    },

    checkBtn: {
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 4,
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 40,
        top: height * 0.07,
    },

    checkBtnText: {
        fontSize: 14,
        fontWeight: '900',
        color: '#3d4145'
    },

    mapContainer: {
        width: '100%',
        height: height * 0.35,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: height * 0.03,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    markerImage: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#4d9189',
        width: 60,
        height: 60
    },

    imageScrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
    scrollableImage: {
        width: width * 0.87,
        height: height * 0.35,
        borderRadius: 12,
        marginRight: 10,
        resizeMode: 'cover',
    },
    

    name: {
        fontSize: 22,
        fontWeight: '900',
        color: '#3d4145',
        textAlign: 'center',
        marginBottom: height * 0.02
    },

    description: {
        fontSize: 17,
        textAlign: 'justify',
        color: '#3d3227',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: height * 0.015
    },

    subTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center',
        marginBottom: height * 0.01
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
        color: '#3d4145',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        padding: 10,
        backgroundColor: '#3d4145',
        borderRadius: 12,
        width: '47%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '800',
    },    
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
});

export default Details;