import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DetailPesanan from '../components/DetailPesanan'
import DetailTotalHarga from '../components/DetailTotalHarga'
import NomerPesanan from '../components/NomerPesanan'
import Ulasan from '../components/Ulasan'

const SuccessPaymentScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerHeader}>
                    <View style={styles.containerStatus}>
                            <Text style={styles.fontStatus}>Status Transaksi </Text>
                    </View>
                    <View style={styles.containerBerhasil}>
                            <Text style={styles.fontBerhasil}>Transaksi Berhasil</Text>
                    </View>
            </View>
            <View style={styles.containerUlasan}>
                <Text style={styles.fontUlasan}>Terimakasih Telah</Text>
                <Text style={styles.fontUlasan}>Mengunjungi Museum</Text>
                <Ulasan />
            </View>
            <View style={styles.containerBiodata}>
                <Text style={styles.fontBiodata}>Biodata Pemesan</Text>
                    <View style={styles.detailBiodata}>
                        <Text>Nama</Text>
                        <Text>User</Text>
                    </View>
                    <View style={styles.detailBiodata}>
                        <Text>Email</Text>
                        <Text>User@gmail.com</Text>
                    </View>
                    <View style={styles.detailBiodata}>
                        <Text>Nomer Telp</Text>
                        <Text>089756474829</Text>
                    </View>
                </View>
            <View style={styles.containerPesanan}>
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

export default SuccessPaymentScreen

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

    containerBerhasil:{
        // borderWidth: 1,
        alignSelf: 'center',
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-end',

        width: '100%',
        height: 50,
        marginHorizontal: 5,
        // marginVertical: 5,
    },
    fontStatus:{
        fontWeight:'bold'
    },
    fontBerhasil:{
        color:'green'
    },
    containerUlasan:{
        // backgroundColor:'red',
        flex:1,
        alignItems:'center',
        padding:10,
        backgroundColor: 'white',
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
    fontUlasan:{
        fontSize:16
    },
    containerBiodata:{
        flex:1,
        paddingVertical: 20,
        paddingHorizontal: 5,
        backgroundColor: 'white',
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
    detailBiodata:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    fontBiodata:{
        // marginBottom:10,
        color:'#A01F1F'
    },
    containerPesanan:{
        flex:1,
        backgroundColor:'white',
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
