import React,{useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, TouchableHighlight,ScrollView } from 'react-native'
import logoChangePassword from '../assets/image/changepassword.png'
import * as Animatable from 'react-native-animatable'

import ChangePassword from '../components/ChangePassword'


const ChangePasswordScreen = ({navigation}) => {
    // const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={styles.containerScroll}> 
           <View style={styles.containerContent}>
               <ChangePassword  />
           </View>
        </ScrollView>
    )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({

    containerContent:{
        alignSelf: 'center',
        width: '95%',
        height: '100%',
        // borderWidth: 1,
    }
    
    
})
