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
  const [showElement, setElement] = useState(false);

  return (


    <View style={styles.container}>
      <Logo top={-70} />

      <NormalText text={'Username'} />
      <Input
        onChangeText={(uname) => { setUsername(uname) }}
        value={username}
        onFocus={()=>{setElement(false)}}
      />

      <NormalText text={'Password'} fontSize={48} />
      <Input
        onChangeText={(pword) => { setPassword(pword) }}
        value={password}
        onFocus={()=>{setElement(false)}}
      />
{showElement?
      <WarningText text={'Username or the Password \n is incorrect!'} top={30} /> :<View/> }
      <FlatButton text={'Login'} top={30} width={168} onPress={
        () => {

          console.log('192.168.43.8');
          axios.get('http://192.168.43.8:8081/login?username=' + username + '&password=' + password)
            .then((response) => {
              console.log(response.data);
              navigation.navigate('Content');
            })
            .catch((error) => {
              console.log(error);
              setElement(true);
            });
        

        }} />

      <HintText text={'Don\'t have an account?'} top={50} />
      <FlatButton text={'Create Account'} top={50} width={250} onPress={() => navigation.navigate('Signup')} />
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
