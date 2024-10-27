import Colors from "@/configs/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  drowdownContainer: {
    backgroundColor: Colors.background.gray2,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background.gray3,
    borderRadius: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    zIndex: 1000,
    height: 60,
  },
  dropdownText: {
    top: 9,
    left: 15,
    position: "absolute",
    zIndex: 10000,
  },
  dropdownTextStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginLeft: 5,
    color: Colors.text.grey55,
  },
  dropdownContainerStyle: {
    borderColor: Colors.border.gray,
    position: "absolute",
    top: 50,
    zIndex: 100000,
  },
  iconContainerStyle: {
    backgroundColor: Colors.border.gray,
  },
  paddingTop20: {
    paddingTop: 20,
  },
  paddingTop4: {
    paddingTop: 4,
  },
  borderBottomRed: {
    borderBottomColor: Colors.text.red25,
  },
});
