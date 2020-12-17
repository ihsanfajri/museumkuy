import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import museum from '../assets/image/musuem.jpg'

const Transaksi = ({status}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={museum}/>
            </View>
            <View style={styles.fontContainer}>
                <View style={styles.containerMuseum}>
                    <Text styles={{ fontSize: 5, width: 75, height: 16,}}>Museum Fatahilah</Text>
                    <Text styles={styles.fontTanggal}>11/29/2020</Text>
                </View>
                <View style={styles.statusContainer}>
                    {
                        status == "Lunas" ? (
                            <Text style={styles.fontSukses}>{status}</Text>
                        ):(
                            <Text style={styles.fontBelumBayar}>{status}</Text>
                        )
                    }
                </View>
            </View>
            
        </View>
    )
}

export default Transaksi

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        // borderWidth: 1,
        height: '100%',
        width: '100%',
    },

    imageContainer:{
        // borderWidth: 1,
        flex: 1,
        height: '100%',
        justifyContent : 'center',
        alignItems:'center',
        // marginLeft: 8,
    },

    img:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },

    fontContainer:{
        flex: 3,
        // borderWidth: 1,
        height: '100%',
        justifyContent : 'center',
        marginHorizontal: 2,
        paddingVertical: 2,
    },

    containerMuseum:{
        // borderWidth: 1,
        flex: 1,
        marginLeft: 5,
    },
    
    statusContainer:{
        flex: 1,
        // borderWidth: 1,
        height: '50%',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 10,
        marginBottom: 5,
    },

    fontSukses:{
        color:"green",
    },
    fontBelumBayar:{
        color:"red"
    }
   

})
