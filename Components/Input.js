import React from 'react';
import { useFonts } from 'expo-font';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native'


export default function Input(props) {
    const [loaded] = useFonts({

        BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
        }
    )

    const {placeholder, keyboardtype,top, value,onChangeText,
        onFocus,autoCapitalize,secureTextEntry}=props
   

    if (!loaded) {
        return null
    }
    return (
        <View style={styles.inputtextcontainer} top={top}>
            <TextInput
                style={styles.inputtext}
                {...props}
                     
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