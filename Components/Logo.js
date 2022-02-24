import {View, Image, StyleSheet} from 'react-native';

export default function Logo({top}){
return(
<View top={top}>
    <Image 
    source={require('../assets/Images/bnw_logo.png')} 
    style={styles.Logo }    />
</View>
);}

const styles= StyleSheet.create(
{
    Logo:{
        width: 262,
        height: 76,
        
    }
})

