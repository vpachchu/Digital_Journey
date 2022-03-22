import { View,StyleSheet } from 'react-native';

export default function Contaier()
{
    return(
        <View style={styles.container}></View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },
})