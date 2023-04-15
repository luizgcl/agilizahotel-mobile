import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
       height: '100%'
    },
    userImage: {
        borderRadius: 128,
        width: 64,
        height: 64
    },
    userContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 35,
    },
    accountButton: {
        padding: 8,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderTopColor: '#222',
        borderBottomColor: '#222',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    accountButtonHover: {
        padding: 8,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        backgroundColor: '#EF4444',
        borderTopColor: '#222',
        borderBottomColor: '#222',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    accountButtonText: { 
        color: '#222', 
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular', 
    },
    accountButtonTextHover: { 
        color: '#fff', 
        fontSize: 20 ,
        fontFamily: 'Montserrat_400Regular',
    },
    text: {
        fontFamily: 'Montserrat_400Regular'
    }
})