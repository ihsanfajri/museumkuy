import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NomerPesanan = () => {
    return (
        <View style={styles.container}>
            <Text>Nomer Pesanan</Text>
            <Text style={styles.font}>INV/20200330/1</Text>
        </View>
    )
}

export default NomerPesanan

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    font:{
        fontSize:18
    }
})
