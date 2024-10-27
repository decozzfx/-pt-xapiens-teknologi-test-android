import Colors from "@/configs/colors";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "row",
    paddingVertical: 14,
    marginHorizontal: 10,
    alignItems: "center",
  },
  label: {
    flex: 6,
  },
  labelRight: {
    alignItems: "flex-end",
    textAlign: "right",
    justifyContent: "flex-end",
    flex: 4,
  },
  toggle: {
    alignItems: "flex-end",
    textAlign: "right",
    justifyContent: "flex-end",
    flex: 2,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: Colors.main.baseWhite,
  },
});

export default Style;
