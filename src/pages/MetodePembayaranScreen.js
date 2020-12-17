import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BankCard from '../components/BankCard'
import bri from '../assets/image/bank/bri.jpg'
import bni from '../assets/image/bank/bni.png'
import bca from '../assets/image/bank/bca.png'
import mandiri from '../assets/image/bank/mandiri.png'

const MetodePembayaranScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.totalContainer}>
                    <Text style={styles.fontTotal}>Total Harga</Text>
                </View>
                <View style={styles.hargaContainer}>
                    <Text>Rp. 50.000</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.fontTransfer}>Transfer Bank</Text>
                <TouchableOpacity>
                    <BankCard image={bri} name="BRI" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <BankCard image={bni} name="BNI" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <BankCard image={bca} name="BCA" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <BankCard image={mandiri} name="Mandiri" />
                </TouchableOpacity>
               
            </View>
        </View>
    )
}

export default MetodePembayaranScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        flex:1,
        backgroundColor:'white',
        marginHorizontal:20,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    totalContainer:{
        flex:3,
        marginLeft:20
    },
    hargaContainer:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:20
    },
    fontTotal:{
        fontWeight:'bold',
        fontSize:16
    },

    bottom:{
        flex:9,
        // backgroundColor:'yellow',
        marginTop:30
    },

    fontTransfer:{
        fontWeight:'bold',
        marginLeft:20,
        fontSize:18
    }

})
