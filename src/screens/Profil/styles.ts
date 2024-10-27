import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  containerInput: {
    width: "82%",
    marginTop: 76,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderBottomColor: "#E5E5E5",
  },
  textHeaderInput: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    color: "#FFB951",
  },
  button: {
    marginTop: 80,
    width: "72%",
    backgroundColor: "#003F5A",
    borderColor: "transparent",
    borderRadius: 10,
  },
  containerIcon: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    marginTop: 31,
  },
  borderIcon: {
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
});
