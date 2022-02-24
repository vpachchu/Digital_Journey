import React from 'react';
// import { View, Text } from 'react-native';
// import Greet from './Components/Greet';
// import Logo from './Components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper'
import Home from './Pages/Home';
import Login from './Pages/Login';

const Stack= createNativeStackNavigator()

export default function App() {
  return (
    // <View>
    //   <Greet />
    //   <Logo />
    // </View>

    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>



  );

}