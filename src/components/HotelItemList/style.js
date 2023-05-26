import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants";

const styles = StyleSheet.create({
    hotelCard: {
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      padding: 10
    },
    hotelCardContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    hotelCardButton: {
      padding: 8,
      backgroundColor: Constants.colors.green,
      borderRadius: 10
    },
    hotelCardButtonText: { 
      color: 'white', 
      fontWeight: 900 ,
      fontFamily: 'Montserrat_700Bold'
    },
    text: {
      fontFamily: 'Montserrat_400Regular'
    }
});

export { styles };