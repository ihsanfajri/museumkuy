import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import rating from '../assets/logo/star.png'

const Museum = ({image,nama,kota}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image}  style={{width:106,height:69,borderRadius:20}} />
            </View>
            <View style={styles.fontContainer}>
                <Text style={styles.fontMuseum}>{nama}</Text>
                <Text style={styles.fontKota}>{kota}</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Image source={rating} style={styles.ratingImage} />
                <Text style={styles.fontRating}>5.0</Text>
            </View>    
        </View>
    )
}

export default Museum

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
        marginVertical: 5,
        // borderWidth:1,
        // borderColor:'#DBD7D2',
        backgroundColor:'white',
        borderRadius: 10,
        flex:1,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
       

    },
    imageContainer:{
        flex:2,
        paddingVertical:10,
        paddingLeft:10
    },
    fontContainer:{
        flex:3,
        // backgroundColor: 'blue',
        marginLeft:20,
        marginTop:10
    },
    fontMuseum:{
        fontSize:14,
        fontWeight:'bold'
    },
    fontKota:{
        fontSize:10,
        color:'#C4C4C4'
    },
    ratingContainer:{
        flex:1,
        // backgroundColor: 'blue',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingVertical:20,
        flexDirection:'row',
        marginRight: 10,
    },
    ratingImage:{
        width:15,
        height:15,
        // backgroundColor: 'red',
        
    },
    fontRating:{
        height: 18,
        // backgroundColor: 'red',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:4,
    }
})
