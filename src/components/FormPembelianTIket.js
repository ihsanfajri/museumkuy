import React,{useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import calendar from '../assets/image/calendar.png'
import minus from '../assets/image/remove.png'
import plus from '../assets/image/plus.png'

const FormPembelianTIket = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text1}>Pemesanan Tiket</Text>
                <Text style={styles.text2}>Museum Fatahilah</Text>
            </View>
            <View style={styles.pembatas}>
                <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:20, width:'75%',}}/>
            </View>
            <View style={styles.formPembelian}>
                <View style={styles.hargaTiket}>
                    <Text style={{fontSize: 14,}}>Harga Tiket </Text>
                    <Text style={{fontSize: 14,}}>Rp. 10.000</Text>
                </View>
                <View style={styles.formJumlahTiket}>
                    <View style={styles.fontJumlahTiket}>
                        <Text style={{fontSize: 14,}}>Jumlah Beli Tiket</Text>
                    </View>
                    <View style={styles.JumlahTiket}>
                        <TouchableOpacity style={styles.btnMinus}>
                            <Image source={minus} style={styles.Minus} />
                        </TouchableOpacity>
                        <TextInput style={styles.inputJumlah} />
                        <TouchableOpacity style={styles.btnMinus}>
                            <Image source={plus} style={styles.Minus} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tanggalKunjungan}>
                    <View style={{justifyContent: "center", height: 40,}}>
                        <Text style={{fontSize: 14,}}>Tanggal Kunjungan</Text>
                    </View>
                    <TextInput style={styles.inputTanggal} placeholder="Tanggal Kunjungan"/>
                    {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
                    <TouchableOpacity style={styles.btnMinus} onPress={showDatepicker}>
                        <Image source={calendar} style={styles.Minus} />
                    </TouchableOpacity>
                </View>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
            </View>
        </View>
    )
}

export default FormPembelianTIket

const styles = StyleSheet.create({

    title:{
        // backgroundColor: 'black',
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        // width: '100%',
        // height: '25%',
    },

    text1:{
        fontSize: 14,
        
    },

    text2:{
        fontSize: 18,
        fontWeight: "bold",
    },

    pembatas:{
        alignItems: 'center'
    },

    formPembelian:{
        marginTop: 20,
        // backgroundColor: 'green',
        height: '65%',
        justifyContent: "center",
    },

    hargaTiket:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
    },

    formJumlahTiket:{
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: 'blue'
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    }, 

    fontJumlahTiket:{
        height: 40,
        justifyContent: "center",
        // backgroundColor: 'green',
        marginTop: 10,
    },

    inputJumlah:{
        borderBottomWidth: 1,
        width: 30,
        height: 40,
        fontSize: 14,
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,

    },

    Minus:{
        height: 15,
        width: 15,
    },

    btnMinus:{
        height: 25,
        width: 25,
        borderRadius: 25/2,
        backgroundColor: '#EDEDED',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    JumlahTiket: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: 'blue'
        marginTop: 10,
    },

    tanggalKunjungan:{
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        marginTop: 20,
    },

    inputTanggal:{
        // borderWidth: 1,
        height: 40,
    }

})
