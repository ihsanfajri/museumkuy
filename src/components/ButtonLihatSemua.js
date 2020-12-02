import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ButtonLihatSemua = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontLihat}>Lihat Semua</Text>
        </View>
    )
}

export default ButtonLihatSemua

const styles = StyleSheet.create({
    container:{
        marginRight:5,
        marginTop:20,
        borderWidth:1,
        borderColor:'#DBD7D2',
        alignItems:'center',
        borderRadius:30,
        paddingVertical:10,
        width:236
    },
    fontLihat:{
        fontWeight:'bold',
        color:'#4D4545'
    }
})
