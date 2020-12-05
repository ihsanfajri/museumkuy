import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Maps = () => {
    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: -6.1352 ,
                longitude: 106.8111113 ,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >
            </MapView>
        </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        marginHorizontal:20,
        backgroundColor:'blue'
      },
      map: {
        ...StyleSheet.absoluteFillObject,
    },
})
