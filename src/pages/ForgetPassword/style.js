import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants"
import { globalStyle } from "../../shared/GlobalStyles"

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: 'center',
        flex: 1
    },
    header: {
        marginTop: '15%',
        paddingStart: '5%',
        marginBottom: '8%'
    },
    main: {
        flex: 1,
        backgroundColor: Constants.colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        paddingHorizontal: '15%',
        paddingVertical: '5%',
    },
    title: {
        ...globalStyle.textBold,
        color: Constants.colors.green,
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
    },
    buttonView: {
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        width: '80%',
        backgroundColor: Constants.colors.green,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Montserrat_700Bold'
    }
})

export { styles }