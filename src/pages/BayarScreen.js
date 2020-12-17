import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import bni from '../assets/image/bank/bni.png'

import DetailPesanan from '../components/DetailPesanan'
import DetailTotalHarga  from '../components/DetailTotalHarga'

const BayarScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.container1}>
                    <View style={styles.containerNamaBank}>
                            <Text>Transfer Bank BNI </Text>
                    </View>
                    <View style={styles.containerImgBank}>
                            <Image source={bni} style={styles.imgBank}/>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{marginBottom: 10,}}>
                        <View style={styles.containerInputText}>
                                <Text style={styles.fontTextInput}>Masukan Nomor Rekening Anda</Text>
                                <TextInput style={styles.inputText} />
                                <Text style={styles.fontTextInput2}>Masukan Nomor Rekening sesuai buku tabungan</Text>
                        </View>
                        <View style={styles.containerInputText}>
                                <Text style={styles.fontTextInput}>Nama Pemilik Rekening</Text>
                                <TextInput style={styles.inputText} />
                                <Text style={styles.fontTextInput2}>Masukan Nama Pemilik Rekening sesuai buku tabungan</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={{marginBottom: 10,marginTop: 5,}}>
                        <DetailPesanan />
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={{marginBottom: 10,marginTop: 5,}}>
                        <DetailTotalHarga />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnBayar}>
                    <Text style={styles.textBtn}>Bayar</Text>
                </TouchableOpacity>
            </View>
        </View>
        

    )
}

export default BayarScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    containerScroll:{
        borderWidth: 1,
        flex: 1,
        // backgroundColor: 'blue',
    },

    container1:{
        // borderWidth:1,
        flex: 0.6,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerNamaBank:{
        flex: 3,
        // borderWidth:1,
        justifyContent: 'center'
    },

    containerImgBank:{
        alignSelf: 'center',
        flex: 1,
        // borderWidth: 1,
        width: '100%',
        height: 50,
        // marginHorizontal: 5,
        // marginVertical: 5,
    },

    imgBank: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },

    container2:{
        backgroundColor: 'white',
        // borderWidth:1,
        flex: 2,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerInputText:{
        // borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    },

    fontTextInput:{
        fontSize: 16,
    },

    fontTextInput2:{
        fontSize: 12,
        color: '#C4C4C4',
    },

    inputText:{
        borderBottomWidth: 1,
        // borderWidth: 1,
        width: '100%',
        fontSize: 18,
        paddingBottom: 5,
    },

    container3:{
        backgroundColor: 'white',
        // borderWidth:1,
        flex: 1,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    container4:{
        backgroundColor: 'white',
        // borderWidth:1,
        flex: 1,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerBtn:{
        // borderWidth: 1,
        flex: 0.1,
        // backgroundColor: '#A01F1F',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    btnBayar:{
        height: '100%',
        width: '100%',
        backgroundColor: '#A01F1F',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBtn:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    }


})
