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
                        <TextInput placeholder="search" style={styles.textInput} />
                    </View>
                    <TouchableOpacity style={styles.imageContainer}>
                            <Image source={searchLogo} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.filterContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                            <Image source={notifikasiLogo} style={styles.imageFilter} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userContainer}>
                        <Image source={userLogo} style={styles.imageUser} />
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
                        <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:20,marginHorizontal:5}}/>
                        <View style={styles.containerKota}>
                            <Kota image={image1} name="Jakarta" />
                            <Kota image={image2} name="Bandung" />
                        </View>
                        <View style={styles.containerKota}>
                            <Kota image={image3} name="surabaya" />
                            <Kota image={image4} name="yogyakarta" />
                        </View>
                    </View>
                    <View>
                        <View style={styles.containerfont}>
                            <Text style={styles.fontJudul} >Jenis Museum</Text>
                            <TouchableOpacity>
                                <Text style={styles.fontLihatSemua} >Lihat Semua</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:20,marginHorizontal:5}}/>
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
                        <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:20,marginHorizontal:5}}/>
                        <View>
                            <TouchableOpacity>
                                <Museum />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Museum />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Museum />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Museum />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Museum />
                            </TouchableOpacity>
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
        paddingHorizontal:20,
        paddingTop:10,
        flexDirection:'row'
    },
    inputContainer:{
          flex:5,
    },
    textInput:{
          borderWidth:1,
          borderColor:'#C4C4C4',
          borderTopLeftRadius:20,
          borderBottomLeftRadius:20,
    },
    imageContainer:{
          flex:1,
          paddingHorizontal:20,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#A01F1F'
    },
    image:{
          width:20,
          height:20
    },
    filterContainer:{
          marginLeft:20,
          justifyContent:'center',
          alignItems:'center'
    },
    imageFilter:{
          width:30,
          height:30
    },
    userContainer:{
        flex:1,
        marginLeft:20,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:20/2,
        borderColor:'#DBD7D2',
        justifyContent:'center',
        alignItems:'center'
    },
    imageUser:{
        width:20,
        height:20,
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
        paddingHorizontal:10
    },
    fontJudul:{
        fontWeight:'bold'
    },
    fontLihatSemua:{
        color:'#A01F1F'
    },
    containerKota:{
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
    },
    containerJenis:{
        marginTop:10,
        marginHorizontal:20,
    }
})
