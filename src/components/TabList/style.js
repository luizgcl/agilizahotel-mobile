import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    navContainer: { 
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        marginBottom: Platform.OS == 'ios' ? 38 : 24,
        position: 'absolute',
        bottom: 0, 
        borderRadius: 99,
        gap: 16,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.80,
    },
    button: {
        alignItems: 'center',
        padding: 4,
    },
    innerButton: {
        padding: 8,
        borderRadius: 99
    }
})