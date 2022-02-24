import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Greet from '../Components/Greet';
import Logo from '../Components/Logo';
import FlatButton from '../Components/FlatButton';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Greet top={150} />
      <Logo top={220} />
      <FlatButton text={'Get Started'} onPress={() => navigation.navigate('Login')} top={380} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
 

});
