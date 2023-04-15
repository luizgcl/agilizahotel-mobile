import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants"
import { globalStyle } from "../../shared/GlobalStyles"

const styles = StyleSheet.create({
    container: {
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '80%'
    },
    title: {
        ...globalStyle.textBold,
        color: Constants.colors.green,
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
    },
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Constants.colors.green,
    },
    buttonText: {
        color: 'white',
        fontWeight: 700,
        fontFamily: 'Montserrat_700Bold'
    }
})

export { styles }