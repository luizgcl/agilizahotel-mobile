import { StyleSheet } from "react-native";
import { Constants } from "../../../Constants";

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: 5,
  },
  imageContainer: {
    padding: 5,
  },
  imageCard: {
    width: 360,
    height: 120,
  },
  titleOne: {
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 10
  },
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
    fontWeight: 900 
  }
})