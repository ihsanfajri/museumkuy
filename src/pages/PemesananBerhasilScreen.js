import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import DetailPesanan from '../components/DetailPesanan'
import bni from '../assets/image/bank/bni.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PemesananBerhasilScreen = ({navigation}) => {
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
                        <Text style={styles.textHarga1}>Total Harga</Text>
                        <Text style={styles.textHarga2}>Rp. 50.581</Text>
                    </View>
                    <View styles={styles.noPesanan}>
                        <Text style={styles.textNo1}>Nomor Pesanan</Text>
                        <Text style={styles.textNo2}>INV/20200330/1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={{marginBottom: 10,marginTop: 5,}}>
                    <DetailPesanan />
                </View>
            </View>
            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('UploadPembayaran')}>
                <Text style={styles.textBtn1}>Upload Bukti Pembayaran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.textBtn2}>Kembali ke Halaman Utama</Text>
            </TouchableOpacity>

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
        marginVertical: 25,
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
        // borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 20,
    },

    Bank:{
        flex:1,
        // borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bingkaiImgBank:{
        // borderWidth: 1,
        height: 80,
        width: '30%',
    },

    imgBank:{
        height: '100%',
        width: '100%',
        resizeMode: 'center',
    },

    textBank1:{
        // borderWidth:1 ,
        width: '100%',
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
    },

    textBank2:{
        textAlign: 'center',
        width: '100%',
        // borderWidth:1 ,
        marginTop:10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    Harga:{
        flex:1,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textHarga1:{
        // borderWidth:1 ,
        width: '100%',
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
    },

    textHarga2:{
        // borderWidth:1 ,
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    noPesanan:{
        flex: 1,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textNo1:{
        // borderWidth:1 ,
        width: '100%',
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
    },

    textNo2:{
        // borderWidth:1 ,
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    container3:{
        backgroundColor: 'white',
        // borderWidth:1,
        // flex: 1,
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

    btn1:{
        flex: 1,
        // borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#A01F1F',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    btn2:{
        flex: 1,
        // borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A01F1F',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    textBtn1:{
        color: '#A01F1F',
        fontSize: 14,
        fontWeight: 'bold',
    },

    textBtn2:{
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

