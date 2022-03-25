import React from 'react';
import { FAB } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function FloatingButton(onPress) {
    return (
        <View>
            <FAB
             style={styles.fab} 
             size={'small'}
             onpress={onPress}
             color={'#ffffff'}
             icon={'undo'}
          
             />
         
        </View>

    )

}

const styles = StyleSheet.create(
    {
        fab: {
            height:60,
            width:60,
            borderRadius:30,
            backgroundColor: '#212529',
            position: 'absolute',
            bottom:30,
            right:89,
          
        }
    }
)



