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
                <TouchableOpacity style={styles.containerBtn}>
                    <BankCard image={bri} name="BRI" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerBtn}>
                    <BankCard image={bni} name="BNI" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerBtn}>
                    <BankCard image={bca} name="BCA" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerBtn}>
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
        // borderWidth:1,
        flex:0.35,
        backgroundColor:'white',
        marginHorizontal:10,
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
        // borderWidth:1,
        flex:2,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    hargaContainer:{
        // borderWidth:1,
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
        // marginBottom:20
    },
    fontTotal:{
        fontWeight:'bold',
        fontSize:16
    },

    bottom:{
        flex:3,
        // backgroundColor:'yellow',
        marginTop:30
    },

    fontTransfer:{
        fontWeight:'bold',
        marginHorizontal: 10,
        fontSize:18
    },

    containerBtn:{
        // borderWidth:1 ,
        width: '100%',
        height: 65,
        marginVertical:2,
    }

})
