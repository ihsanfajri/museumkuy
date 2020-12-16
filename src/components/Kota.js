import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const Kota = ({image,name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                <View style={styles.fontContainer}>
                    <Text style={styles.font}>{name}</Text>
                </View>
            </View>
        </View>
    )
}

export default Kota

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginRight:10,
        // paddingRight:40

    },
    imageContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:50,
        height:70
    },
    font:{
        // marginLeft:40
    },
    fontContainer:{
        alignItems:'center',
        // backgroundColor:'red',
        marginHorizontal:20
    }
})
