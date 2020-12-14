import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import UpdateProfile from '../components/UpdateProfile'

const ProfileUpdateScreen = () => {
    return (
       
       <ScrollView style={styles.container}>
           <View style={styles.containerContent}>
            <   UpdateProfile />
           </View>
       </ScrollView>
    )
}

export default ProfileUpdateScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'green',
    },

    containerContent:{
        flex: 1,
        // backgroundColor: 'blue',
    }
})
