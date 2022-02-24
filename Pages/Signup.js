import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatButton from '../Components/FlatButton';
import HintText from '../Components/HintText';
import Input from '../Components/Input';
import SmallLogo from '../Components/SmallLogo';
import NormalText from '../Components/NormalText';

export default function Login() {

  return (

    <View style={styles.container}>
      <SmallLogo />

      <NormalText
        text={'Name'} />
      <Input
        placeholder={'eg: Johny Depp'} />

      <NormalText
        text={'Username'} />
      <Input
        placeholder={'eg: JDepp1227'} />

      <NormalText
        text={'Email Id'} />
      <Input
        placeholder={'eg: johnydepp@gmail.com'} />

      <NormalText
        text={'Mobile'} />
      <Input
        placeholder={'eg: +94773456765'} />


      <NormalText
        text={'Password'} />
      <Input />

      <NormalText
        text={'Re-enter Password'} />
      <Input />


      <FlatButton text={'Done'} width={150} top={20} />
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
