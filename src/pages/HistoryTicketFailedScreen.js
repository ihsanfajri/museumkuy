import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MenuTransaksi from '../components/MenuTransaksi'
import Transaksi from '../components/Transaksi'


import gambarTransaksi from '../assets/image/MenuTransaksi.png'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'

const HistoryTicketFailedScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Animatable.View 
            animation="fadeInDownBig"
            style={styles.containerTop}>
                <Image style={{width: 242, height:171}} source={gambarTransaksi}/>
            </Animatable.View> */}
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.containerBottom}>
                
                
                <ScrollView style={{marginTop: 15,}}>
                    <View style={styles.bottomBottom}>
                        <TouchableOpacity style={styles.BtnTransaksi}>
                            <Transaksi status="Gagal"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnTransaksi}>
                            <Transaksi status="Gagal"/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                
            </Animatable.View>
        </View>
    )
}

export default HistoryTicketFailedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A01F1F',
    },

    containerTop:{
        flex: 1.5,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent:"center",
        alignItems:"center",
    },

    title:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
    },

    containerBottom:{
        flex: 2,
        backgroundColor: 'white',
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // marginTop: 30,
        alignItems:"center",
    },

    bottomTop:{
        height: 30,
        // backgroundColor:'grey',
        width: 320,
    },

    bottomBottom:{
    }, 

    BtnTransaksi:{
        borderWidth: 1,
        width:316,
        height: 62,
        borderRadius: 30,
        marginTop: 7,
        borderColor: '#C4C4C4',
    }
})
