import React, { useState } from 'react';
import MultilineTextBox from '../Components/MultilineTextBox';
import SmallLogo from '../Components/SmallLogo'
import { View, StyleSheet, Button, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function MyDiary() {

    const [open, setOpen] = useState(true)
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };




    return (

        <View style={styles.container}>

            <SmallLogo />
            <View style={styles.container}>
                {/* Display the selected date */}
                {/* <View style={styles.pickedDateContainer}>
                    <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
                </View> */}

                {/* The button that used to trigger the date picker */}
               
                {/* The date picker */}
                {isPickerShow && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'android' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onChange}
                        style={styles.datePicker}
                     
                    />
                )}
            </View>

            <MultilineTextBox />
            <FloatingAction
                color='#212529'
                actions={action}
                onPressItem={
                    (name) => {

                       if(name=='bt_selectdate')
                       {
                           console.log('calender pressed');
                           {showPicker()}
                           
                       }


                    }}
            />




        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    fab: {

    },
    datePicker:{
color:'green',
        
    }

})

const action = [
    {

        text: 'Save',
        icon: require('../assets/icons/baseline_save_black_24dp.png'),
        name: 'bt_save',
        position: 1,
        color: '#495057',


    },
    {

        text: 'Select Date',
        icon: require('../assets/icons/baseline_calendar_month_black_24dp.png'),
        name: 'bt_selectdate',
        position: 2,
        color: '#495057',


    },

]
