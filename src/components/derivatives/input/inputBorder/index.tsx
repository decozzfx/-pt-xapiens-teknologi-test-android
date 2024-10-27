import { View, TextInput } from "react-native";
import React, { useMemo } from "react";
import Style from "./style";
import { InputBorderProps } from "./types";
import { TextXS } from "@/components/derivatives/text";
import Colors from "@/configs/colors";
import Gap from "@/components/generics/gap/Gap";
import InputGeneric from "@/components/generics/input";

// eslint-disable-next-line react/function-component-definition
const InputBorder: React.FC<InputBorderProps> = (props) => {
  const {
    value,
    onChangeText,
    onEndEditing,
    placeholder,
    style,
    error,
    textAlignVertical,
    keyboardType,
    leftIcon,
    ...restProps
  } = props;

  const inputStyle = {
    textAlignVertical,
    marginTop: 5,
  };

  const _renderError = useMemo(() => {
    if (!error) {
      return null;
    }

    return <TextXS color={Colors.main.bloodRed}>{error}</TextXS>;
  }, [error]);

  const renderMain = useMemo(() => {
    return (
      <>
        <View style={[Style.inputContainer, style]}>
          {leftIcon && (
            <>
              {leftIcon}
              <Gap width={12} />
            </>
          )}
          <View style={{ flex: 1 }}>
            <InputGeneric
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              backgroundColor={Colors.background.input}
              color={Colors.base.black}
              placeholderTextColor={Colors.base.black05}
              style={inputStyle}
              keyboardType={keyboardType}
              {...restProps}
            />
            {_renderError}
          </View>
        </View>
      </>
    );
  }, [
    value,
    error,
    placeholder,
    style,
    textAlignVertical,
    keyboardType,
    leftIcon,
    onChangeText,
    onEndEditing,
    restProps,
  ]);

  return renderMain;
};

export default InputBorder;
