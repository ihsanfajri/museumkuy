import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, KeyboardAvoidingView, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import Profile from '../assets/image/user.png'

import LogoSearch from '../assets/logo/loupe.png'
import ButtonLihatSemua from '../components/ButtonLihatSemua'
import City from '../components/City'
import Museum from '../components/Museum'
import MuseumPopuler from '../components/MuseumPopuler'
import Searching from '../components/Searching'

const HomeScreen = ({navigation}) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
        <ScrollView 
         keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.container}>
            <Animatable.View 
            animation="fadeInDownBig"
            style={styles.up}>
                <View style={styles.up1}>
                    <View style={styles.containerText}>
                        <Text style={styles.hi}>Hi, User</Text>
                        <Text style={styles.message}>Choose the</Text>
                        <Text style={styles.message}>Museum you want</Text>
                    </View>
                    <View style={styles.containerImgProfile}>
                        <View style={styles.bingkai}>
                            <Image source={Profile} style={styles.img}/>
                        </View>
                    </View>
                </View>
                <View style={styles.containerSearch}>
                    <Searching /> 
                </View>
            </Animatable.View>
            <Animatable.View
             animation="fadeInUpBig"
             style={styles.down}>
                <ScrollView>
                    <Text style={styles.fontMostPopuler}>The Most Populer Museum</Text>
                    <ScrollView horizontal>
                        <TouchableOpacity style={styles.btnMuseumPopuler}> 
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMuseumPopuler}>
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMuseumPopuler}>
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMuseumPopuler}>
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMuseumPopuler}>
                            <MuseumPopuler />
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:20}}/>
                        <Text style={styles.fontCity}>The City of DKI Jakarta</Text>
                        <ScrollView horizontal>
                            <TouchableOpacity style={styles.btncity}>
                                <City name="Jakarta Barat" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btncity}>
                                <City name="Jakarta Timur" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btncity}>
                                <City name="Jakarta Selatan" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btncity}>
                                <City name="Jakarta Utara" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btncity}>
                                <City name="Jakarta Pusat" />
                            </TouchableOpacity>
                        </ScrollView>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:10}}/>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')} style={styles.btnMuseum}>
                            <View style={styles.containerShadow}>
                                <Museum />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')} style={styles.btnMuseum}>
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')} style={styles.btnMuseum}>
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')} style={styles.btnMuseum}>
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')} style={styles.btnMuseum}>
                            <Museum />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonLihatSemua} onPress={() => navigation.navigate('AllMuseum')}>
                        <ButtonLihatSemua />
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
        // backgroundColor: 'white',
    },
    up:{
        flex:1,
        // backgroundColor:'#A01F1F',
    },

    up1:{
        flex:1,
        flexDirection: "row",
        // borderWidth: 1,
        width: '90%',
        alignSelf: "center",
    },

    containerText:{
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 3,
        // borderWidth: 1,
        marginLeft: 10,
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },

    hi:{
        color:'white'
    },
    message:{
        color:'white',
        fontSize:20
    },


    containerImgProfile:{
        flex:1,
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },

    bingkai:{
        width:50,
        height:50,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60/2,

    },

    img:{
        width:40,
        height:40,
    },

    containerSearch:{
        flex: 0.6,
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        height: '100%',
        // borderWidth: 1,
        // backgroundColor: 'grey',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

   
    down:{
        flex:1.75,
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingTop:20,
        paddingHorizontal:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    fontMostPopuler:{
        fontSize:14,
        color:'#A01F1F',
        marginBottom:10,
        fontWeight: "bold"
    },
    fontCity:{
        marginVertical:20,
        fontSize:14,
        color:'#A01F1F',
        fontWeight: "bold"
    },
    buttonLihatSemua:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20
    },

    btnMuseum:{
        // backgroundColor: 'blue',
        // borderWidth: 1,
        // width: '100%',
    },
    btnMuseumPopuler:{
        // backgroundColor: 'blue',
        // borderWidth: 1,
        // width: '100%',
    },
    btncity:{
        // backgroundColor: 'blue',
        // borderWidth: 1,
        // width: '100%',
    },
    

})
