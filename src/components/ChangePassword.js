import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const ChangePassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.Title}>Ubah Password</Text>
            </View>
            <View style={styles.containerForm}>
                <View style={styles.containerInputText}>
                        <Text style={styles.fontInputText}>Masukkan Password Lama</Text>
                        <TextInput style={styles.inputText}/>
                </View>
                <View style={styles.containerInputText}>
                        <Text style={styles.fontInputText}>Masukkan Password Baru</Text>
                        <TextInput style={styles.inputText} />
                </View>
                <View style={styles.containerInputText}>
                        <Text style={styles.fontInputText}>Konfirmasi Password Baru</Text>
                        <TextInput style={styles.inputText} />
                </View>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.fontBtn}>Ubah Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container:{
        // borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    containerTitle:{
        // borderWidth: 1,
        marginHorizontal: 10,
        // marginVertical: 10,
        marginBottom: 40,
        marginTop: 50,
    },

    Title:{
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "bold",
    },

    containerForm:{
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth: 1,
    },

    containerInputText:{
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth: 1,
    },

    inputText:{
        borderBottomWidth: 1,
        // borderWidth:1,
        marginTop: 10,
        height: 40,
    },

    fontInputText:{
        color: '#9D9D9D',
        fontWeight: "bold",
    },

    containerBtn:{
        marginHorizontal: 30,
        marginVertical: 20,
        height: 45,
        // borderWidth: 1,
    },

    btn:{
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#A01F1F',
        borderRadius: 5,
    },

    fontBtn:{
        fontWeight: "bold",
        color: 'white',
        fontSize: 14,
    }



})
