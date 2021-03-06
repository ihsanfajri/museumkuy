import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MenuTransaksi from '../components/MenuTransaksi'
import Transaksi from '../components/Transaksi'
import gambarTransaksi from '../assets/image/MenuTransaksi.png'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'

const HeaderTransaksi = () => {
    return (
        <View 
            style={styles.containerTop}>
                <Image style={{width: 242, height:171}} source={gambarTransaksi}/>
                <Text style={styles.title}> History Transaksi </Text>
        </View> 
    )
}

export default HeaderTransaksi

const styles = StyleSheet.create({
    containerTop:{
        backgroundColor: 'white',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:10
    },

    title:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
    },
})
