import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Topic()
{
    return (
        <View style={styles.topicContainer} >
            <Text style={styles.topic}>
                Digital
            </Text>
            <Text style={styles.topic}>
                Journey
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        topicContainer:{
            alignItems:'center',
            justifyContent:'center',

        },

        topic:{
            fontSize:20,
            color:'#0f5132',
            fontWeight:'bold',
           // fontFamily:'Pacifico', 
        }


    }
);