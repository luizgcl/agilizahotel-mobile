import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants"

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    searchContainer: {
        padding: 15,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 900,
        fontSize: 22,
        textAlign: 'center',
    },
    searchButton: {
        backgroundColor: Constants.colors.green,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    responseContainer: {
        backgroundColor: 'white',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        flex: 2,
        padding: 15,
        alignItems: 'center',
        paddingTop: 50,
    },
    responseTitle: {
        fontWeight: 900,
        fontSize: 22,
        marginBottom: 20,
        marginTop: 10,
    },
    responseText: {
        fontSize: 18,
        width: '80%'
    }
})

export { styles }