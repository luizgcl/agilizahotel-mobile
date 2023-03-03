import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 30
    },
    font: {
      fontSize: 20
    },
    textLogoPartOne: {
      color: '#00bf63',
      fontWeight: 'bold',
      fontSize: 35
    },
    textLogoPartTwo: {
      color: '#85c',
      fontWeight: 'bold',
      fontSize: 35
    },
    textLogo: {
      flexDirection: 'row'
    },
    accessText: {
      fontWeight: 'bold',
      color: '#fff',
    },
    joinButton: {
      marginBottom: 40,
      backgroundColor: '#00bf63',
      padding: 10,
      borderRadius: 8,
      width: 180,
      alignItems: 'center',
    }
})