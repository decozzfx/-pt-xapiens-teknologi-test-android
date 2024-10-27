import { Dimensions, Platform } from "react-native";

export default {
  screen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
    padding: 16,
  },
  text: {
    xs: {
      size: 10,
      lineHeight: 16,
    },
    s: {
      size: 12,
      lineHeight: 14,
    },
    m: {
      size: 14,
      lineHeight: 20,
    },
    l: {
      size: 16,
      lineHeight: 20,
    },
    ll: {
      size: 20,
      lineHeight: 24,
    },
    lll: {
      size: 24,
      lineHeight: 30,
    },
    sm: {
      size: 14,
      lineHeight: 20,
    },
    base: {
      size: 16,
      lineHeight: 24,
    },
    lg: {
      size: 18,
      lineHeight: 28,
    },
    xl: {
      size: 20,
      lineHeight: 28,
    },
    "2xl": {
      size: 24,
      lineHeight: 32,
    },
    "3xl": {
      size: 30,
      lineHeight: 36,
    },
    "4xl": {
      size: 36,
      lineHeight: 40,
    },
    xxl: {
      size: 48,
      lineHeight: 60,
    },
    "5xl": {
      size: 48,
      lineHeight: 48,
    },
    "6xl": {
      size: 60,
      lineHeight: 60,
    },
    "7xl": {
      size: 72,
      lineHeight: 72,
    },
    "8xl": {
      size: 96,
      lineHeight: 96,
    },
    "9xl": {
      size: 128,
      lineHeight: 128,
    },
  },
  fontFamily: {
    heavy: "Poppins-Medium",
    italicBold: "Poppins-BoldItalic",
    fontFamily: "Poppins-Regular",
    thin: "Poppins-Thin",
    thinItalic: "Poppins-Thin Italic",
    extraLight: "Poppins-ExtraLight",
    extraLightItalic: "Poppins-ExtraLight Italic",
    light: "Poppins-Light",
    lightItalic: "Poppins-Light Italic",
    regular: "Poppins-Regular",
    italic: "Poppins-Italic",
    medium: "Poppins-Medium",
    mediumItalic: "Poppins-Medium Italic",
    semiBold: "Poppins-SemiBold",
    semiBoldItalic: "Poppins-SemiBold Italic",
    bold: "Poppins-Bold",
    boldItalic: "Poppins-Bold Italic",
    extraBold: "Poppins-ExtraBold",
    extraBoldItalic: "Poppins-ExtraBold Italic",
    black: "Poppins-Black",
    blackItalic: "Poppins-Black Italic",
  },
};
