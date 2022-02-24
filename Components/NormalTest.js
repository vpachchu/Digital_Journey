import {Text,View} from 'react-native'

export default function NormalTest({top,text})
{
return(
            <View top={top}>
                <Text style={styles.text}>{text}</Text>
            </View>
    );}

const styles= StyleSheet.create(
    {
        text:{
    
        }
    

}
)