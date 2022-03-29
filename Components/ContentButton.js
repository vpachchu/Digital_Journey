import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {MaterialIcons} from '@expo/vector-icons';

export default function ContentButton({ color, text, top, left, right, iconName, iconColor, onPress }) {
    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
    }
    )

    if (!loaded) {
        return null
    }

    return (
        <View top={top} left={left} right={right} style={styles.container01} >
            <TouchableOpacity onPress={onPress}>
                <View backgroundColor={color} style={styles.container02}>
                    {/* <Icon name="rocket" size={30} color="#900" /> */}
                    <MaterialIcons name={iconName} style={styles.icon} size={30} color={iconColor} />
                    <Text style={styles.text} >{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({

    container01: {
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',



    },

    container02: {
        width: 110,
        height: 110 ,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center'
    },

    text: {
        fontFamily: 'BalsamiqSans',
        fontSize: 14,
        color: '#e9ecef',
        textAlign: 'center'

    },

    icon: {
        margin: 8,



    }

})
 