import { StyleSheet } from 'react-native';
import { Constants } from '../../../Constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center', 
      justifyContent: 'center',
      flex: 1
    },
    mainContainer: {
      backgroundColor: Constants.colors.white,
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 35,
      flex: 2,
    },
    formContainer: {
      justifyContent: 'center',
      flex: 1
    },
    font: {
      fontSize: 18,
    },
    textLogoPartOne: {
      color: Constants.colors.green,
      fontWeight: 'bold',
      fontSize: 30
    },
    textLogoPartTwo: {
      color: Constants.colors.purple,
      fontWeight: 'bold',
      fontSize: 30
    },
    textLogo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      alignItems: 'center'
    },
    accessText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: Constants.colors.white,
    },
    joinButton: {
      backgroundColor: Constants.colors.green,
      padding: 10,
      borderRadius: 8,
      width: 240,
      alignItems: 'center',
      marginVertical: 35
    }
})