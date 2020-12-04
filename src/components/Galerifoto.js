import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import fotoMuseum1 from '../assets/image/fatahilah1.jpg'
import fotoMuseum2 from '../assets/image/fatahilah2.jpg'
import fotoMuseum3 from '../assets/image/fatahilah3.jpg'
import fotoMuseum4 from '../assets/image/fatahilah3.jpg'


const Galerifoto = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={fotoMuseum1} style={{width:150,height:150}} />
                <Image source={fotoMuseum2} style={{width:150,height:150}} />
            </View>
            <View style={styles.bottom}>
                <Image source={fotoMuseum3} style={{width:150,height:150}} />
                <Image source={fotoMuseum4} style={{width:150,height:150}} />
            </View>
        </View>
    )
}

export default Galerifoto

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'green'
    },
    top:{
        flex:1,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20
    },
    bottom:{
        flex:1,
        // backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'space-around'
    }
})
