import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Back from '../assets/image/leftarrow.png'
import NoContentNotification from '../components/NoContentNotification'

const NotificationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.containerBtnBack}>
                    <TouchableOpacity style={styles.btnBack} onPress={ () => navigation.navigate('Dashboard')}>
                        <Image source={Back} style={styles.imgBack}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Pemberitahuan</Text>
                </View>
            </View>
            <View style={styles.containerContent}>
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.containerPemberitahuan}>
                        <NoContentNotification/>
                        <View style={styles.containerBtn}>
                            <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Dashboard')}>
                                <Text style={styles.textBtn}>Kembali Ke halaman utama</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    
    containerTop:{
        flex:1,
        // borderWidth: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerBtnBack:{
        flex:1,
        // borderWidth: 1,
    },
    
    btnBack:{
        height: 40,
        width: 40,
        borderRadius: 40/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerTitle:{
        flex: 1,
        // borderWidth:1,
        // marginTop: 5,
        justifyContent: 'flex-end',
        marginHorizontal: 20,
    },

    title:{
        fontSize: 20,
        color: '#A01F1F',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    imgBack:{
        width: 30,
        height: 30,
    },

    containerContent: {
        flex: 4,
        height: '100%',
        // borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    containerScroll:{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },

    containerPemberitahuan:{
        height: '100%',
        width: '100%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerBtn:{
        // borderWidth: 1,
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    btn:{
        height: '100%',
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        borderColor:'#A01F1F',
    },

    textBtn:{
        color: '#A01F1F',
    }
})
