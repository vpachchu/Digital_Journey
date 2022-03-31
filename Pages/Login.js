import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatButton from '../Components/FlatButton';
import HintText from '../Components/HintText';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import NormalText from '../Components/NormalText';
import axios from 'axios';

export default function Login({navigation}) {

  return (

    <View style={styles.container}>
      <Logo top={-70} />

      <NormalText text={'Username'} />
      <Input />

      <NormalText text={'Password'} fontSize={48}/>
      <Input/>

      <FlatButton text={'Login'} top={30} width={168} onPress={
        ()=>
        {
          // navigation.navigate('Content')
          // axios.get('http://192.168.1.3/login?username=Tom123&password=123')
          // .then((res)=>{
          //   console.log(res.data)
          // }).catch((error)=>{
          //   console.log(error)
          // });
          console.log('192.168.43.8')
          axios.get('http://192.168.43.8:8081/login?username=Tom123&password=123')
          .then((response) => {
            console.log(response.data);
          
          }).catch((error)=>{
            console.log(error)
          });

          }}/>

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
