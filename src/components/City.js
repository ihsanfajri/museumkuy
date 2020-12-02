import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const City = ({name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontCity}>{name}</Text>
        </View>
    )
}

export default City

const styles = StyleSheet.create({
    container:{
        marginRight:5,
        borderWidth:1,
        borderColor:'#DBD7D2',
        alignItems:'center',
        borderRadius:30,
        paddingVertical:10,
        width:200
    },
    fontCity:{
        fontWeight:'bold'
    }
})
