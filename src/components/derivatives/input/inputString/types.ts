import type { StyleProp, ViewStyle, TextInputProps } from 'react-native';

type IPropFloatingStyle = {
  top: number;
  left: number;
};
interface InputStringTypes {
  defaultValue?: string;
  value?: string | null;
  placeholder?: string | undefined;
  editable?: boolean | false;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (val: string) => void | any;
  error?: string;
  hint?: string;
  leftIcon?: string;
  leftContent?: any;
  rightIcon?: any;
  rightIconColor?: string;
  onRightIconPress?: () => void;
  style?: StyleProp<ViewStyle>;
  borderColor?: string;
  label?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean | false;
  keyboardType?: TextInputProps['keyboardType'];
  pointerEvents?: 'auto' | 'none' | 'box-none';
  isFocused?: boolean | false;
  isRequired?: boolean | false;
  isCaseSensitive?: boolean | false;
  overrideFloatingLabel?: boolean | false;
  overrideFloatingStyle?: IPropFloatingStyle;
  testID?: string | undefined;
  onKeyPress?: ({ nativeEvent }: { nativeEvent: any }) => void;
  size?: number;
  autoFocus?: boolean | false;
  fontLabelSize?: number;
  errorIcon?: any;
  labelFloatToBorder?: boolean;
  inputStyle?: ViewStyle;
  addMl16?: boolean;
  screenName?: string;
  index?: string;
  inputName?: string;
  rightText?: string;
  labelWidth?: number;
  disabled?: boolean;
}

export default InputStringTypes;
