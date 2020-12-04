import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ContentDesc = () => {
    return (
        <View style={{}}>
            <Text style={styles.text}>
                Museum Fatahillah memiliki nama resmi Museum Sejarah Jakarta adalah sebuah museum yang terletak di Jalan Taman Fatahillah No. 1, Jakarta Barat dengan luas lebih dari 1.300 meter persegi.
            </Text>
            <Text style={styles.text2}>
                Bangunan ini dahulu merupakan balai kota Batavia (bahasa Belanda: Stadhuis van Batavia) yang dibangun pada tahun 1707-1712 atas perintah Gubernur-Jendral Joan van Hoorn. Bangunan ini menyerupai Istana Dam di Amsterdam, terdiri atas bangunan utama dengan dua sayap di bagian timur dan barat serta bangunan sanding yang digunakan sebagai kantor, ruang pengadilan, dan ruang-ruang bawah tanah yang dipakai sebagai penjara. Pada tanggal 30 Maret 1974, bangunan ini kemudian diresmikan sebagai Museum Fatahillah.
            </Text>
        </View>
    )
}

export default ContentDesc

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        textAlign: 'justify',

    },

    text2: {
        fontSize: 14,
        textAlign: "justify",
        marginTop: 10,
    }
})
