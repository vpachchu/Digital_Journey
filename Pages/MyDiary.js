import React, { useState, useEffect } from 'react';
import MultilineTextBox from '../Components/MultilineTextBox';
import SmallLogo from '../Components/SmallLogo'
import { View, StyleSheet, Button, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import DateTimePicker from '@react-native-community/datetimepicker';
import ReadableTextBox from "../Components/ReadableTextBox";
import FloatingButton from "../Components/FloatingButton";
import HintText from '../Components/HintText';
import { FAB } from 'react-native-paper';


export default function MyDiary(navigation) {

    const [showElement, setElement] = useState(true);
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const Back = () => {
        setElement(true)
        console.log('back');
        setDate(new Date(Date.now()));

    }
    const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }

        if (event.type === "set") {
            console.log(date)
            setElement(false)


            // console.log("visibilityVariableName:", [visibilityVariableName], " - value:", value); 
        }
    };




    return (

        <View style={styles.container}>

            <SmallLogo />


            {/* Display the selected date */}
            <View style={styles.pickedDateContainer}>
                <HintText text={date.toUTCString()} />
            </View>

            <View style={styles.container}>


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

            {showElement ?
                <MultilineTextBox /> :
                <ReadableTextBox />

            }


            {showElement ?

                <FloatingAction
                    color='#212529'
                    actions={action}
                    onPressItem={
                        (name) => {

                            if (name == 'bt_selectdate') {
                                console.log('calender pressed');
                                { showPicker() }

                            }


                        }}

                /> : <FAB
                    style={styles.fab}
                    size={'small'}
                    onPress={Back}
                    color={'#ffffff'}
                    icon={'undo'}

                />}


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
    datePicker: {
        color: 'green',

    },
    fab: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#212529',
        position: 'absolute',
        bottom: 30,
        left: 30,

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
