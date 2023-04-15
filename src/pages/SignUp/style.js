import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginTop: '15%',
        paddingStart: '5%',
        marginBottom: '8%'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Constants.colors.white,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    label: {
        marginTop: 28,
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
    },
    buttonView: {
        marginTop: '15%',
        justifyContent: 'center'
    },
    button: {
        minWidth: '80%',
        backgroundColor: Constants.colors.green,
        marginVertical: 12,
        paddingVertical: 8,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Constants.colors.white,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18
    }
})