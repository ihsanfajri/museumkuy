import React from 'react'
import { StyleSheet, Text, View,ScrollView, Image, TouchableOpacity } from 'react-native'
import ceklis from '../assets/image/checkmark.png'
import NomerPesanan from '../components/NomerPesanan'
import DetailPesanan from '../components/DetailPesanan'
import DetailTotalHarga from '../components/DetailTotalHarga'

const TransaksiSuksesScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerHeader}>
                    <View style={styles.containerStatus}>
                            <Text style={styles.fontStatus}>Status Transaksi </Text>
                    </View>
                    <View style={styles.containerVerifikasi}>
                            <Text style={styles.fontVerifikasi}>Menunggu Proses Verifikasi</Text>
                    </View>
            </View>
            <View style={styles.containerBerhasil}>
                <Text>Terimakasih</Text>
                <Text>anda telah melakukan upload pembayaran</Text>
                <Image source={ceklis} style={styles.image} />
                <Text>Pesanan Tiket anda segera diproses</Text>
            </View>
            <View style={styles.containerInvoice}>
                <NomerPesanan />
            </View>
            <View style={styles.containerPemesanan}>
                <DetailPesanan />
                <DetailTotalHarga />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard') }>
                <Text style={styles.fontKembali}>Kembali Ke Halaman Utama</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default TransaksiSuksesScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerHeader:{
        // borderWidth:1,
        flex: 0.6,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerStatus:{
        flex: 1,
        // borderWidth:1,
        justifyContent: 'center',
        marginLeft:10
    },

    containerVerifikasi:{
        // borderWidth: 1,
        alignSelf: 'center',
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-end',

        width: '100%',
        height: 50,
        marginRight: 5,
        // marginVertical: 5,
    },
    fontStatus:{
        fontWeight:'bold'
    },
    fontVerifikasi:{
        color:'#C61A1A'
    },
    containerBerhasil:{
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingVertical:20        
    },
    image:{
        width:74,
        height:74,
        marginVertical:10
    },
    containerInvoice:{
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingVertical:20
    },
    containerPemesanan:{
        flex:1,
        backgroundColor:'white',
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    button:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems:'center',
        marginHorizontal:10,
        // borderRadius:30,
        borderWidth:1,
        borderColor:'#A01F1F',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fontKembali:{
        color:'#A01F1F',
        fontWeight:'bold'
    }
})
