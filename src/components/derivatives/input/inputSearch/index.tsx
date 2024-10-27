/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import Colors from "@/configs/colors";
import Styles from "./styles";
import Input from "@/components/generics/input";
import InputSearchTypes from "@/components/derivatives/input/inputSearch/types";
import Icon from "react-native-vector-icons/Ionicons";

export default function InputSearch(props: InputSearchTypes) {
  const {
    value,
    placeholder,
    style,
    borderColor,
    error,
    isFocused,
    onChangeText,
    onFocus,
    onBlur,
    isCaseSensitive,
    overrideFloatingStyle,
    onClearText,
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
    if (!isFocused_ && valuee.length === 0) {
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

  const renderClearButton = useMemo(() => {
    if (!onClearText || !value) {
      return null;
    }

    return (
      <TouchableOpacity style={Styles.ml12} onPress={() => onClearText()}>
        <Icon name="Ionicons" />
      </TouchableOpacity>
    );
  }, [onClearText, value]);

  const renderMain = useMemo(() => {
    return (
      <View style={[style]}>
        <View
          style={[
            Styles.topContainer,
            {
              borderColor: error
                ? Colors.main.bloodRed
                : isFocused_
                ? Colors.main.baseWhite
                : borderColor || Colors.main.inactiveGray,
            },
          ]}
        >
          <View style={Styles.mr12}>
            <Icon name="Ionicons" />
          </View>
          <View style={Styles.rightcontainer}>
            <Input
              {...props}
              placeholder={placeholder}
              autoCapitalize={isCaseSensitive ? "none" : "characters"}
              onFocus={() => focus(true)}
              onBlur={() => focus(false)}
              onChangeText={(value_: string) => updateValue(value_)}
              style={Styles.rightinput}
              color={Colors.text.black}
            />
          </View>
          {renderClearButton}
        </View>
      </View>
    );
  }, [
    style,
    error,
    isFocused_,
    borderColor,
    props,
    placeholder,
    isCaseSensitive,
    renderClearButton,
    focus,
    updateValue,
  ]);

  return renderMain;
}
