import {View, Image, StyleSheet} from 'react-native';

export default function Logo({top,width, height}){
return(
<View top={top}>
    <Image 
    source={require('../assets/Images/bnw_logo.png')} 
    style={styles.Logo}  />
</View>
);}

const styles= StyleSheet.create(
{
    Logo:{
     
      width:276,
      height:76
        
    }
})

