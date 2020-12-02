import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import museum from '../assets/image/musuem.jpg'
import star from '../assets/logo/star.png'

const MuseumPopuler = () => {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <Image source={museum} style={styles.image} />

            </View>
            <View style={styles.down}>
                <View style={styles.text}>
                    <Text style={styles.fontMuseum}>Museum Fatahilah</Text>
                    <Text style={styles.fontKota}>Jakarta Barat</Text>
                </View>
                <View style={styles.rating}>
                    <Image source={star} style={{width:15,height:16}} />
                    <Text style={styles.fontRating}>5.0</Text>
                </View>

            </View>
        </View>
    )
}

export default MuseumPopuler

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius: 30,
        width: 270,
        marginRight:20
    },
    up:{
        flex:1,
        padding: 10,
    },
    down:{
        flex:1,
        flexDirection:'row'
    },
    image:{
        width:243,
        height:98,
        borderRadius:30
    },
    text:{
        flex:3,
        paddingLeft:20,
        paddingBottom:20,
    },
    fontMuseum:{
        fontWeight:'bold',
        fontSize:14
    },
    fontKota:{
        fontSize:10,
        color:'#C4C4C4'
    },
    rating:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    },
    fontRating:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5,
    }
})
