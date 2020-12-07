import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import transksiSuksesImage from '../assets/image/transaksiSukses.png'

const TransaksiSuksesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={transksiSuksesImage} style={{width:200,height:200}} />
            </View>
            <View style={styles.bottom}>
                <View style={styles.textContainer}>
                    <Text style={styles.fontPurchase}>Ticket Purchase Success</Text>
                    <Text style={styles.fontMessage}>Art 1 : New Museum</Text>
                    <Text style={styles.fontMessage}>24 December 2020</Text>
                    <Text style={styles.fontMessage}>Rp. 50000</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonDone} onPress={() => navigation.navigate('HistoryTicket')} >
                        <Text style={styles.fontDone}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    )
}

export default TransaksiSuksesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    top:{
        flex:1,
        // backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        flex:1,
        // backgroundColor:'yellow'
    },
    textContainer:{
        flex:1,
        marginVertical:20,
        marginHorizontal:20,
        padding:20,
        borderRadius:20,
        backgroundColor:'#A01F1F',
        alignItems:'center',
    },
    fontPurchase:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        marginBottom:20
    },
    fontMessage:{
        color:'white',
        fontWeight:'bold'
    },
    buttonContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        // backgroundColor:'yellow',
        marginHorizontal:20,
        marginBottom:50,
    },
    buttonDone:{
        backgroundColor:'#A01F1F',
        paddingVertical:15,
        paddingHorizontal:40,
        borderRadius:40
    },
    fontDone:{
        fontWeight:'bold',
        color:'white'
    }
})
