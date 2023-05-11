import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headContainer: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'    
    },
    headTitle: {
        fontSize: 22,
        fontWeight: 900
    },
    mainContainer: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#FEFEFE',
        padding: 20,
    },
    buttonContainer: {
        paddingTop: 20,
    },
    buttonText: {
        fontSize: 18,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
    },
    confirmButton: {
        backgroundColor: Constants.colors.green,
    },
    backButton: {
        backgroundColor: '#EF4444',
        flexDirection: 'row',
        gap: 2,
    },
})

export { styles }