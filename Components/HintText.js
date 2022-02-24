import { useFonts } from 'expo-font';
import { Text, View, StyleSheet } from 'react-native'

export default function HintText({ top, text }) {

    const [loaded] = useFonts({

        Changa : require('../assets/fonts/Changa-VariableFont_wght.ttf'),
    }
    )

    if (!loaded) {
        return null
    }

    return (
        <View top={top}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        text: {
            fontFamily: 'Changa',
            fontSize:13,
            color:'#818181'
        }
    }
)