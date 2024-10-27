import { ViewStyle, StyleProp, ButtonProps } from 'react-native';

interface buttonProps {
  onPress?: ButtonProps['onPress'];
  children?: any;
  color?: string | undefined;
  inverse?: boolean | undefined;
  borderColor?: string | null | undefined;
  height?: number | undefined;
  width?: number | undefined;
  paddingHorizontal?: number | undefined;
  paddingVertical?: number | undefined;
  backgroundColor?: string | null | undefined;
  borderRadius?: number | undefined;
  disabled?: boolean | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  radius?: number;
  isRemoveTopBorderRadius?: boolean;
  screenName?: string;
  index?: string;
  buttonName?: string;
}

export default buttonProps;
