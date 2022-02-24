import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
//import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

import {Icon} from 'react-native-vector-icons';

export default function ContentButton({ color, text, top, left, right }) {
    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
    }
    )

    if (!loaded) {
        return null
    }

    return (
        <View top={top} left={left} right={right}>
            <TouchableOpacity style={styles.container}>
              
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({

    container: {
        width: 120,
        height: 120,
        backgroundColor: '#212529',
        borderRadius: 20,
        padding: 10
    },

    text: {
        fontFamily: 'BalsamiqSans',
        fontSize: 15,
        color: '#ffffff'

    }

})
