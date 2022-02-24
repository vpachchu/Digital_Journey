import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatButton from '../Components/FlatButton';
import Input from '../Components/Input';
import Logo from '../Components/Logo';

export default function Login() {

  return (

    <View style={styles.container}>
      <Logo top={-70} />
      <Input />
      <Input />
      <FlatButton text={'Login'} top={100} />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },



});
