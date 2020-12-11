import React,{useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, TouchableHighlight,ScrollView, ImageBackground } from 'react-native'
import userPhoto from '../assets/image/mariavania.jpeg'
import cameraLogo from '../assets/logo/camera1.png'
import * as Animatable from 'react-native-animatable'



const UpdateProfileScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>

                {/*-------- modal ------- */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>your profile has been updated successfully</Text>

                            <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#A01F1F" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                navigation.navigate('Account');
                            }}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            {/* ------------ */}

                <ImageBackground source={userPhoto} style={styles.top}>
                    <TouchableOpacity style={styles.buttonCamera}>
                        <Image  source={cameraLogo} style={{width:50,height:50}} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.bottom}>
                    <View style={styles.profileContainer}>
                        <Text style={styles.fontProfile}>Profile</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.fontForm}>Nama Lengkap</Text>
                        <TextInput value="Maria Vania" style={styles.textInput}/>
                        <Text style={styles.fontForm}>Email</Text>
                        <TextInput value="mariauwuw@gmail.com" style={styles.textInput}/>
                    </View>
                    <View styles={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}> 
                            <Text style={styles.fontButton}>UPDATE PROFILE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        
                
    )
}

export default UpdateProfileScreen

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:'white'
    },
    container:{
        flex:1,
        backgroundColor:'white',
    },
    top:{
        flex:1,
        height:300,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    buttonCamera:{
        backgroundColor:'white',
        borderRadius:50,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
        marginBottom:20,
    },
    bottom:{
        flex:1,
        // backgroundColor:'yellow'
    },
    profileContainer:{
        backgroundColor:'#EAEAEA',
        padding:10
    },
    fontProfile:{
        color:'#555555'
    },
    form:{
        marginHorizontal:10,
        
    },
    fontForm:{
        color:'#9D9D9D',
        marginVertical:5
    },
    textInput:{
        borderBottomWidth:1,
    },
    buttonContainer:{
        flex:1,
    },
    button:{
        backgroundColor:'#A01F1F',
        padding:10,
        alignItems:'center',
        marginTop:30,
        marginHorizontal:20,
        borderRadius:5,
    },
    fontButton:{
        color:'white',
        fontWeight:'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 100,
        paddingVertical:20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:5,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }


})
