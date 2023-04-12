import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    userImage: {
        borderRadius: 128,
        width: 128,
        height: 128
    },
    userContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leaveButton: {
        padding: 8,
        backgroundColor: '#EF4444',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        margin: 10
    },
    leaveText: { 
        fontWeight: 900, 
        color: 'white', 
        fontSize: 20 
    }
})