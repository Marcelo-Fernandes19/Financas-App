import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StatusBar } from 'react-native';
import app from './src/services/firebaseConnection';
import 'react-native-gesture-handler';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';



export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Routes/>
      <StatusBar backgroundColor={"#131313"} barStyle="light-content"/>
      </AuthProvider>
    </NavigationContainer>
  );
}


