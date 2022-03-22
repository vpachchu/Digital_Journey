import React, { useState } from 'react';
import MultilineTextBox from '../Components/MultilineTextBox';
import SmallLogo from '../Components/SmallLogo'
import { View, StyleSheet, Button } from 'react-native';
import FloatingButton from '../Components/FloatingButton';
import { FloatingAction } from 'react-native-floating-action';
import FlatButton from '../Components/FlatButton';
import DatePicker from 'react-native-date-picker';


export default function MyDiary() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)



    return (
        <View style={styles.container}>
            <SmallLogo />

            <DatePicker
                modal
                date={date}
                onDateChange={setDate}
                mode='datetime'
                open={open}
            />

            <MultilineTextBox />
            <FloatingAction
                actions={action}
                onPressItem={
                    (name) => {
                        console.log(`selected button: ${name}`);
                    }} />



        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
})

const action = [
    {

        text: 'Save',
        icon: require('../assets/icons/baseline_save_black_24dp.png'),
        name: 'bt_language',
        position: 1

    },
    {

        text: 'Select Date',
        icon: require('../assets/icons/baseline_calendar_month_black_24dp.png'),
        name: 'l',
        position: 2,

    },

]