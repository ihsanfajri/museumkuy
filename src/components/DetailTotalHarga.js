import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailTotalHarga = () => {
    return (
        <View>
            <View style={styles.containerHarga}>
                <Text>Harga Tiket</Text>
                <Text>Rp. 10.000</Text>
            </View>
            <View style={styles.containerHarga}>
                <Text>Biaya Layanan</Text>
                <Text>Rp. 581</Text>
            </View>
            <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:5, marginBottom:5, marginHorizontal:5}}/>
            <View style={styles.containerHarga}>
                <Text style={styles.totalHarga}>Total Harga</Text>
                <Text style={styles.totalHarga}>Rp. 50.581</Text>
            </View>
        </View>
    )
}

export default DetailTotalHarga

const styles = StyleSheet.create({

    containerHarga:{
        marginHorizontal: 5,
        marginVertical: 5,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    totalHarga:{
        fontSize: 16,
        fontWeight: 'bold',
    }
})
