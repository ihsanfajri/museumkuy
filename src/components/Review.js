import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import KomentarUser from '../components/komentarUser'

import StarRating from 'react-native-star-rating';

import Star from '../assets/image/star.png'


const Review = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerBeriUlasan}>
                <View style={styles.containerTitle1}>
                    <Text style={{fontSize: 18, fontWeight: "bold",}}>Beri Ulasan</Text>
                </View>
                <View style={styles.formReview}>
                    <View style={styles.RatingMuseum}>
                        <Image source={Star} style={{height: 30, width:30}} />
                        <Image source={Star} style={{height: 30, width:30}} />
                        <Image source={Star} style={{height: 30, width:30}} />
                        <Image source={Star} style={{height: 30, width:30}} />
                        <Image source={Star} style={{height: 30, width:30}} />
                    </View>
                    <View style={styles.inputComent}>
                        <View style={styles.containerFormComent}>
                            <TextInput editable multiline maxLength={120} numberOfLines={3} placeholder="Beri Komentar" style={styles.kolomKomentar}/>
                        </View>
                        <View style={styles.containerBtnKirim}>
                            <TouchableOpacity style={styles.btnKirim}>
                                <Text>Kirim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerAllUlasan}>
                <View style={styles.containerTitle2}>
                    <Text style={{fontSize: 18, fontWeight: "bold",}}>Semua Ulasan</Text>
                </View>
                <View style={styles.pembatas}>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:10, width:'100%',}}/>
                </View>
                <View style={styles.ReviewAll}>
                    <KomentarUser/>
                    <KomentarUser/>
                    <KomentarUser/>
                    <KomentarUser/>
                    <KomentarUser/>
                </View>
            </View>
            
        </View>
    )
}

export default Review

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },

    containerBeriUlasan:{
        flex: 1,
        // borderWidth: 1,
        // height: 230,
    },

    containerTitle1:{
        marginBottom: 10,
        width:320,
        alignSelf: "center",
        // borderWidth: 1,
    },

    formReview:{
        height: '85%',
        width: 320,
        // borderWidth: 1,
        marginBottom: 10,
    },

    RatingMuseum:{
        flexDirection: "row",
        alignSelf: "center",
        // borderWidth: 1,
        marginBottom: 10,
    },

    inputComent:{
        // borderWidth:1,
        marginTop: 10,
    },

    containerFormComent:{
        alignItems: "center",
    },

    kolomKomentar:{
        borderWidth: 1,
        width:'95%',
        borderColor: '#C4C4C4'
    },

    containerBtnKirim:{
        alignItems: "flex-end",
        justifyContent: "center",
        alignSelf: "center",
        height: 50,
        backgroundColor: '#C4C4C4',
        width:'95%',
        marginBottom: 10,
    },

    btnKirim:{
        height:30,
        width: 75,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },

    ReviewAll:{
        marginTop: 10,
    },

    containerAllUlasan:{
        flex: 1,
        // borderWidth: 1,
        // backgroundColor: 'blue',
        marginTop: 10,
    },

    containerTitle2:{
        // marginTop:,
        marginBottom: 10,
        width:320,
        alignSelf: "center",
        // borderWidth: 1,
    },





})
