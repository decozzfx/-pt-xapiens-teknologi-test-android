import { StyleProp, ViewStyle } from 'react-native';

type IPropFloatingStyle = {
  top: number;
  left: number;
};
interface InputSearchTypes {
  value?: string;
  placeholder?: string | undefined;
  style?: StyleProp<ViewStyle>;
  borderColor?: string;
  error?: string;
  isFocused?: boolean | false;
  onChangeText?: (val: string) => void | any;
  onFocus?: () => void;
  onBlur?: () => void;
  isCaseSensitive?: boolean | false;
  overrideFloatingStyle?: IPropFloatingStyle;
  onClearText?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean | false;
  keyboardType?: 'phone-pad' | 'numeric' | 'email-address' | 'url';
  pointerEvents?: 'auto' | 'none' | 'box-none';
  isRequired?: boolean | false;
  overrideFloatingLabel?: boolean | false;
}

export default InputSearchTypes;
