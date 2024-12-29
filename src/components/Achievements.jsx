import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                <Icons type={'back'} />
            </TouchableOpacity>

            <Text style={styles.title}>Achievements</Text>

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

})

export default Home;