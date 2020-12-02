import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import Museum from '../assets/logo/museumkuy.png'

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.up}>
                    <Image source={Museum} style={styles.image} />
                </View>
                <View style={styles.down}>
                   
                    <TextInput placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Password" style={styles.input}/>
                    
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.textButton}>SIGN IN</Text>
                    </TouchableOpacity>

                    <View style={styles.Signup}>
                        <Text style={styles.textDont}>DONT HAVE AN ACCOUNT ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.textSignup}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

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
        flex:1,
        marginHorizontal:20
    },
    image:{
        width:160,
        height:150
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
    },
    Signup:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    textDont:{
        color:'#4D4545',
        fontSize:12
    },
    textSignup:{
        fontSize:12,
        fontWeight:'bold'
    }
})
