import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headContainer: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        flex: 1,
        padding: 20,
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#FEFEFE'
    },
    container: {
        paddingVertical: 20,
    },
    content: {
        flexDirection: 'row',
        gap: 6,
    },
    holderText: {
        fontSize: 18,
        fontWeight: 900,
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
    editButton: {
        backgroundColor: '#0e87ed',
    },
    disableAccountButton: {
        backgroundColor: '#EF4444',
        flexDirection: 'row',
        gap: 2,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    userImage: {
        borderRadius: 999,
        width: 82,
        height: 82
    },
})

export { styles }