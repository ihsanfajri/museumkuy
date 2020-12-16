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
        // borderWidth: 1,
        height: 190,
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
        // flex:1,
        // borderWidth: 1,
        width:'100%',
        height: '60%',
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height: 100,
        resizeMode: 'stretch',
    },
    font:{
        fontSize:14,
        fontWeight:'bold',
        // borderWidth: 1,
        width: 85,
        textAlign: 'center',
    },
    fontContainer:{
        // flex: 1,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:10,
        marginBottom: 10,
        marginTop: 10,
    }
})
