import React from 'react'
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Image } from 'react-native'
import { RNCamera } from 'react-native-camera';
import camera from '../assets/logo/camera.png'

class TakePictureScreen extends React.Component {
    
    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
          this.props.navigation.navigate('TransaksiSukses');
        }
      };
    render(){


        return (
            <View style={styles.container}> 
                <View style={styles.top}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                    />
                    
                </View>
                <View style={styles.bottom}>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Image source={camera} style={{width:40,height:40}} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
    
}

export default TakePictureScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    top:{
        flex:3,
        // backgroundColor:'yellow'
    },
    bottom:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-around',       
        backgroundColor:'rgba(52, 52, 52, 0.9)',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
})
