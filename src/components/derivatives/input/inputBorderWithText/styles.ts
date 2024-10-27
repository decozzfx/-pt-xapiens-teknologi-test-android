import { StyleSheet } from "react-native";
import Colors from "@/configs/colors";

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.main.baseWhite,
    height: 46,
    borderRadius: 16,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
});
