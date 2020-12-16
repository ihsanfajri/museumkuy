import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const KategoriMuseum = ({name,image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.fontContainer}>
                <Text style={styles.font}>Museum {name} </Text>
            </View>
        </View>
    )
}

export default KategoriMuseum

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        padding:20,
        justifyContent:'center'
    },
    image:{
        width:100,
        height:80
    },
    font:{
        fontSize:14,
        fontWeight:'bold',
    },
    fontContainer:{
        paddingBottom:20,
        paddingHorizontal:5
    }
})
