import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import DetailPesanan from '../components/DetailPesanan'
import bni from '../assets/image/bank/bni.png'

const PemesananBerhasilScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.bingkai1}>
                    <Text style={styles.textBatasWaktu}>Segera Melakukan Pembayaran Dalam Waktu </Text>
                    <Text style={styles.textBatasWaktu2}>23 Jam : 59 Menit : 59 Detik</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.bingkai2}>
                    <View style={styles.Bank}>
                        <Text style={styles.textBank1}>Transfer Ke Bank BNI</Text>
                        <View style={styles.bingkaiImgBank}>
                            <Image source={bni} style={styles.imgBank}/>
                        </View>
                        <Text style={styles.textBank2}>09991892777389</Text>
                    </View>
                    <View style={styles.Harga}>
                        <Text>Total Harga</Text>
                        <Text>Rp. 50.581</Text>
                    </View>
                    <View styles={styles.noPesanan}>
                        <Text>Nomor Pesanan</Text>
                        <Text>INV/20200330/1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={{marginBottom: 10,marginTop: 5,}}>
                    <DetailPesanan />
                </View>
            </View>
            <View style={styles.container4}>

            </View>
        </ScrollView>
    )
}

export default PemesananBerhasilScreen

const styles = StyleSheet.create({

    container1:{
        backgroundColor: 'white',
        // borderWidth:1,
        flex: 1,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, 
    },

    bingkai1:{
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 30,
    },

    textBatasWaktu:{
        fontSize:18,
        textAlign: 'center',
        // borderWidth: 1,
        width: '80%',
        marginHorizontal: 5,
        marginVertical: 5,
    },

    textBatasWaktu2:{
        fontSize:18,
        textAlign: 'center',
        // borderWidth: 1,
        width: '80%',
        marginHorizontal: 5,
        marginVertical: 5,
    },

    container2:{
        backgroundColor: 'white',
        // borderWidth:1,
        flex: 1,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, 
    },
    
    bingkai2:{
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    Bank:{
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bingkaiImgBank:{
        borderWidth: 1,
        height: 90,
        width: '30%',
    },

    imgBank:{
        height: '100%',
        width: '100%',
        resizeMode: 'center',
    },

    textBank1:{

    },

    textBank2:{

    },
    
    Harga:{

    },

    noPesanan:{

    },

    container3:{
        backgroundColor: 'white',
        // borderWidth:1,
        flex: 1,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

