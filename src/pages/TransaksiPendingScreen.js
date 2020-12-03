import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TransaksiPending from '../components/TransaksiPending2'

const TransaksiPendingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.TopBackground}>
            </View>
            <View style={styles.BottomBackground}>
            </View>
            
            <View style={styles.containerContent}>
                <View style={styles.kotak}>
                    <TransaksiPending/>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnUpload}>
                        <Text style={{color: 'white', fontWeight: 'bold',}}>Upload Bukti Pembayaran</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>
    )
}

export default TransaksiPendingScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    TopBackground:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#A01F1F',
    },

    BottomBackground:{
        flex: 2,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },

    kotak:{
        width: 285,
        height: 418,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 30, 
        borderColor: '#DBD7D2',
    },

    containerContent:{
        position: 'absolute',
    },

    btnUpload:{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: 285,
        height: 40,
        backgroundColor: '#A01F1F',
        borderColor: '#A01F1F',
        borderRadius: 30,
    }, 

    containerBtn:{
        marginTop: 26,
    }

    


})
