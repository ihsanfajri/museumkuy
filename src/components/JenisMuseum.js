import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import image1 from '../assets/image/jenis/arkeologi.jpg'

const JenisMuseum = ({image,jenis,color}) => {
    return (
        <View style={{
            flex:1,
        backgroundColor:color,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginHorizontal:10,
        borderRadius:10
        }}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.fontContainer}>
                    <Text style={styles.font}>Museum</Text>
                    <Text style={styles.font}>{jenis}</Text>
                </View>
            </View>
        </View>
    )
}

export default JenisMuseum

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#C29726',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius:10
    },
    content:{
        paddingHorizontal:10,
        paddingVertical:10,
    },
    image:{
        width:100,
        height:80
    },
    imageContainer:{
       alignItems:'center'
    },
    fontContainer:{
        marginTop:10,
        // backgroundColor:'red',
        alignItems:'center'
    },
    font:{
        fontWeight:'bold',
        color:'white'
    }
})
