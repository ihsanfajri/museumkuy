import React from 'react'
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity, ScrollView } from 'react-native'
import searchLogo from '../assets/logo/loupe.png'
import notifikasiLogo from '../assets/image/notification.png'
import userLogo from '../assets/image/user.png'
import Kota from '../components/Kota'
import image1 from '../assets/image/kota/jakarta.jpg'
import image2 from '../assets/image/kota/bandung.jpg'
import image3 from '../assets/image/kota/surabaya.jpg'
import image4 from '../assets/image/kota/yogyakarta.jpg'
import seni from '../assets/image/jenis/seni.jpg'
import arkeologi from '../assets/image/jenis/arkeologi.jpg'
import maritim from '../assets/image/jenis/maritim.jpg'
import sejarah from '../assets/image/jenis/sejarah.jpg'
import otomotif from '../assets/image/jenis/otomotif.jpg'
import JenisMuseum from '../components/JenisMuseum'
import Museum from '../components/Museum'

class HomeScreen extends React.Component {
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputSearch}>
                            <TextInput placeholder="search" style={styles.textInput} />
                        </View>
                        <View style={styles.imageContainer}>
                            <TouchableOpacity style={styles.btnSearch}>
                                <Image source={searchLogo} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.notifContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Image source={notifikasiLogo} style={styles.imageNotifikasi} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userContainer}>
                        <View style={styles.bingkai}> 
                            <Image source={userLogo} style={styles.imageUser} />
                        </View>
                    </View>
                </View>
                <View style={styles.containerCarousel}>
                    <Text>ini carousel</Text>
                </View>
                <View style={styles.containerBottom}>
                    <View>
                        <View style={styles.containerfont}>
                            <Text style={styles.fontJudul} >Jelajahi Kota</Text>
                            <TouchableOpacity>
                                <Text style={styles.fontLihatSemua} >Lihat Semua</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:10, marginBottom:10, marginHorizontal:15}}/>
                        <View style={styles.containerKota}>
                            <View style={styles.bingkaKota}>
                                <TouchableOpacity style={styles.btnKota}>
                                    <Kota image={image1} name="Jakarta" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bingkaKota}>
                                <TouchableOpacity style={styles.btnKota}>
                                    <Kota image={image2} name="Bandung" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerKota}>
                            <View style={styles.bingkaKota}>
                                <TouchableOpacity style={styles.btnKota}>
                                    <Kota image={image3} name="surabaya" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bingkaKota}>
                                <TouchableOpacity style={styles.btnKota}>
                                    <Kota image={image4} name="yogyakarta" />   
                                </TouchableOpacity>
                            </View>
                          
                        </View>
                    </View>
                    <View>
                        <View style={styles.containerfont}>
                            <Text style={styles.fontJudul} >Jenis Museum</Text>
                            <TouchableOpacity>
                                <Text style={styles.fontLihatSemua} >Lihat Semua</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:10,marginHorizontal:15}}/>
                        <ScrollView style={styles.containerJenis} horizontal={true}>
                            <TouchableOpacity>
                                <JenisMuseum image={arkeologi} jenis="Arkeologi" color="#C29726"  />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <JenisMuseum image={seni} jenis="Seni" color="#CFC706" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <JenisMuseum image={maritim} jenis="Maritim" color="#0078BC" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <JenisMuseum image={sejarah} jenis="Sejarah" color="#308739" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <JenisMuseum image={otomotif} jenis="Otomotif" color="#873B30" />
                            </TouchableOpacity>
                        </ScrollView> 
                    </View>
                        
                    <View>
                        <View style={styles.containerfont}>
                            <Text style={styles.fontJudul} >Rekomendasi Museum</Text>
                            <TouchableOpacity>
                                <Text style={styles.fontLihatSemua} >Lihat Semua</Text>
                            </TouchableOpacity>
                        </View>
                            <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:10, marginBottom:10, marginHorizontal:15}}/>
                        <View>
                            <View style={styles.bingkaiMuseum}>
                                <TouchableOpacity>
                                    <Museum />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bingkaiMuseum}>
                                <TouchableOpacity>
                                    <Museum />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bingkaiMuseum}>
                                <TouchableOpacity>
                                    <Museum />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bingkaiMuseum}>
                                <TouchableOpacity>
                                    <Museum />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bingkaiMuseum}>
                                <TouchableOpacity>
                                    <Museum />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
    
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'white'
    },
    header:{
        paddingHorizontal:20,
    },
    containerHeader:{
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingTop:10,
        flexDirection:'row'
    },

    inputContainer:{
        flex:8,
        // borderWidth:1,
        flexDirection: 'row',
    },

    inputSearch:{
        flex: 1,
        // borderWidth: 1,
    },

    textInput:{
          borderWidth:1,
          borderColor:'#C4C4C4',
          height: 40,
    },

    imageContainer:{
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnSearch:{
        width: '100%',
        height: 40,
        // borderWidth: 1,
        backgroundColor: '#A01F1F',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image:{
        width:25,
        height:25
    },

    notifContainer:{
        flex: 1.5,
        // borderWidth: 1,
        marginLeft:5,
        justifyContent:'center',
        alignItems:'center'
    },

    imageNotifikasi:{
          width:30,
          height:30
    },

    userContainer:{
        flex:1.5,
        marginLeft:5,
        // borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },

    bingkai:{
        backgroundColor:'white',
        borderWidth:1,
        width:40,
        height:40,
        borderRadius: 40/2,
        borderColor:'#DBD7D2',
        justifyContent:'center',
        alignItems:'center'
    },

    imageUser:{
        width:30,
        height:30,
    },
    containerCarousel:{
        padding:20,
        backgroundColor:'white'
    },
    containerBottom:{
        marginTop:20,
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

    },
    containerfont:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    fontJudul:{
        fontWeight:'bold'
    },
    fontLihatSemua:{
        color:'#A01F1F'
    },

    containerKota:{
        // borderWidth:1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },

    bingkaKota:{
        width: '45%'
    },

    btnKota:{
        width: '100%',
        height: 75,
    },

    containerJenis:{
        marginTop:10,
        marginHorizontal:15,
    },

    bingkaiMuseum:{
        // borderWidth: 1,
        width: '95%',
        alignSelf: 'center',
    }
})
