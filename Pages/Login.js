import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatButton from '../Components/FlatButton';
import HintText from '../Components/HintText';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import NormalText from '../Components/NormalText';

export default function Login({navigation}) {

  return (

    <View style={styles.container}>
      <Logo top={-70} />

      <NormalText text={'Username'} />
      <Input />

      <NormalText text={'Password'} fontSize={48}/>
      <Input/>

      <FlatButton text={'Login'} top={30} width={168} onPress={()=>{navigation.navigate('Content')}}/>

      <HintText text={'Don\'t have an account?'} top={50}/>
      <FlatButton text={'Create Account'} top={50} width={250} onPress={()=>navigation.navigate('Signup')}/>
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
