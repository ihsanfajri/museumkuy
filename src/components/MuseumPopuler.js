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
                    <Image source={star} style={{width:15,height:16,}} />
                    <Text style={styles.fontRating}>5.0</Text>
                </View>

            </View>
        </View>
    )
}

export default MuseumPopuler

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        backgroundColor:'white',
        // borderColor:'#DBD7D2',
        borderRadius: 30,
        width: 270,
        marginHorizontal:10,
        marginVertical:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        
    },
    up:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
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
        marginTop:10,
        alignItems: "center",
        
    },
    fontRating:{
        
        height:18,
        // backgroundColor: 'red',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5,
        marginBottom: 3
    }
})
