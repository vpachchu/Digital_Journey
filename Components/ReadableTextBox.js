import React from 'react';
import { useFonts } from 'expo-font';
import { Text, StyleSheet, View } from 'react-native';

export default function ReadableTextBox() {

    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
    }
    )

    return (
        <View style={styles.textBoxContainer}>
            <Text
                multiline={true}
                scrollEnabled={true}
                style={styles.textBox}
                selectionColor={'#adb5bd'}
                
                >

            </Text>
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
            fontSize: 18,
            textAlignVertical: 'top',
            textAlign: 'left',

            width: 300,
            height: '83%',
            padding: 15,
            margin: 1,
            backgroundColor: '#f8f9fa',

            borderColor: '#818181',
            borderWidth: 1,
            borderRadius: 25,

            




        },
        
    }
)