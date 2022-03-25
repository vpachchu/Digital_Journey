import ReadableTextBox from "../Components/ReadableTextBox";
import { StyleSheet,View } from "react-native";
import SmallLogo from '../Components/SmallLogo';

export default function DiaryOnSelectedDate() {
    return (
        <View style={styles.container}>
            <SmallLogo />
            <ReadableTextBox />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

})