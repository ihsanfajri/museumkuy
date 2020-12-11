import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'

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
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        // borderWidth:1,
        // borderColor:'#DBD7D2',
        alignItems:'center',
        borderRadius:30,
        paddingVertical: 5,
        width:150,
        backgroundColor: '#A01F1F',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    fontCity:{
        fontWeight:'bold',
        color: 'white'
    }
})
