import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music.js';
import MusicPlayer from './src/components/MusicPlayer';

import HomeScreen from './src/screens/HomeScreen';
import AlbumScreen from './src/screens/AlbumScreen.jsx';
import AchievementsScreen from './src/screens/AchievementsScreen.jsx';
import DetailsScreen from './src/screens/DetailsScreen.jsx';
import EncyclopediaScreen from './src/screens/EncyclopediaScreen.jsx';
import MoreScreen from './src/screens/MoreScreen.jsx';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
  
    return (
        <MusicProvider>
            <MusicPlayer />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen 
                        name="HomeScreen" 
                        component={HomeScreen} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name="AlbumScreen" 
                        component={AlbumScreen} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name="AchievementsScreen" 
                        component={AchievementsScreen} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name="DetailsScreen" 
                        component={DetailsScreen} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name="EncyclopediaScreen" 
                        component={EncyclopediaScreen} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name="MoreScreen" 
                        component={MoreScreen} 
                        options={{ headerShown: false }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
          </MusicProvider>
    );
};

export default App;
