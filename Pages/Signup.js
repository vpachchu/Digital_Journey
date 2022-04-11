import React, { useState } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import FlatButton from '../Components/FlatButton';
import axios from 'axios';
import Input from '../Components/Input';
import SmallLogo from '../Components/SmallLogo';
import NormalText from '../Components/NormalText';
import WarningText from '../Components/WarningText';


export default function Login({ navigation }) {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [rpassword, setrpassword] = useState("");
  const [unameError,setunameError]=useState(false);
  const [error, setError] = useState("");

  const signup = () => {
    axios.post('http://192.168.1.3:8080/user',
      {
        name: name,
        email: email,
        username: username,
        password: password
      }).then(() => {
        console.log('Successfully data added');
        console.log('name : ' + name +
          '\nemail : ' + email +
          '\nusername : ' + username +
          '\npassword : ' + password);
        navigation.navigate('Login');
      }).catch((error) => {
        console.log(error);
      })

  }

  const isUsername = (username) => {
    axios.get('http://192.168.1.3:8080/username?username=' + username)
      .then((response) => {
        console.log(response.data);
        setunameError(true);
        })
      .catch((error) => {
        console.log(error);
      up})

  }

  const isValidObj = (obj) => {
    return Object.values(obj).every(value => value.trim())
  }

  const isValidEmail = (value) => {
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var regex = new RegExp(regx)
    return regex.test(value);
  }

  const isValidPassword = (value) => {
    const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})/;
    var regex = new RegExp(regx)
    return regex.test(value);
  }

  const updateError = (error, stateUpdate) => {
    stateUpdate(error);
    setTimeout(() => {
      stateUpdate('')
    }, 2500);

  }

  const isValidate = () => {
    //  No empty fields
    if (name == "" || username == "" || email == "" || password == "" || rpassword == "") {
      return updateError('Required All fields!!', setError);
    }

    //  Name length should be > 3
    if (!name.trim() || name.length < 3) {
      return updateError('Invalid name!', setError);

    }


    // Username length should be > 5
    if (!username.trim() || username.length < 5) {
      return updateError('Invalid username! \nShould contain atleast 5 characters', setError);
    }

    // if username already exist!
    if (setunameError(true)) {
      return updateError('Username already exist!!', setError);
    }

    //  email address should be valid
    if (!isValidEmail(email)) {
      return updateError('Invalid Email', setError);
    }

    //  Password length should be >= 8
    if (!isValidPassword(password)) {
      return updateError('The password should contain at least 8 characters, including at least one number and includes both lower and uppercase letters and special characters', setError);
    }

    //  Password and Confirm password should be same
    if (password != rpassword) {
      return updateError('Password mismatch!', setError);
    }

    else {
      signup();
    }



  }




  return (

    <View style={styles.container}>
      <SmallLogo />

      <NormalText
        text={'Name'} />
      <Input
        placeholder={'eg: Johny Depp'}
        value={name}
        onChangeText={(nme) => { setname(nme) }} />

      <NormalText
        text={'Username'} />
      <Input
        placeholder={'eg: JDepp1227'}
        value={username}
        onChangeText={(uname) => { setusername(uname) }} />

      <NormalText
        text={'Email Id'} />
      <Input
        placeholder={'eg: johnydepp@gmail.com'}
        value={email}
        onChangeText={(eml) => { setemail(eml) }}
        autoCapitalize='none' />

      {/* <NormalText
        text={'Mobile'} />
      <Input
        placeholder={'eg: +94773456765'} /> */}


      <NormalText
        text={'Password'} />
      <Input
        value={password}
        onChangeText={(pswd) => { setpassword(pswd) }}
        autoCapitalize='none'
        secureTextEntry />

      <NormalText
        text={'Re-enter Password'} />



      <Input
        value={rpassword}
        onChangeText={
          (rpswd) => { setrpassword(rpswd) }
        }
       
        autoCapitalize='none'
        secureTextEntry
      />

      {error ?
        <WarningText text={error} /> : <View />}

      <FlatButton
        text={'Done'}
        width={150}
        top={20}
        onPress={
          () => {
            isValidate();

          }
        }
      />
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
