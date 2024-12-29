import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground,  ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import encyclopedia from '../constants/encyclopedia.js';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Encyclopedia = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                <Icons type={'back'} />
            </TouchableOpacity>

            <Text style={styles.title}>Encyclopedia</Text>

            <ScrollView style={{width: '100%'}}>
                {
                    encyclopedia.map((item, index) => (
                        <View key={index} style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <View style={{padding: 15}}>
                                <Text style={styles.topic}>{item.topic}</Text>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MoreScreen', {item: item})}>
                                    <Text style={styles.btnText}>Learn more</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>

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

    card: {
        width: '100%',
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

    image: {
        width: '100%',
        height: height * 0.25,
        resizeMode: 'cover',
        marginBottom: 15
    },

    topic: {
        fontSize: 20,
        fontWeight: '700',
        color: '#3d4145',
        marginBottom: 15,
    },

    btn: {
        width: '100%',
        backgroundColor: '#4d9189',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },

    btnText: {
        fontSize: 16,
        fontWeight: '900',
        color: '#fff',
    }

});

export default Encyclopedia;