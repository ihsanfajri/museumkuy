import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FotoProfil from '../assets/image/mariavania.jpeg'
import Camera from '../assets/logo/camera.png'

const UpdateProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerFoto}>
                <Image source={FotoProfil} style={styles.foto} />
            </View>
            <View style={styles.containerForm}>
                <View style={styles.containerBingkai}>
                    <View style={styles.containerInputText}>
                        <Text style={styles.fontTextInput}>Nama Lengkap</Text>
                        <TextInput style={styles.InputText}/>
                    </View>
                    <View style={styles.containerInputText}>
                        <Text style={styles.fontTextInput}>Email</Text>
                        <TextInput style={styles.InputText}/>
                    </View>
                    <View style={styles.containerInputText}>
                        <Text style={styles.fontTextInput}>No.Telp</Text>
                        <TextInput style={styles.InputText} />
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.fontbtn}>Ubah Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.containerbtnFoto}>
                <TouchableOpacity style={styles.btnFotoCam}>
                    <Image source={Camera} style={styles.fotoCam} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerFoto:{
        flex: 0.7,
        height: 225,
    },

    foto:{
        resizeMode: 'stretch',
        height: '100%',
        width: '100%',
    },

    containerbtnFoto: {
        flex: 1,
        position: 'absolute',
        // backgroundColor: '#C4C4C4',
        // borderWidth: 1,
        width:'100%',
        height: '43%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    btnFotoCam:{
        width: 70,
        height: 70,
        backgroundColor:'white',
        borderRadius: 70/2,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        marginRight: 20,
        // marginBottom: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    fotoCam:{
        width: '70%',
        height: '60%'
    },

    containerForm:{
        flex: 1,
        backgroundColor: 'white',
        // height: '100%', 
        width: '100%'

    },

    containerBingkai:{
        // borderWidth: 1,
        backgroundColor: 'white',
        width: '97%',
        height: 375,
        alignSelf: 'center',
        // marginVertical: 10,
        marginTop: 10, 
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },

    containerInputText:{
        marginTop: 10,
        marginHorizontal: 30,
    },

    fontTextInput:{
        color: '#9D9D9D',
        fontWeight: "bold",
    },

    InputText:{
        borderBottomWidth: 1,
    },

    containerBtn:{
        marginVertical: 30,
        // borderWidth: 1,
        width: '75%',
        height: 45,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10,
        // marginLeft: 10,
        // marginRight: 10,
        // marginTop: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#A01F1F',
        borderRadius: 5,
        marginTop: 10, 
        
    },

    fontbtn:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
