import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Museum from '../assets/logo/museumkuy.png'


const RegisterScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.up}>
                    <Image source={Museum} style={styles.image} />
                </View>
                <View style={styles.down}>
                    <TextInput placeholder="Full name" style={styles.input} />
                    <TextInput placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Password" style={styles.input}/>
                    <TextInput placeholder="Confirm Password" style={styles.input}/>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    form:{
        flex:1,
        backgroundColor:'white',
        marginHorizontal:30,
        marginVertical:50,
        borderRadius:20
    },
    up:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    down:{
        flex:3,
        marginHorizontal:20
    },
    image:{
        width:116,
        height:100
    },
    input:{
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius:5,
        paddingLeft:20,
        marginBottom:20
    },
    button:{
        backgroundColor:'#A01F1F',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        marginTop:20
    },
    textButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
})
