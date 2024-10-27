import { StyleSheet } from "react-native";

import Colors from "@/configs/colors";

const Style = StyleSheet.create({
  main: {
    flex: -1,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.button.primary,
    backgroundColor: Colors.button.primary,
  },
});

export default Style;
