import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import btnSearch from '../assets/image/loupe.png'
import imgPorfile from '../assets/image/user.png'

const searching = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <View style={styles.containertTextInput}>
                    <TextInput placeholder="Search..." style={styles.textInput}/>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnSearch}>
                        <Image source={btnSearch} style={styles.imgSearch}/>
                    </TouchableOpacity>
                 </View>
            </View>
        </View>
    )
}

export default searching

const styles = StyleSheet.create({
    container:{
        // borderWidth: 1,
        // backgroundColor: 'blue',
        borderRadius: 20,
        width: '95%',
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        
    },

    containerSearch:{
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: "row",
        // borderWidth: 1,
    },

    containertTextInput:{
        width: '80%',
        height: '100%',
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    textInput:{
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderWidth: 1,
        borderColor: '#C4C4C4',
    },
    
    containerBtn:{
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'blue',
        width: '20%',
        height: '100%',
        
    },

    btnSearch:{
        backgroundColor:'#C4C4C4',
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        
    },

    imgSearch:{
        width:30,
        height:30,
    },

    // containerImg:{
    //     flex: 0.2,
    //     backgroundColor: 'yellow',
    //     justifyContent: "center",
    //     alignItems: "center",
    // },

    // imgPorfile:{
    //     width:30,
    //     height:30,
    // }


})
