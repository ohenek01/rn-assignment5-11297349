import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import SettingScreen from './components/SettingScreen';
import { AppProvider } from './appContext';


export default function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
    </AppProvider>
  );
}

