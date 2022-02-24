import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from "expo-font";

export default function FlatButton({ text, onPress, top }) {

   const [loaded] = useFonts(
      {
         Righteous: require('../assets/fonts/Righteous-Regular.ttf')
      })

   if (!loaded) {
      return null;
   }

   return (
      <View top={top}>
         <TouchableOpacity
            onPress={onPress}
            style={styles.flatButton} >
            <Text style={styles.flatButtonText}>{text}</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create(
   {
      flatButton: {

         width: 168,
         height: 40,
         backgroundColor: '#000000',
         borderRadius: 20,
         padding: 5,
         paddingLeft: 9,
         paddingRight: 8,
      },

      flatButtonText: {

         fontFamily: 'Righteous',
         fontStyle: 'normal',
         fontWeight: 'normal',
         fontSize: 20,
         color: '#FFFFFF',
         textAlign: 'center'


      }
   }
)
