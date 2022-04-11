import { React, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FlatButton from '../Components/FlatButton';
import HintText from '../Components/HintText';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import NormalText from '../Components/NormalText';
import axios from 'axios';
import WarningText from '../Components/WarningText';

export default function Login({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authenticate = () => {
    //Check whether the username exist
    console.log('192.168.1.3');
    axios.get('http://192.168.1.3:8080/login?username=' + username + '&password=' + password)
      .then((response) => {
        console.log(response.data);
        navigation.navigate('Content')

      })
      .catch((error) => {
        console.log(error);
        catchError();

      });
  }

  const catchError = () => {
    if (username == "" || password == "") {
      updateError('Fill all the fields!', setError)
    }
    else {
      updateError('Please recheck your username \n and password !', setError)
    }
  }

  const updateError = (error, stateUpdate) => {
    stateUpdate(error);
    setTimeout(() => {
      stateUpdate('')
    }, 2500);
  }

  return (


    <View style={styles.container}>
      <Logo top={-70} />

      <NormalText text={'Username'} />
      <Input
        onChangeText={(uname) => { setUsername(uname) }}
        value={username}
        autoCapitalize='none'
      />

      <NormalText text={'Password'} fontSize={48} />
      <Input
        onChangeText={(pword) => { setPassword(pword) }}
        value={password}
        secureTextEntry
        autoCapitalize='none'
      />

      {error ?
        <WarningText text={error} top={30} /> : <View />}
      <FlatButton text={'Login'} top={30} width={168} onPress={
        () => {
          authenticate();
        }} />

      <HintText text={'Don\'t have an account?'} top={50} />
      <FlatButton
        text={'Create Account'}
        top={50}
        width={250}
        onPress={() => navigation.navigate('Signup')} />
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
