import React from 'react'
import { StyleSheet, Text, View, TextInput,Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LogoSearch from '../assets/logo/loupe.png'
import Museum from '../components/Museum'
import MuseumAll from '../components/MuseumAll'
import * as Animatable from 'react-native-animatable'

const AllMuseumScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                {/* <View style={styles.containerTitle}>
                    <Text style={styles.Title}>
                        Jakarta Barat
                    </Text>
                </View> */}
                <View style={styles.userSearch}>
                    <View style={styles.searchInput}>
                        <TextInput placeholder="search" style={styles.textInput}/>
                    </View>
                    <View style={styles.searchLogo}>
                        <TouchableOpacity>
                            <Image source={LogoSearch} style={{width:25,height:25,}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.down}>
                <ScrollView style={styles.contenContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <MuseumAll />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <MuseumAll />
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </View>
    )
}

export default AllMuseumScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    up:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    down:{
        flex: 5,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:10,
        alignItems: "center" ,   },

    userSearch:{
        flex:1,
        flexDirection:'row',
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: 'green',
    },

    searchInput:{
        marginRight:10,  
    },
    
    textInput:{
        borderWidth: 1,
        backgroundColor:'white',
        borderColor:'#DBD7D2',
        borderRadius:20,
        width:250,
        height:35,
        paddingLeft: 10,
        fontSize: 12,
    },

    btn:{
        borderWidth: 1,
        borderRadius: 30,
        height: 200,
        width: 315,
        borderColor: '#C4C4C4',
        marginTop: 10,
    },
    
    contenContainer:{
        marginTop: 5,
    },

    containerTitle:{
        marginTop: 5,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    Title:{
        color:'white',
        fontSize: 18,
        fontWeight:'bold'
    }

})
