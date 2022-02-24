import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Content from './Pages/Content';

const Stack= createNativeStackNavigator()

export default function App() {
  return (
   
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Content" component={Content}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>



  );

}