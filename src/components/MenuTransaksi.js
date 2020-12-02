import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MenuTransaksi = ({name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontTransaksi}>{name}</Text>
        </View>
    )
}

export default MenuTransaksi

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    fontTransaksi:{
        fontSize: 14,
        textAlign: 'center',
    }
})
