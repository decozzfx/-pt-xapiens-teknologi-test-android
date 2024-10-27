import Colors from "@/configs/colors";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  inputContaner: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderWidth: 1,
    height: 36,
    alignItems: "center",
    borderRadius: 5,
    borderColor: Colors.border.gray2,
  },
});

export default Style;
