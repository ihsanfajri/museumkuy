import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TransaksiPending2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerNoPesanan}>
                <Text style={styles.title1}>No Invoice</Text>
                <Text>INV/20200330/1</Text>
            </View>
            <View style={styles.containerUser}>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Nama</Text>
                    <Text >User</Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>No Telp</Text>
                    <Text>081232444xxx</Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Email</Text>
                    <Text>User@gmail.com</Text>
                </View>
            </View>
            <View style={{justifyContent:"center", alignItems:"center",}}>
                <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:20, width:250}}/>
            </View>
            <View style={styles.containerPemesanan}>
                <Text>Pemesanan Tiket</Text>
                <Text style={styles.title1}>Museum Fatahilah</Text>
            </View>
            <View style={styles.containerUser}>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Tanggal Kunjungan</Text>
                    <Text>04/10/2020</Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Jumlah Tiket</Text>
                    <Text>5</Text>
                </View>
                
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Transafer Via</Text>
                    <Text>Bank BNI</Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>No Rekening</Text>
                    <Text>09991892777389</Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Total Harga</Text>
                    <Text>Rp. 50.000</Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.text1}>Tanggal Pemesanan</Text>
                    <Text >03/30/2020</Text>
                </View>
            </View>
        </View>
    )
}

export default TransaksiPending2

const styles = StyleSheet.create({

    containerUser:{
        marginTop: 13,
    },

    containerNoPesanan:{
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    containerProfile:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },

    containerPemesanan:{
        marginTop: 15,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    text1:{
        color: 'black',
        fontWeight: 'bold',
    },

    title1:{
        fontWeight: 'bold',
        fontSize: 18,
    }
})
