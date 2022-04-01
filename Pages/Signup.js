import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatButton from '../Components/FlatButton';
import axios from 'axios';
import Input from '../Components/Input';
import SmallLogo from '../Components/SmallLogo';
import NormalText from '../Components/NormalText';

export default function Login() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [rpassword, setrpassword] = useState("");

  const[showElement,setElement]=useState(true);

  checkPassword=()=>{
    if(password!=rpassword)
    {
      setElement(true);
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
        onChangeText={(eml) => { setemail(eml) }} />

      {/* <NormalText
        text={'Mobile'} />
      <Input
        placeholder={'eg: +94773456765'} /> */}


      <NormalText
        text={'Password'} />
      <Input
        value={password}
        onChangeText={(pswd) => { setpassword(pswd) }} />

      <NormalText
        text={'Re-enter Password'} />
      <Input
        value={rpassword}
        onChangeText={
          (rpswd) => { setrpassword(rpswd) }
          } />


      <FlatButton
        text={'Done'}
        width={150}
        top={20}
        onPress={
          () => {
           
            axios.post('http://192.168.1.3:8081/user',
            {
              name:name,
              email:email,
              username:username,
              password:password
            }).then((reponse)=>{
              console.log('Successfully data added');
              console.log('name : '+name+
                          '\nemail : '+email+
                          '\nusername : '+username+
                          '\npassword : '+password);

            }).catch((error) => {
              console.log(error);
            })
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
