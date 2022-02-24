import React from 'react';
import { View,StyleSheet} from 'react-native';
import ContentButton from '../Components/ContentButton';
import SmallLogo from'../Components/SmallLogo';

export default function Content()
{
    return(
        <View style={styles.container}>
          <SmallLogo/>
          <ContentButton
         text={'My Diary'}
         top={30}
         left={-80}/>  


        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#ffffff'
  },})