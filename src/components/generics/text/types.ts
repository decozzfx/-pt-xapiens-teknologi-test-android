import React from "react";
import { StyleProp, TextStyle } from "react-native";

interface fontFamily {
  regular: string;
  medium: string;
  heavy: string;
  bold: string;
  italicBold: string;
}

interface textProps {
  color?: TextStyle["color"];
  align?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  style?: StyleProp<TextStyle>;
  size?: number | undefined;
  textStyle?:
    | "thin"
    | "thinItalic"
    | "extraLight"
    | "extraLightItalic"
    | "light"
    | "lightItalic"
    | "regular"
    | "italic"
    | "medium"
    | "heavy"
    | "mediumItalic"
    | "semiBold"
    | "semiBoldItalic"
    | "bold"
    | "italicBold"
    | "boldItalic"
    | "extraBold"
    | "extraBoldItalic"
    | "black"
    | "blackItalic"
    | "fontFamily";
  line?: number | undefined;
  fontStyle?: "normal" | "italic" | undefined;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
  letterSpacing?: number | undefined;
  fontSize?: number | undefined;
  lineHeight?: number | undefined;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  fontFamily?: keyof fontFamily;
  children?: React.ReactNode | any;
  animated?: any;
  allowFontScaling?: boolean | undefined;
  bold?: boolean | false;
  backgroundColor?: string | undefined;
  light?: boolean;
  reguler?: boolean;
  onPress?: () => void;
  ellipsizeMode?: "middle" | "head" | "tail" | "clip";
  numberOfLines?: number;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
  testID?: string | undefined;
  semiBold?: boolean;
  selectable?: boolean;
}

export default textProps;
