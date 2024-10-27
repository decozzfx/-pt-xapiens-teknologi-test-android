export interface InputBorderWithText {
  leftIcon?: any;
  rightIcon?: any;
  title?: string;
  placeholder: string;
  value: string;
  error: string;
  restProps?: any;
  onChangeText: (text: string) => string;
}
