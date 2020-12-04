import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleMuseum = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Museum Fatahilah</Text>
            <Text style={styles.text2}>Jawa Barat</Text>
        </View>
    )
}

export default TitleMuseum

const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
    },

    text1:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    text2:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})
