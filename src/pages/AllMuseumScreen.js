import React from 'react'
import { StyleSheet, Text, View, TextInput,Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LogoSearch from '../assets/logo/loupe.png'
import Museum from '../components/Museum'
import MuseumAll from '../components/MuseumAll'

const AllMuseumScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <View style={styles.userSearch}>
                    <View style={styles.searchInput}>
                        <TextInput placeholder="search" style={styles.textInput}/>
                    </View>
                    <View style={styles.searchLogo}>
                        <Image source={LogoSearch} style={{width:30,height:30,}} />
                    </View>
                </View>
            </View>
            <View style={styles.down}>
                <ScrollView style={styles.contenContainer}>
                    <TouchableOpacity Style={styles.btnMuseum}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity Style={styles.btnMuseum}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity Style={styles.btnMuseum}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity Style={styles.btnMuseum} >
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity Style={styles.btnMuseum}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity Style={styles.btnMuseum}>
                        <MuseumAll />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default AllMuseumScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    up:{
        flex:1,
        marginTop:10
    },
    down:{
        flex:5,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:10,
    },

    userSearch:{
        flex:1,
        marginHorizontal: 20,
        flexDirection:'row'
    },
    searchInput:{
      marginRight:10,  
    },

    searchLogo:{
        marginVertical: 15,
    },
    textInput:{
        marginTop:10,
        borderWidth: 1,
        backgroundColor:'white',
        borderColor:'#DBD7D2',
        borderRadius:20,
        width:300,
        height:40,
        paddingLeft: 10
    },

    btnMuseum:{
        borderWidth: 1,

    }
})
