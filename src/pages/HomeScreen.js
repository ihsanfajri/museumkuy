import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Profile from '../assets/image/FotoProfil.png'
import LogoSearch from '../assets/logo/loupe.png'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <View style={styles.userMessage}>
                    <View style={styles.left}>
                        <Text style={styles.hi}>Hi, User</Text>
                        <Text style={styles.message}>Choose the</Text>
                        <Text style={styles.message}>Museum you want</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={Profile} style={{width:47,height:47}} />
                    </View>
                </View>
                <View style={styles.userSearch}>
                    <View style={styles.searchInput}>
                        <TextInput placeholder="search" style={styles.textInput}/>
                    </View>
                    <View style={styles.searchLogo}>
                        <Image source={LogoSearch} style={{width:30,height:30}} />
                    </View>
                </View>
            </View>
            <View style={styles.down}>
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    up:{
        flex:1,
        backgroundColor:'#A01F1F',
    },
    down:{
        flex:3,
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    userMessage:{
        flex:1,
        flexDirection:'row',
        marginTop:20,
        marginHorizontal:20
    },
    userSearch:{
        flex:1,
        marginHorizontal: 20,
        flexDirection:'row'
    },
    searchInput:{
      marginRight:20  
    },
    searchLogo:{
        justifyContent:'center',
        marginBottom:7
    },
    left:{
        flex:3,
        justifyContent:'center'
    },
    right:{
        flex:1,
        justifyContent:'center'
    },
    hi:{
        color:'white'
    },
    message:{
        color:'white',
        fontSize:20
    },
    textInput:{
        marginTop:10,
        borderWidth: 1,
        backgroundColor:'white',
        borderColor:'#DBD7D2',
        borderRadius:20,
        width:255,
        height:40,
    }
})
