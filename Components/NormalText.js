import React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet } from 'react-native'

export default function NormalText({ top, text ,color}) {

    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
        }
    )

    if (!loaded) {
        return null
    }

    return (
        <View top={top}>
            <Text style={styles.text} >{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        text: {
            fontFamily: 'BalsamiqSans',
            fontSize:18,
            color:'#000000'


        }


    }
)