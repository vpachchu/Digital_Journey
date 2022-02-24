import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";

export default function Greet({top}) {

    const [loaded] = useFonts(
        {
            SofadiOne: require('../assets/fonts/SofadiOne-Regular.ttf'),
            Redressed: require('../assets/fonts/Redressed-Regular.ttf'),
            Akaya: require('../assets/fonts/AkayaTelivigala-Regular.ttf'),
            Righteous: require('../assets/fonts/Righteous-Regular.ttf'),
            BalsamiqSans: require('../assets/fonts/BalsamiqSans-Regular.ttf')
        }
    )

    if (!loaded) {
        return null;
    }

    return (
        <View top={top}>
            <Text style={styles.hd1}>Hey There,</Text>
            <Text style={styles.hd2}>Start writing with...</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        hd1: {

            fontFamily: "BalsamiqSans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 30,
            lineHeight: 47,
            color: "#000000",
        

        },
        hd2: {

            fontFamily: "BalsamiqSans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 23,
            lineHeight: 30,
            color: "#000000",
           

        },

        hd1container: {


        },
        hd2container:
        {
            paddingBottom: 50
        }
    }
)