import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import museum from '../assets/image/musuem.jpg'
import star from '../assets/logo/star.png'

const MuseumAll = () => {
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
                {/* <View style={styles.rating}>
                    <Image source={star} style={{width:15,height:16,}} />
                    <Text style={styles.fontRating}>5.0</Text>
                </View> */}
            </View>
        </View>
    )
}

export default MuseumAll

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    up:{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },

    down:{
        flex:1,
        flexDirection:'row',
    },

    image:{
        width:302,
        height:127,
        borderRadius:20
    },
    text:{
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
        marginTop:10,
        alignItems: "center",
        
    },
    fontRating:{
        
        height:18,
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5,
        marginBottom: 3
    }
})
