import React, { useCallback, useMemo, useRef } from "react";
import {
  StyleProp,
  TextInput as RTextInput,
  TextStyle,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";
import Styles from "./style";
import { useTheme } from "@/theme";

interface Iprops {
  editable?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions;
  color?: string;
  placeholderTextColor?: string;
  line?: number;
  align?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  bold?: boolean;
  light?: boolean;
  size?: number;
  style?: StyleProp<ViewStyle> | any | undefined;
  placeholder?: string | undefined;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (val: string) => void;
  testID?: string | undefined;
  value?: string | undefined;
  secureTextEntry?: boolean;
}

const InputGeneric: React.FC<Iprops> = (props) => {
  const {
    autoCapitalize,
    keyboardType,
    style,
    testID,
    editable = true,
    placeholderTextColor = useTheme().colors.gray400,
    secureTextEntry = false,
  } = props;

  const inputRef = useRef(null);

  const getComposedStyle = useCallback(() => {
    const { color, line, align, bold, light, size } = props;

    const composedStyle: any = [Styles.main];

    const newStyle: TextStyle = {};

    if (color) {
      newStyle.color = color;
    }

    if (size) {
      newStyle.fontSize = size;
    }

    if (line) {
      newStyle.lineHeight = line;
    }

    if (align) {
      newStyle.textAlign = align;
    }

    if (bold) {
      newStyle.fontWeight = "bold";
    }

    if (light) {
      newStyle.fontWeight = "400";
    }

    composedStyle.push(newStyle);
    composedStyle.push(style);

    return composedStyle;
  }, [props, style]);

  const RenderMain = useMemo(() => {
    return (
      <RTextInput
        editable={editable}
        value={props.value}
        placeholderTextColor={placeholderTextColor}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        {...props}
        style={getComposedStyle()}
        autoCapitalize={
          autoCapitalize ||
          (keyboardType !== "email-address" ? autoCapitalize : "none")
        }
        ref={inputRef}
        testID={testID}
      />
    );
  }, [editable, autoCapitalize, getComposedStyle, keyboardType, props, testID]);

  return RenderMain;
};

export default InputGeneric;
