// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Router from './src/routes';



function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;