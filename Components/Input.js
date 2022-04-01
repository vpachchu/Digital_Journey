import React from 'react';
import { useFonts } from 'expo-font';
import { View, TextInput, StyleSheet } from 'react-native'


export default function Input({placeholder, keyboardtype,top, value,onChangeText,onFocus}) {
    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
        }
    )

    if (!loaded) {
        return null
    }
    return (
        <View style={styles.inputtextcontainer} top={top}>
            <TextInput
                style={styles.inputtext}
                placeholder={placeholder}
                keyboardType={keyboardtype}  
                value={value} 
                onChangeText={onChangeText}
                onFocus={onFocus}
                />
        </View>
    );
}

const styles = StyleSheet.create(
    {

        inputtext: {
            fontFamily: 'BalsamiqSans',
            fontSize:16,
            color:'#464846',

            borderColor: '#818181',
            borderWidth: 1,
            borderRadius: 20,

            width: 250,
            height: 40,
            padding:5,
            textAlign:'center',
            

        },
        inputtextcontainer:{
            marginBottom:15
        }

       
    }
)