import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MenuTransaksi from '../components/MenuTransaksi'
import TransaksiPending from '../components/TransaksiPending'


import gambarTransaksi from '../assets/image/MenuTransaksi.png'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const HistoryTicketScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Image style={{width: 242, height:171}} source={gambarTransaksi}/>
                <Text style={styles.title}> History Transaksi </Text>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.bottomTop}>
                    <ScrollView horizontal >
                        <TouchableOpacity>
                            <MenuTransaksi name="Transaksi Pending" />  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MenuTransaksi name="Transaksi Berhasil" /> 
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MenuTransaksi name="Transaksi Gagal" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MenuTransaksi name="Semua Transaksi" />
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.midBottom}>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:20, width:320}}/>
                </View>
                
                <View style={styles.bottomBottom}>
                    <ScrollView>
                        <TouchableOpacity style={styles.BtnTransaksi}>
                            <TransaksiPending/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnTransaksi}>
                            <TransaksiPending/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnTransaksi}>
                            <TransaksiPending/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnTransaksi}>
                            <TransaksiPending/>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default HistoryTicketScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A01F1F',
    },

    containerTop:{
        flex: 1.5,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent:"center",
        alignItems:"center",
    },

    title:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
    },

    containerBottom:{
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
        alignItems:"center",
    },

    bottomTop:{
        height: 30,
        // backgroundColor:'grey',
        width: 320,
    },

    bottomBottom:{
        marginTop: 15,
    }, 

    BtnTransaksi:{
        borderWidth: 1,
        width:316,
        height: 62,
        borderRadius: 30,
        marginTop: 7,
        borderColor: '#C4C4C4',
    }
})
