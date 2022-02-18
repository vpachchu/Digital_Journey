import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import Topic from './Components/Topic';


export default function App() {

 

 
  return (

    <View style={styles.container}>
      <Topic/>
    </View>
   

  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  }
  
});
