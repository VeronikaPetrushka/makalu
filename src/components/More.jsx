import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get('window');

const More = ({ item }) => {
    const navigation = useNavigation();
    
    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Text style={styles.topic}>{item.topic}</Text>

                <ScrollView style={{width: '100%'}}>
                    <Text style={styles.description}>{item.education}</Text>

                    <Text style={styles.subTitle}>{item.typesTitle}</Text>
                    {
                        item.types.map((type, i) => (
                            <Text key={i} style={styles.description}>{type.type}: {type.description}</Text>
                        ))
                    }

                    <Text style={styles.description}>{item.guide}</Text>

                    <Text style={styles.subTitle}>{item.featuresTitle}</Text>
                    {item.featuresText && <Text style={styles.description}>{item.featuresText}</Text>}
                    {
                        item.features.map((feature, i) => (
                            <Text key={i} style={styles.description}>{feature}</Text>
                        ))
                    }

                    <Text style={styles.subTitle}>Climber tips</Text>
                    {
                        item.tips.map((tip, i) => (
                            <Text key={i} style={styles.description}>{tip}</Text>
                        ))
                    }

                    <View style={{height: 50}} />
                </ScrollView>

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
        paddingTop: height * 0.15,
    },

    back: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 20,
        top: height * 0.055,
        zIndex: 10,
    },

    topic: {
        fontSize: 22,
        fontWeight: '900',
        color: '#3d4145',
        textAlign: 'center',
        marginBottom: height * 0.05
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

});

export default More;