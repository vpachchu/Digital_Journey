import React from 'react';
import { useFonts } from 'expo-font';
import { TextInput, StyleSheet, View } from 'react-native';

export default function MultilineTextBox() {

    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
    }
    )

    return (
        <View style={styles.textBoxContainer}>
            <TextInput
                multiline={true}
                scrollEnabled={true}
                style={styles.textBox}
                placeholder='Add the text here...'
                >

            </TextInput>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        textBoxContainer: {

            margin: 1,



        },
        textBox: {
            fontFamily: 'BalsamiqSans',
            fontSize: 15,
            textAlignVertical: 'top',
            textAlign: 'left',

            width: 300,
            height: '85%',
            padding: 15,
            margin: 1,
            backgroundColor: '#f8f9fa',

            borderColor: '#818181',
            borderWidth: 1,
            borderRadius: 25,

            




        }
    }
)