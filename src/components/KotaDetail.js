import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import nextLogo from '../assets/image/next.png'

const KotaDetail = ({nama}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.font}>{nama}</Text>
                <Image source={nextLogo} style={{width:20,height:20}} />
            </View>
        </View>
    )
}

export default KotaDetail

const styles = StyleSheet.create({
    container:{
       marginTop:5,
       backgroundColor:'white'
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        paddingVertical:10
    },
    font:{
        fontSize:18
    }
})
