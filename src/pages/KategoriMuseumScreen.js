import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import KategoriMuseum from '../components/KategoriMuseum'
import arkeologi from '../assets/image/jenis/arkeologi.jpg'
import anak from '../assets/image/jenis/anak.jpg'
import biografi from '../assets/image/jenis/biografi.jpg'
import etnologi from '../assets/image/jenis/etnologi.jpg'
import geologi from '../assets/image/jenis/geologi.jpg'
import science from '../assets/image/jenis/ilmupengetahuan.jpg'
import maritim from '../assets/image/jenis/maritim.jpg'
import militer from '../assets/image/jenis/militer.jpg'
import otomotif from '../assets/image/jenis/otomotif.jpg'
import seni from '../assets/image/jenis/seni.jpg'

import sejarah from '../assets/image/jenis/sejarah.jpg'

const KategoriMuseumScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.bingkai}>
                    <TouchableOpacity onPress={ () => navigation.navigate('AllKategoriMuseum')} >
                        <KategoriMuseum name="Arkeologi" image={arkeologi} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Anak" image={anak} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Biografi" image={biografi} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Etnologi" image={etnologi} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Geologi" image={geologi} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Science" image={science} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Maritim" image={maritim} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Militer" image={militer} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Otomotif" image={otomotif} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bingkai}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Seni" image={seni} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentTerakhir}>
                <View style={styles.bingkaiTerakhir}>
                    <TouchableOpacity>
                        <KategoriMuseum name="Sejarah" image={sejarah} />
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default KategoriMuseumScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    content:{
        flex:1,
        // borderWidth: 1,
        // backgroundColor:'yellow',
        // marginHorizontal:20,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },

    bingkai:{
        // borderWidth: 1,
        width: '40%',
    },
    contentTerakhir:{
        flex:1,
        // borderWidth: 1,
        // backgroundColor:'yellow',
        marginHorizontal: 25,
        marginVertical:10,
        flexDirection:'row',
        
    },

    bingkaiTerakhir:{
        // borderWidth: 1,
        width: '47%',
    }
})
