import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacityComponent,ScrollView, TouchableOpacity } from 'react-native'
import { useScrollToTop } from '@react-navigation/native';

import TitleMuseum from '../components/TitleMuseum'
import ContentDesc from '../components/ContentDesc'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import museum from '../assets/image/musuem.jpg'
import description from '../assets/image/clipboard.png'
import star from '../assets/image/star.png'
import gallery from '../assets/image/gallery.png'
import location from '../assets/image/placeholder.png'
import Maps from '../components/Maps';

const MapsMuseumScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={museum} style={styles.fotoMuseum} />
            <View style={styles.Top}>
                <View style={styles.title}>
                    <TitleMuseum />
                </View>
            </View>
            <View style={styles.mid}> 
                <View style={styles.btnNvaigation}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('DescMuseum')}>
                        <View style={styles.lingkaran}>
                            <Image source={description} style={styles.imageDesc} />
                        </View>
                        <Text style={styles.titleBtn}>Deskripsi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GaleriMuseum')}>
                        <View style={styles.lingkaran}>
                            <Image source={gallery} style={styles.imagegallery} />
                        </View>
                        <Text style={styles.titleBtn}>Galeri Foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <View style={styles.lingkaran}>
                            <Image source={location} style={styles.imageDesc} />
                        </View>
                        <Text style={styles.titleBtn}>Lokasi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ReviewMuseum') }>
                        <Text style={styles.Rating}>5.0</Text>
                        <View style={styles.containerStar}>
                            <Image source={star} style={styles.imgstar} />
                            <Image source={star} style={styles.imgstar} />
                            <Image source={star} style={styles.imgstar} />
                            <Image source={star} style={styles.imgstar} />
                            <Image source={star} style={styles.imgstar} />
                        </View>
                        <Text style={styles.titleBtn}>200 Reviews</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pembatas}>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop: 10, width:'95%',}}/>
                </View>
                <View style={styles.isiContent}>            
                       <Maps />
                </View>
                
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.containerTextbeli}>
                    <Text style={{fontSize: 18,}}>Rp. 10.0000 / Tiket</Text>
                </View>
                <TouchableOpacity style={styles.btnbeli} onPress={ () => navigation.navigate('beliTiket')}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold',}}>
                        Beli
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default MapsMuseumScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'blue',
    },

    Top: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'yellow',
        marginBottom: 20,
    },

    mid:{
        flex: 2.5,
        backgroundColor: 'white',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        // height: '60%',
        // width: '100%',
        position: 'relative',
    },

    fotoMuseum:{
        height: '35%',
        width: '100%',
        position: 'absolute',
    },

    title:{
        flex: 2,
        position: 'absolute',
        // backgroundColor: 'black',
        width: '100%',
        height: '25%',
    },

    lingkaran:{
        width: 50,
        height: 50,
        // borderWidth: 1,
        borderRadius: 50/2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#EDEDED',
    },

    imageDesc:{
        height: 27,
        width: 24,

    },

    btnNvaigation:{
        flexDirection: "row",
        // borderWidth: 1,
        // backgroundColor: 'green',
        width: '85%',
        height: 80,
        justifyContent: "space-around",
        alignSelf:"center",
        marginTop: 20,
    },

    btn:{
        alignItems: "center",
    },

    Rating:{
        fontWeight: 'bold',
        fontSize: 25,
    },

    imgstar:{
        width: 10,
        height: 10,
    },

    containerStar:{
        flexDirection: "row",
    }, 

    titleBtn:{
        fontSize: 12,
    },

    pembatas:{
        alignItems: "center",
    },

    isiContent:{
        // borderWidth:1,
        height: '50%',
        width: '85%',
        justifyContent:'center',
        alignItems: "center",
        marginLeft: 30,
        marginTop: 30,
    },

    scroll:{
        marginTop: 20,
        marginBottom: 10,
    },
    imagegallery:{
        height: 27,
        width: 27,
    },

    containerBtn:{
        flex: 0.4,
        height: 60,
        width: '100%',
        // borderTopWidth: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderColor:'#C4C4C4',
        backgroundColor: 'white'
    },

    btnbeli:{
        backgroundColor: '#A01F1F',
        height: '100%',
        width: 100,
        // borderColor:'B',
        // borderWidth: 1,
        // borderTopLeftRadius: 30,
        // borderBottomLeftRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    containerTextbeli:{
        justifyContent: "center",
        backgroundColor: 'white',
        height: 60,
        width: '75%',
        alignItems: "center",
    },
   
})
