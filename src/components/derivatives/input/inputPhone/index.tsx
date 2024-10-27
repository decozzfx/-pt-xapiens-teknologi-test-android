import React, { useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Colors from "@/configs/colors";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import InputString from "../inputString";
import Button from "@/components/generics/button";
import { TextS } from "@/components/derivatives/text";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

interface IProps {
  rightIcon?: any;
  rightIconColor?: any;
  onRightIconPress?: () => void;
  onPressButton: () => void;
  onPressLabel?: () => void;
  onChangeText: (val: string) => void;
  style?: ViewStyle;
  label?: string;
  value?: string;
  placeholder?: string;
  labelOtp?: string;
  error?: string;
  hint?: string;
  isValid?: boolean | false;
  testID?: string | undefined;
  onKeyPress?: ({ nativeEvent }: { nativeEvent: any }) => void;
}

const InputPhone: React.FC<IProps> = (props) => {
  const {
    onPressButton,
    placeholder,
    style,
    label,
    value,
    labelOtp,
    onPressLabel,
    onChangeText,
    error,
    hint,
    isValid,
    testID,
    onKeyPress,
    rightIcon,
    rightIconColor,
    onRightIconPress,
  } = props;
  const { colors } = useTheme();

  const RenderMain = useMemo(() => {
    return (
      <View style={[style]}>
        <View style={Styles.grouper}>
          <View
            style={{
              flex: -1,
              top: 20,
            }}
          >
            <Button
              {...props}
              height={36}
              width={48}
              borderRadius={8}
              color={colors.border}
              onPress={onPressButton}
            >
              <TextS bold color={colors.text}>
                {label}
                <Icon name="chevron-down" />
              </TextS>
            </Button>
          </View>

          <View
            style={{
              flex: 1,
              top: 10,
              marginLeft: labelOtp ? 8 : 10,
            }}
          >
            <InputString
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              keyboardType="phone-pad"
              overrideFloatingLabel
              overrideFloatingStyle={{ top: -10, left: -60 }}
              hint={hint}
              error={error}
              testID={testID}
              onKeyPress={onKeyPress}
              rightIcon={rightIcon}
              rightIconColor={rightIconColor}
              onRightIconPress={onRightIconPress}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <TextS
              color={Colors.main.baseRed}
              onPress={isValid ? onPressLabel : undefined}
            >
              {isValid ? labelOtp : null}
            </TextS>
          </View>
        </View>
      </View>
    );
  }, [
    colors.border,
    colors.text,
    error,
    hint,
    isValid,
    label,
    labelOtp,
    onChangeText,
    onPressButton,
    onPressLabel,
    onRightIconPress,
    placeholder,
    props,
    rightIcon,
    rightIconColor,
    style,
    testID,
    value,
    onKeyPress,
  ]);

  return RenderMain;
  // ----------------------------------------
};

const Styles = StyleSheet.create({
  grouper: {
    flex: -1,
    flexDirection: "row",
    marginTop: 8,
  },
});

export default InputPhone;
