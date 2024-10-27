import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { TextS, TextXS } from "@/components/derivatives/text";
import Colors from "@/configs/colors";
import Gap from "@/components/generics/gap/Gap";

const InputBorderWithText = (props: any) => {
  const {
    leftIcon,
    rightIcon,
    title,
    placeholder,
    value,
    onChangeText,
    error,
    ...restProps
  } = props;
  const renderLeftIcon = () => {
    if (leftIcon) {
      return leftIcon;
    }
    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return rightIcon;
    }
    return null;
  };

  const renderTitle = () => {
    if (title) {
      return (
        <>
          <TextS>{title}</TextS>
          <Gap height={5} />
        </>
      );
    }
    return null;
  };

  const onSetText = (text: string) => {
    onChangeText(text);
  };
  const renderMain = () => {
    return (
      <>
        {renderTitle()}
        <View style={styles.inputContainer}>
          {renderLeftIcon()}
          <Gap width={10} />
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onSetText}
            style={styles.input}
            backgroundColor={Colors.base.baseWhite}
            color={Colors.base.black}
            placeholderTextColor={Colors.base.black05}
            {...restProps}
          />
          {renderRightIcon()}
        </View>
        {error && (
          <>
            <Gap height={5} />
            <TextXS color={Colors.main.bloodRed}>{error}</TextXS>
          </>
        )}
      </>
    );
  };
  return renderMain();
};

export default InputBorderWithText;
