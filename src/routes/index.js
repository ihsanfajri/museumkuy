import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen'
import SplahScreen from '../pages/SpalshScreen'
import HistoryTickeetScreen from '../pages/HistoryTicketScreen'
import AccountScreen from '../pages/AccountScreen'
import FirstScreen from '../pages/FirstScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import AllMuseumScreen from '../pages/AllMuseumScreen'
import UpdateProfileScreen from '../pages/UpdateProfileScreen'
import TransaksiPendingScreen from '../pages/TransaksiPendingScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';

import iconHome from '../assets/image/home.png'
import iconTransaksi from '../assets/image/transfer.png'
import iconAccount from '../assets/image/user.png'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
  const {color, focused} = props.data
  let colorSelected = focused ? '#A01F1F' : 'grey'
  return(
    <View>
      <Image source={props.image} style={{width: 25, height: 25, tintColor: colorSelected }} />
    </View>
  )
}

const Dashboard = () => {
    return(
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: (props) => {return <IconBottom data={props} image={iconHome}/>},
          }}
        />
        <Tab.Screen 
          name="HistoryTicket" 
          component={HistoryTickeetScreen} 
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: (props) => { return <IconBottom data={props} image={iconTransaksi}/>}
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={AccountScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: (props) => { return <IconBottom data={props} image={iconAccount}/>}
          }}
        />
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
        <Stack.Screen name="AllMuseum" component={AllMuseumScreen} options={{ 
            // headerShown: false,
            title: 'Jakarta Barat',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

        <Stack.Screen name="TransaksiPending" component={TransaksiPendingScreen} options={{
            title: 'Transaksi Pending',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

          <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{
            title: 'Update Profile',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
