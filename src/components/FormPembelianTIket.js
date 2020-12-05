import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FormPembelianTIket = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>Pemesanan Tiket</Text>
                <Text>Museum Fatahilah</Text>
            </View>
        </View>
    )
}

export default FormPembelianTIket

const styles = StyleSheet.create({

    title:{
        // backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        // width: '100%',
        // height: '25%',
    },
})
