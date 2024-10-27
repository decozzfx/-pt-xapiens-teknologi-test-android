import textProps from '@components-generics/text/types';
import { ViewStyle, StyleProp, ButtonProps } from 'react-native';

interface buttonProps {
  ioniconIconName?: string;
  onPress?: ButtonProps['onPress'];
  children?: any;
  borderColor?: string | null;
  height?: number | undefined;
  width?: number | undefined;
  buttonLoading?: boolean | false;
  padding?: number | undefined;
  paddingVertical?: number | undefined;
  inverse?: boolean | false;
  disabled?: boolean | false;
  backgroundColor?: string | null;
  buttonSize?: number | undefined;
  borderRadius?: number | undefined;
  localTextStyle?: textProps['textStyle'];
  size?: number | undefined;
  line?: number | undefined;
  localColor?: boolean | false;
  buttonStyle?: any;
  iconSize?: number | undefined;
  nextIcon?: boolean | false;
  iconStyle?: any;
  textColor?: string | undefined;
  addIcon?: boolean | false;
  style?: StyleProp<ViewStyle> | undefined;
  color?: string;
  radius?: number;
  iconType?: string | 'create' | 'eye' | 'cube' | 'scan' | 'add' | 'print';
  isRemoveTopBorderRadius?: boolean;
  screenName?: string;
  index?: string;
  buttonName?: string;
}

export default buttonProps;
