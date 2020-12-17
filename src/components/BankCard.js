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
                    <Text style={styles.font}>{name}</Text>
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
        // borderWidth: 1,
        backgroundColor:'white',
        // marginTop:10,
        height: '100%',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flex:1,
    },
    content:{
        marginVertical:10,
        marginHorizontal:10,
        // flex:1,
        flexDirection:'row'
    },
    imageContainer:{
        // borderWidth:1,
        flex:1,
    },
    image:{
        // borderWidth:1,
        width:'100%',
        height:'100%',
        resizeMode: 'contain'
    },
    bankContainer:{
        // borderWidth: 1,
        flex:4,
        justifyContent:'center',
        marginHorizontal: 10,
    },
    font:{
        fontSize:14,
        fontWeight:'bold',
        marginLeft: 10,
    },
    nextContainer:{
        // borderWidth: 1,
        flex:0.5,
        justifyContent:'center',
        alignItems: 'flex-end',
    },
    imageNext:{
        width:20,
        height:20
    }
})
