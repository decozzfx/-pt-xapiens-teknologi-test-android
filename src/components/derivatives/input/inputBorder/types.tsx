import React from "react";
import {
  ViewStyle,
  TextInputProps,
  StyleProp,
  KeyboardTypeOptions,
} from "react-native";

export interface InputBorderProps {
  value: string;
  placeholder: string;
  leftIcon?: React.ReactNode;
  onChangeText?(text: string): void;
  onEndEditing?: () => void;
  editable?: boolean;
  restProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
  error?: string;
  backgroundColor?: string;
  color?: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
  autoCapitalize?: any;
  textAlignVertical?: "center" | "auto" | "top" | "bottom" | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
}
