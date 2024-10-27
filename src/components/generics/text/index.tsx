import React, { useCallback, useMemo } from "react";
import { Text as RText, Animated, TextStyle } from "react-native";
import Styles from "./style";
import textProps from "./types";
import { useTheme } from "@react-navigation/native";
import Sizes from "@/configs/sizes";

const TextGeneric: React.FC<textProps> = (props) => {
  const { children, animated, style } = props;
  const { colors } = useTheme();

  const getComposedStyle = useCallback(() => {
    const {
      color = colors.text,
      align,
      size,
      reguler,
      textStyle,
      line,
      fontStyle,
      textDecorationLine,
      letterSpacing,
      light,
      bold,
      testID,
      semiBold,
    } = props;

    const composedStyle: any = [Styles.main];

    const newStyle: TextStyle = {};

    newStyle.fontFamily = Sizes.fontFamily[textStyle || "regular"];

    if (size) newStyle.fontSize = size;

    if (color) newStyle.color = color;

    if (line) newStyle.lineHeight = line;

    if (align) newStyle.textAlign = align;

    if (letterSpacing) newStyle.letterSpacing = letterSpacing;

    if (fontStyle) newStyle.fontStyle = fontStyle;

    if (light) newStyle.fontWeight = "400";
    if (reguler) newStyle.fontWeight = "500";
    if (semiBold) newStyle.fontWeight = "600";
    if (bold) newStyle.fontWeight = "800";

    if (textDecorationLine) newStyle.textDecorationLine = textDecorationLine;

    composedStyle.push(newStyle);
    composedStyle.push(style);

    return composedStyle;
  }, [colors.text, props, style]);

  const RenderMain = useMemo(() => {
    if (animated) {
      return (
        <Animated.Text {...props} style={getComposedStyle()}>
          {children}
        </Animated.Text>
      );
    }
    return (
      <RText {...props} style={getComposedStyle()}>
        {children}
      </RText>
    );
  }, [animated, children, getComposedStyle, props]);
  return RenderMain;
};

export default TextGeneric;
