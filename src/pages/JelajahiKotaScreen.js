import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image, FlatList } from 'react-native'
import LogoSearch from '../assets/logo/loupe.png'
import KotaDetail from '../components/KotaDetail'
import axios from 'axios'



const JelajahiKotaScreen = () => {
const [data,setData] = useState([]);
const [isLoading,setIsLoading] = useState(true);

const getDataKota = () => {
    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32')
    .then(function (response) {
      setData(response.data.kota_kabupaten);
      setIsLoading(false);
      console.log(response.data.kota_kabupaten);

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }



  useEffect(() => {
    getDataKota()
  }, [])



    return (
        <View style={styles.container}>
            <View style={styles.up}>
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
            <View style={styles.down}>
                <FlatList
                    data={data}
                    renderItem={({item}) =>
                    <TouchableOpacity> 
                        <KotaDetail nama={item.nama} />
                    </TouchableOpacity>
                }
                    keyExtractor={(item, index) => index.toString()}
                /> 
            </View>
        </View>
    )
}

export default JelajahiKotaScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    up:{
        flex:1,
        backgroundColor:'white',
    },
    down:{
        flex:3,
        // backgroundColor:'red'
    },
    userSearch:{
        flex:1,
        flexDirection:'row',
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal:20
        // backgroundColor: 'green',
    },

    searchInput:{
        flex:2,
        // marginRight:10,  
    },
    
    textInput:{
        borderWidth: 1,
        backgroundColor:'white',
        borderColor:'#DBD7D2',
        width:'100%',
        height:35,
        paddingLeft: 10,
        fontSize: 12,
    },
    searchLogo:{
        // flex:1,
        width:40,
        height:35,
        backgroundColor:'#C4C4C4',
        justifyContent:'center',
        alignItems:'center'
        
    }
})
