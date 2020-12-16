import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import NoNotification from '../assets/image/notification1.png'

const NoContentNotification = ({navigation,props}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={NoNotification} style={styles.img} />
            </View>
            <View>
                <Text style={styles.text}> Tidak ada pemberitahuan saat ini </Text>
            </View>
        </View>
    )
}

export default NoContentNotification

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30,
        width: '100%',
    },

    containerImg:{
        // borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },

    text:{
        fontSize: 18,
    }
    
})
