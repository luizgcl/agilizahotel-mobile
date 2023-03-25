import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingTop: 10
    },
    font: {
      fontSize: 20
    },
    textLogoPartOne: {
      color: '#00bf63',
      fontWeight: 'bold',
      fontSize: 30
    },
    textLogoPartTwo: {
      color: '#85c',
      fontWeight: 'bold',
      fontSize: 30
    },
    textLogo: {
      flexDirection: 'row'
    },
    accessText: {
      fontWeight: 'bold',
      color: '#fff',
    },
    joinButton: {
      backgroundColor: '#00bf63',
      padding: 10,
      borderRadius: 8,
      width: 180,
      alignItems: 'center',
    }
})