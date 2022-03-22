import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContentButton from '../Components/ContentButton';
import SmallLogo from '../Components/SmallLogo';

export default function Content({navigation}) {
  return (
    <View style={styles.container}>
      <SmallLogo top={-30} />

      <View style={styles.buttonContainer}>
        <ContentButton
          text={'My Diary'}
          color={'#090c09'}
          iconName={'book'}
          iconColor={'#e9ecef'}
          onPress={()=>navigation.navigate('MyDiary')} />

        <ContentButton
          text={'Write a Blog'}
          color={'#1f221f'}
          iconName={'message'}
          iconColor={'#e9ecef'} />

      </View>

      <View style={styles.buttonContainer}>
        <ContentButton
          text={'Budget Planning'}
          color={'#333633'}
          iconName={'attach-money'}
          iconColor={'#e9ecef'} />

        <ContentButton
          text={'Relationship Status'}
          color={'#464846'}
          iconName={'favorite'}
          iconColor={'#c9184a'} />

      </View>

      <View style={styles.buttonContainer}>
        <ContentButton
          text={'Summery of the Day'}
          color={'#666866'}
          iconName={'auto-fix-high'}
          iconColor={'#e9ecef'} />

        {/* <ContentButton
          text={'My Blog'}
          color={'#a9aaa9'}
          iconName={'book'}
          iconColor={'#e9ecef'} /> */}

      </View>



    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 20
  }
})