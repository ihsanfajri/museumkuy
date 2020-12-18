import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image,AsyncStorage, ToastAndroid} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen'
import SplahScreen from '../pages/SpalshScreen'
import HistoryTicketScreen from '../pages/HistoryTicketScreen'
import AccountScreen from '../pages/AccountScreen'
import FirstScreen from '../pages/FirstScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import AllMuseumScreen from '../pages/AllMuseumScreen'
import UpdateProfileScreen from '../pages/ProfileUpdateScreen'
import ChangePasswordScreen from '../pages/ChangePasswordScreen'
import HistoryTicketSuccessScreen from '../pages/HistoryTicketSuccessScreen'
import HistoryTicketFailedScreen from '../pages/HistoryTicketFailedScreen'
import buyTiketScreen from '../pages/BeliTiketScreen'
import UploadScreen from '../pages/TakePictureScreen'
import ReviewMuseumScreen from '../pages/ReviewScreen'
import BayarScreen from '../pages/BayarScreen'

import JelajahiKotaScreen from '../pages/JelajahiKotaScreen'
import KategoriMuseumScreen from '../pages/KategoriMuseumScreen'
import NotificationScreen from '../pages/NotificationScreen'


import axios from 'axios';
import { AuthContext } from '../components/Context'

import GaleriMuseumScreen from '../pages/GaleriMuseumScreen'
import DescriptionMuseumScreen from '../pages/DescriptionMuseumScreen'
import MapsMuseumScreen from '../pages/MapsMuseumScreen'

import TransaksiSuksesScreen from '../pages/TransaksiSuksesScreen'

import SuccessPaymentScreen from '../pages/SuccessPaymentScreen'




import iconHome from '../assets/image/home.png'
import iconTransaksi from '../assets/image/transfer.png'
import iconAccount from '../assets/image/user.png'
import HeaderTransaksi from '../components/HeaderTransaksi';
import MetodePembayaranScreen from '../pages/MetodePembayaranScreen';
import PemesananBerhasilScreen from '../pages/PemesananBerhasilScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const IconBottom = (props) => {
  const {color, focused} = props.data
  let colorSelected = focused ? '#A01F1F' : 'grey'
  return(
    <View>
      <Image source={props.image} style={{width: 25, height: 25, tintColor: colorSelected }} />
    </View>
  )
}

const HistoryTransaksi = () => {
  return(
    <View 
    
    style={styles.container}>
        <HeaderTransaksi/>
        <TabTop.Navigator swipeEnabled={true} tabBarOptions={{
          labelStyle: {
            fontSize: 10,
          },
          tabStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          style:{
            // borderTopLeftRadius:20,
            // borderTopRightRadius:20,
            marginTop:30,
            // borderWidth: 1,

          }
          
        }} >
          <Tab.Screen name="Transaksi Pending" component={HistoryTicketScreen} />
          <Tab.Screen name="Transaksi Berhasil" component={HistoryTicketSuccessScreen} />
          <Tab.Screen name="Transaksi Gagal" component={HistoryTicketFailedScreen} />
          <Tab.Screen name="Semua Transaksi" component={HistoryTicketSuccessScreen} />
        </TabTop.Navigator>
      
    </View>
  )
}



const Dashboard = () => {
    return(
      <Tab.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
        
      }}>
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
          component={HistoryTransaksi} 
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
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AllMuseum" component={AllMuseumScreen} options={{ 
            // headerShown: false,
            title: 'Museum',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

        <Stack.Screen name="AllKategoriMuseum" component={AllMuseumScreen} options={{ 
            // headerShown: false,
            title: 'Arkeologi',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        
        <Stack.Screen name="AllKotaMuseum" component={AllMuseumScreen} options={{ 
            // headerShown: false,
            title: 'Jakarta',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

        <Stack.Screen name="UploadPembayaran" component={UploadScreen} options={{
            title: 'Upload Bukti Pembayaran',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

          <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="HistorySuccess" component={HistoryTicketSuccessScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HistoryFailed" component={HistoryTicketFailedScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DescMuseum" component={DescriptionMuseumScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="GaleriMuseum" component={GaleriMuseumScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ReviewMuseum" component={ReviewMuseumScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MapMuseum" component={MapsMuseumScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="beliTiket" component={buyTiketScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TransaksiSukses" component={TransaksiSuksesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="JelajahiKota" component={JelajahiKotaScreen} options={{
            title: 'Jelajahi Kota',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="KategoriMuseum" component={KategoriMuseumScreen} options={{
            title: 'Kategori Museum',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Stack.Screen name="MetodePembayaran" component={MetodePembayaranScreen} options={{
            title: 'Metode Pembayaran',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Stack.Screen name="Bayar" component={BayarScreen} options={{
            title: 'Metode Pembayaran',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>


        <Stack.Screen name="TransaksiBerhasil" component={SuccessPaymentScreen} options={{
            title: 'Museum Kuy',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

          <Stack.Screen name="PesananBerhasil" component={PemesananBerhasilScreen} options={{
            title: 'MuseumKuy',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A01F1F',    
  },
  
})
