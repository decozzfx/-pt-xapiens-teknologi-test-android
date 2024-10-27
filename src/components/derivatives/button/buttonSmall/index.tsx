/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// PACKAGE IMPORTS
// ----------------------------------------
import React, { useMemo } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Sizes from "@/configs/sizes";
import Colors from "@/configs/colors";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import Button from "@/components/generics/button";
import buttonProps from "@/components/derivatives/button/buttonFull/types";
import { TextBase } from "@/components/derivatives/text";
import { motify } from "moti";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";

const MotiIcon = motify(Icon)();

const ButtonSmall: React.FC<buttonProps> = (props) => {
  const {
    style,
    onPress,
    height,
    width,
    padding,
    paddingVertical,
    inverse,
    backgroundColor = Colors.base.background,
    children,
    borderRadius,
    buttonLoading,
    iconSize,
    nextIcon,
    size,
    borderColor = "transparent",
    iconType = "",
    textColor,
    line,
    localTextStyle,
    disabled,
  } = props;
  const { colors } = useTheme();

  const RenderButton = useMemo(() => {
    const renderTextColor = () => {
      if (textColor) {
        return textColor;
      } else if (inverse) {
        return colors.text;
      } else {
        return colors.text;
      }
    };
    return (
      <View style={[Styles.container, style]}>
        <Button
          {...props}
          onPress={onPress}
          height={height || 48}
          width={width || 148}
          paddingHorizontal={padding || 10}
          paddingVertical={paddingVertical}
          inverse={inverse}
          backgroundColor={disabled ? Colors.background.gray : backgroundColor}
          borderRadius={borderRadius ?? 24}
          borderColor={borderColor}
        >
          {buttonLoading ? (
            <ActivityIndicator
              color={colors.text}
              size={iconSize || Sizes.text.s.size}
            />
          ) : (
            <View style={Styles.btnContent}>
              {iconType !== "" && (
                <Icon
                  name={iconType}
                  size={iconSize || 20}
                  color={textColor || colors.text}
                  style={{ marginRight: 12 }}
                />
              )}
              <TextBase
                textStyle={localTextStyle}
                semiBold
                size={size || 16}
                line={line || 24}
                color={renderTextColor()}
              >
                {children}
              </TextBase>
            </View>
          )}
          {!buttonLoading && nextIcon ? (
            <MotiIcon
              name="md-arrow-forward"
              transition={{ type: "timing", duration: 700, loop: true }}
              from={{
                // opacity: 0,
                scale: 0.5,
                translateX: -10,
              }}
              animate={{
                // opacity: 1,
                scale: 1,
                translateX: 12,
              }}
              exit={{
                opacity: 0.2,
                // scale: 0.4,
              }}
              size={20}
              style={{
                color: colors.background,
                position: "absolute",
                right: 12,
              }}
            />
          ) : null}
        </Button>
      </View>
    );
  }, [
    backgroundColor,
    borderColor,
    borderRadius,
    buttonLoading,
    children,
    colors.background,
    colors.text,
    disabled,
    height,
    iconSize,
    iconType,
    inverse,
    line,
    localTextStyle,
    nextIcon,
    onPress,
    padding,
    paddingVertical,
    props,
    size,
    style,
    textColor,
    width,
  ]);

  return RenderButton;
  // ----------------------------------------
};

const Styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "row",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ButtonSmall;
