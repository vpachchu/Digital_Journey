import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'


export default function Input({placeholder, keyboardtype}) {
    return (
        <View style={styles.inputtextContainer}>
            <TextInput
                style={styles.inputtext}
                Placeholder={placeholder}
                keyboardType={keyboardtype}    />
        </View>
    );
}

const styles = StyleSheet.create(
    {

        inputtext: {
            borderColor: '#334747',
            borderWidth: 1,
            borderRadius: 20,
            width: 250,
            height: 40,
            padding: 5,

        },

        inputtextContainer: {
            margin: 20

        },
    }
)