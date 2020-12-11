import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ImgSearch from '../assets/image/loupe.png'

const Search = () => {
    return (
        <View styles={styles.containerSearch}>
            <View style={styles.formSearch}>
                <TextInput placeholder="Search...." style={styles.inputSearch} />
            </View>
            <View style={styles.formSearch}>
                <TouchableOpacity style={styles.btnSearch}>
                    <Image source={ImgSearch} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    btnSearch:{
        backgroundColor:'grey',
        width: '10%',
        height: '20%',
        justifyContent: "center",
        alignItems: "center",
    },

    img:{
        height: 20,
        width: 20,
    },

    inputSearch:{
        backgroundColor: 'white',
        width: '80%',
        height: '75%',
    }
})
