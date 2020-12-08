import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import fotoProfil from '../assets/image/user.png'
import Star from '../assets/image/star.png'

const komentarUser = () => {
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <View style={styles.containerProfile}>
                    <View style={styles.bingkaiFoto}>
                        <Image source={fotoProfil} style={{height: 35, width:35,}}/>
                    </View>
                    <View style={styles.containerNama}>
                        <Text style={styles.nama}>Nama User</Text>
                    </View>
                </View>
                <View style={styles.containerUlasan}>
                    <View style={styles.Rating}>
                        <Image source={Star} style={{height: 20, width:20}} />
                        <Image source={Star} style={{height: 20, width:20}} />
                        <Image source={Star} style={{height: 20, width:20}} />
                        <Image source={Star} style={{height: 20, width:20}} />
                        <Image source={Star} style={{height: 20, width:20}} />
                    </View>
                    <View style={styles.Comment}>
                        <Text style={{textAlign: 'justify'}}>Tempatnya sangat Bagus, dan juga nyaman, rekomend banget buat di kunjungin tempatnya</Text>
                    </View>
                </View>     
            </View>
            <View style={styles.pembatas}>
                <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:10, width:'100%', marginBottom:10, }}/>
            </View>
        </View>
        
    )
}

export default komentarUser

const styles = StyleSheet.create({
    container2: {
        flexDirection: "row",
        // borderWidth: 1,
    },

    containerProfile:{
        flex: 1,
        marginTop: 10,
        justifyContent: "center",
        alignItems:"center",
    },

    bingkaiFoto:{
        height: 50,
        width:50, 
        borderRadius:50/2,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    Rating:{
        flexDirection: "row",
        marginBottom: 10,
    },

    containerUlasan:{
        flex: 2,
        marginTop: 10,
        justifyContent: "center",
        // borderWidth: 1,
    },

    containerNama:{
        marginTop: 5,
    },

    nama:{
        fontSize: 12,
    }


})
