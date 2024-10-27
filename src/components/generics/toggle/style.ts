import { StyleSheet } from "react-native";
import Colors from "@/configs/colors";

export const Styles = StyleSheet.create({
  border: {
    flex: -1,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.main.borderGray,
    backgroundColor: Colors.main.baseWhite,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  fill: {
    flex: -1,
    borderRadius: 3,
    backgroundColor: Colors.base.background,
  },
});
export default Styles;
