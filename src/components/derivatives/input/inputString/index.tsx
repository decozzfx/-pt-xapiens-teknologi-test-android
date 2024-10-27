/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity, Animated, Platform } from "react-native";
import Colors from "@/configs/colors";
import Styles from "./style";
import { TextL, TextS } from "@/components/derivatives/text";
import Input from "@/components/generics/input";
import Text from "@/components/generics/text";
import Icon from "react-native-vector-icons/Ionicons";

import InputStringTypes from "@/components/derivatives/input/inputString/types";

const InputMain: React.FC<InputStringTypes> = (props) => {
  const {
    editable = true,
    value,
    placeholder,
    style,
    label,
    borderColor,
    error,
    isFocused,
    leftIcon,
    hint,
    rightIcon,
    rightIconColor,
    onRightIconPress,
    onChangeText,
    onFocus,
    onBlur,
    isRequired,
    isCaseSensitive,
    leftContent,
    overrideFloatingStyle,
    testID,
    fontLabelSize,
    errorIcon,
    labelFloatToBorder,
    addMl16 = false,
    screenName = "",
    index = "",
    inputName = "",
    rightText = "",
    labelWidth,
    disabled,
  } = props;

  const [isFocused_, setFocus] = useState<boolean>(isFocused ?? false);
  const [valuee, setValue] = useState<string>(value ?? "");
  const [position] = useState(new Animated.Value(value ? 0 : 22));
  const [opacity] = useState(new Animated.Value(value ? 0 : 30));
  const [size] = useState(new Animated.Value(value ? 12 : 16));
  const [line] = useState(new Animated.Value(value ? 16 : 16));

  const focus = useCallback(
    (isUp = false, useForce = false) => {
      if (isUp) {
        if (onFocus) {
          onFocus();
        }

        Animated.timing(position, {
          toValue: 0,
          duration: overrideFloatingStyle ? 150 : 100,
          delay: 0,
          useNativeDriver: false,
        }).start();
        Animated.timing(size, {
          toValue: 12,
          duration: 100,
          delay: 0,
          useNativeDriver: false,
        }).start();
        Animated.timing(line, {
          toValue: 16,
          duration: 100,
          delay: 0,
          useNativeDriver: false,
        }).start();
        Animated.timing(opacity, {
          toValue: 1,
          duration: 100,
          delay: 0,
          useNativeDriver: false,
        }).start();

        setFocus(true);
      } else {
        if (onBlur) {
          onBlur();
        }

        if (
          valuee === null ||
          valuee === undefined ||
          valuee.trim().length < 1 ||
          useForce
        ) {
          Animated.timing(position, {
            toValue: 22,
            duration: 100,
            delay: 0,
            useNativeDriver: false,
          }).start();
          Animated.timing(size, {
            toValue: 16,
            duration: 100,
            delay: 0,
            useNativeDriver: false,
          }).start();
          Animated.timing(line, {
            toValue: 16,
            duration: 100,
            delay: 0,
            useNativeDriver: false,
          }).start();
          Animated.timing(opacity, {
            toValue: 0.7,
            duration: 100,
            delay: 0,
            useNativeDriver: false,
          }).start();
        }

        setFocus(false);
      }
    },
    [
      line,
      onBlur,
      onFocus,
      opacity,
      overrideFloatingStyle,
      position,
      size,
      valuee,
    ]
  );

  useEffect(() => {
    if (!isFocused_ && valuee.length > 0) {
      focus(false, true);
    } else if (isFocused_) {
      focus(true);
    }
  }, [focus, isFocused_, value, valuee]);

  const updateValue = useCallback(
    (_value: any) => {
      const valText = isCaseSensitive ? _value : _value.toUpperCase();
      setValue(valText);

      if (onChangeText) {
        onChangeText(valText);
      }
    },
    [isCaseSensitive, onChangeText]
  );

  const _renderError = useMemo(() => {
    if (!error) {
      return null;
    }

    return <TextS color={Colors.main.bloodRed}>{error}</TextS>;
  }, [error]);

  // ----------------------------------------

  const _renderHint = useMemo(() => {
    if (!hint) {
      return null;
    }

    return (
      <TextS color={Colors.main.baseBlack} light style={Styles.hint}>
        {hint}
      </TextS>
    );
  }, [hint]);

  const _renderLeftIcon = useMemo(() => {
    if (!leftIcon && !leftContent) {
      return null;
    }

    if (leftContent) {
      return (
        <View style={Styles.leftcontainer}>
          <View style={Styles.Iconcontainer}>{leftContent}</View>
        </View>
      );
    }

    return (
      <View style={Styles.leftcontainer}>
        <View style={Styles.Iconcontainer}>
          <Icon
            name={leftIcon as any}
            color={
              isFocused_ ? Colors.main.baseBlack : Colors.main.inactiveGray
            }
          />
        </View>
      </View>
    );
  }, [isFocused_, leftContent, leftIcon]);

  const _renderRightButton = useMemo(() => {
    if (!rightIcon) {
      return null;
    }

    const main = (
      <View style={[Styles.Iconcontainer, { alignItems: "flex-end" }]}>
        {error && errorIcon
          ? errorIcon
          : typeof rightIcon === "string"
          ? rightIcon
          : rightIcon}
      </View>
    );

    if (onRightIconPress) {
      return (
        <TouchableOpacity
          style={[Styles.leftcontainer, { marginRight: addMl16 ? 16 : 0 }]}
          onPress={() => onRightIconPress()}
        >
          {main}
        </TouchableOpacity>
      );
    }

    return <View style={Styles.leftcontainer}>{main}</View>;
  }, [addMl16, error, errorIcon, onRightIconPress, rightIcon, rightIconColor]);

  const _renderRightText = useMemo(() => {
    if (!rightText) {
      return null;
    }

    return (
      <View style={Styles.leftcontainer}>
        <TextL>{rightText}</TextL>
      </View>
    );
  }, [rightText]);

  const RenderMain = useMemo(() => {
    return (
      <View style={[style]}>
        <View
          style={[
            Styles.topContainer,
            {
              borderColor: error
                ? Colors.main.bloodRed
                : isFocused_
                ? Colors.main.baseBlack
                : borderColor || Colors.border.gray2,
              borderWidth: labelFloatToBorder ? 1 : undefined,
              paddingLeft: labelFloatToBorder ? 10 : undefined,
              borderRadius: 4,
            },
          ]}
        >
          {_renderLeftIcon}

          <View
            style={[Styles.rightcontainer, { marginLeft: addMl16 ? 16 : 0 }]}
          >
            <Text
              animated
              textStyle="semiBold"
              color={error ? Colors.main.error : Colors.main.baseBlack}
              size={size}
              line={line}
              style={{
                backgroundColor:
                  (labelFloatToBorder && value) ||
                  (isFocused_ && labelFloatToBorder)
                    ? "white"
                    : undefined,
                opacity,
                top:
                  overrideFloatingStyle && isFocused_
                    ? overrideFloatingStyle.top
                    : value || isFocused_
                    ? overrideFloatingStyle?.top || 0
                    : 22,
                left:
                  overrideFloatingStyle && isFocused_
                    ? overrideFloatingStyle.left
                    : value || isFocused_
                    ? overrideFloatingStyle?.left || 0
                    : 0,
                marginBottom: Platform.OS === "android" ? -5 : 0,
                fontSize: fontLabelSize ?? 14,
                color: !disabled ? Colors.text.grey2 : Colors.text.grey,
                width: labelWidth,
                paddingLeft: labelFloatToBorder ? 5 : undefined,
              }}
            >
              {label}
              {isRequired ? " *" : null}
            </Text>
            <Input
              {...props}
              placeholder={placeholder}
              editable={!disabled && editable}
              autoCapitalize={isCaseSensitive ? "none" : "characters"}
              onFocus={() => focus(true)}
              onBlur={() => focus(false)}
              onChangeText={(value_: string) => updateValue(value_)}
              style={[Styles.rightinput]}
              color={!disabled ? Colors.main.baseBlack : Colors.text.gray2}
              testID={testID ?? screenName + inputName + index}
            />
          </View>

          {_renderRightButton}
          {_renderRightText}
        </View>

        {_renderError}

        {_renderHint}
      </View>
    );
  }, [
    style,
    error,
    isFocused_,
    borderColor,
    labelFloatToBorder,
    _renderLeftIcon,
    addMl16,
    size,
    line,
    value,
    opacity,
    overrideFloatingStyle,
    fontLabelSize,
    editable,
    labelWidth,
    label,
    isRequired,
    props,
    placeholder,
    disabled,
    isCaseSensitive,
    testID,
    screenName,
    inputName,
    index,
    _renderRightButton,
    _renderRightText,
    _renderError,
    _renderHint,
    focus,
    updateValue,
  ]);

  return RenderMain;
};

export default InputMain;
