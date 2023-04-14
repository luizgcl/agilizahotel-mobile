import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center', 
      justifyContent: 'center',
      flex: 2
    },
    mainContainer: {
      backgroundColor: Constants.colors.white,
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 35,
      flex: 1,
    },
    text: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        logoPartOne: {
            color: Constants.colors.green,
            fontWeight: 'bold',
            fontSize: 30,
        },
        logoPartTwo: {
            color: Constants.colors.purple,
            fontWeight: 'bold',
            fontSize: 30
        },
    },
    welcomeText: {
        marginTop: '2%',
        marginBottom: '5%',
        opacity: 0.8
    },
    buttonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        minWidth: '60%',
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
        fontSize: 18
    }
})