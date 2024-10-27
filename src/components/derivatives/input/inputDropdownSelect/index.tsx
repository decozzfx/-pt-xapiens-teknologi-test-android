import React, { useMemo } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Animated,
  Platform,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import Text from "@/components/generics/text";
import Colors from "@/configs/colors";
import { DropdownSelectType } from "./types";
import { TextS } from "@/components/derivatives/text";

export default function DropdownSelectApproval(props: DropdownSelectType) {
  const {
    disabled = false,
    setSelectedValue,
    selectedValue,
    dropdownOption = [],
    error = "",
    style,
    loading,
    placeholder,
    listMode = "SCROLLVIEW",
    screenName = "",
    index = "",
    inputName = "",
    fontLabelSize,
    isRequired,
    isDropdownOpen,
    setIsDropdownOpen,
  } = props;

  const size = useMemo(
    () => new Animated.Value(selectedValue ? 12 : 16),
    [selectedValue]
  );

  const line = useMemo(
    () => new Animated.Value(selectedValue ? 16 : 16),
    [selectedValue]
  );

  const scrollViewProps: ScrollViewProps = useMemo(
    () => ({
      scrollEnabled: true,
      nestedScrollEnabled: true,
    }),
    []
  );

  const mapItems = useMemo(
    () =>
      dropdownOption.map((data) => ({
        value: data?.value,
        label: data?.label,
      })),
    [dropdownOption]
  );

  const dropdownStyle: StyleProp<ViewStyle> = useMemo(
    () => [
      styles.drowdownContainer,
      error ? styles.borderBottomRed : {},
      selectedValue ? styles.paddingTop20 : {},
      style,
    ],
    [error, selectedValue, style]
  );

  const dropdownTextStyle: StyleProp<ViewStyle> = useMemo(
    () => [
      styles.dropdownText,
      {
        marginBottom: Platform.OS === "android" ? -10 : 0,
        fontSize: fontLabelSize ?? 14,
      },
    ],
    [fontLabelSize]
  );

  return (
    <View>
      <Text
        animated
        textStyle="semiBold"
        color={error ? Colors.text.red25 : Colors.text.neutral600}
        size={Number(size)}
        line={Number(line)}
        style={dropdownTextStyle}
      >
        {selectedValue ? placeholder : ""}
        {isRequired ? " *" : null}
      </Text>
      <DropDownPicker
        testID={screenName + inputName + index}
        scrollViewProps={scrollViewProps}
        theme="LIGHT"
        disabled={disabled}
        loading={loading}
        open={isDropdownOpen}
        setOpen={(val) => setIsDropdownOpen(val)}
        setValue={(val) => setSelectedValue(val(null))}
        value={selectedValue}
        listMode={listMode}
        placeholder={placeholder}
        placeholderStyle={{
          color: error ? Colors.text.red25 : Colors.text.neutral70,
        }}
        items={mapItems}
        style={dropdownStyle}
        textStyle={styles.dropdownTextStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
        iconContainerStyle={styles.dropdownContainerStyle}
      />
      {error !== "" && (
        <TextS
          textStyle="semiBold"
          color={Colors.text.red25}
          style={styles.paddingTop4}
        >
          {error}
        </TextS>
      )}
    </View>
  );
}
