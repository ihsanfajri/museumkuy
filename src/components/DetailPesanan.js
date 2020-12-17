import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailPesanan = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Detail Museum</Text>
            </View>
            <View style={styles.containerPesanTiket}>
                <Text>Pesan Tiket</Text>
                <Text>Museum Fatahilah</Text>
            </View>
            <View style={styles.containerPesanTiket}>
                <Text>Tanggal Pesanan</Text>
                <Text>12/01/2020</Text>
            </View>
            <View style={styles.containerPesanTiket}>
                <Text>Tanggal Kunjungan</Text>
                <Text>12/10/2020</Text>
            </View>
            <View style={styles.containerPesanTiket}>
                <Text>Jumlah Tiket</Text>
                <Text>5 Tiket</Text>
            </View>
        </View>
    )
}

export default DetailPesanan

const styles = StyleSheet.create({
    containerTitle: {
        marginHorizontal: 5,
        marginVertical: 5,
        // borderWidth: 1,
    },

    title:{
        color: '#A01F1F',
    },

    containerPesanTiket:{
        marginHorizontal: 5,
        marginVertical: 5,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})
