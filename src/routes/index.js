import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen'
import SplahScreen from '../pages/SpalshScreen'
import HistoryTickeetScreen from '../pages/HistoryTicketScreen'
import AccountScreen from '../pages/AccountScreen.js'
import FirstScreen from '../pages/FirstScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="HistoryTicket" component={HistoryTickeetScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>

    )
}

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplahScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
