import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import museum from '../assets/image/musuem.jpg'

import FormMuseum from '../components/FormPembelianTIket'
import TitleMuseum from '../components/TitleMuseum'
import ContentDesc from '../components/ContentDesc'



const BeliTiketScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <Image source={museum} style={styles.fotoMuseum} />
            </View>
            <View style={styles.mid}> 
                <FormMuseum />
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.containerTextbeli}>
                    <Text style={{fontSize: 14, alignSelf: 'flex-start', marginTop: 10,}}>Total Harga :</Text>
                    <Text style={{fontSize: 25, marginBottom: 10,}}>Rp. 50.000</Text>
                </View>
                <TouchableOpacity style={styles.btnbeli} onPress={ () => navigation.navigate('MetodePembayaran')}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold',alignItems:'center'}}>
                        Beli
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BeliTiketScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'blue',
    },

    Top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'yellow',
        // marginBottom: 20,
        // marginTop: 20,
    },

    mid:{
        flex: 2.5,
        backgroundColor: 'white',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        // height: '60%',
        // width: '100%',
        position: 'relative',
    },

    fotoMuseum:{
        height: '150%',
        width: '100%',
        // position: 'absolute',
    },

    containerBtn:{
        height: 60,
        width: '100%',
        // borderTopWidth: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderColor:'#C4C4C4',
        backgroundColor: 'white'
    },

    btnbeli:{
        backgroundColor: '#A01F1F',
        height: '100%',
        width: 100,
        // borderColor:'B',
        // borderWidth: 1,
        // borderTopLeftRadius: 30,
        // borderBottomLeftRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    containerTextbeli:{
        justifyContent: "center",
        backgroundColor: 'white',
        height: 60,
        width: '75%',
        alignItems: "center",
    }, 
})
