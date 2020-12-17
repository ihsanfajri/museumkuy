import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import next from '../assets/image/next.png'

const BankCard = ({image,name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.bankContainer}>
                    <Text style={styles.font}>Bank {name}</Text>
                </View>
                <View style={styles.nextContainer}>
                    <Image source={next} style={styles.imageNext}  />
                </View>
            </View>
        </View>
    )
}

export default BankCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        // flex:1,
    },
    content:{
        marginVertical:10,
        marginHorizontal:10,
        // flex:1,
        flexDirection:'row'
    },
    imageContainer:{
        flex:2,
    },
    image:{
        width:80,
        height:50
    },
    bankContainer:{
        flex:5,
        justifyContent:'center'
    },
    font:{
        fontSize:16,
        fontWeight:'bold'
    },
    nextContainer:{
        flex:1,
        justifyContent:'center',
    },
    imageNext:{
        width:20,
        height:20
    }
})
