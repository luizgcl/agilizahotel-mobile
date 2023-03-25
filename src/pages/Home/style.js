import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  content: {
    paddingTop: 10,
    marginHorizontal: 5,
  },
  imageCard: {
    width: '100%',
    height: '50%',
    position: "relative"
  },
  promotionView: {
    position: 'absolute',
    top: 49,
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10
  },
  promotionText: {
    fontWeight: 900,
    fontSize: 30,
    // color: '#07e33a' (Verde),
    color: '#f5da45',
  },
  titleOne: {
    fontWeight: 900,
    fontSize: 16,
  }
})