import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity as RButton, View } from 'react-native';
import Styles from './style';
import buttonProps from './types';
import { useTheme } from '@react-navigation/native';

const ButtonMainComponent: React.FC<buttonProps> = (props) => {
  const {
    children,
    onPress,
    disabled,
    screenName = '',
    buttonName = '',
    index = '',
  } = props;
  const { colors } = useTheme();

  const getComposedStyle = useCallback(() => {
    const composedStyle = [Styles.main];
    const {
      color,
      inverse,
      borderColor,
      height,
      width,
      paddingHorizontal,
      paddingVertical,
      backgroundColor,
      borderRadius,
      isRemoveTopBorderRadius,
    } = props;
    const newStyle: any = {};
    if (color) {
      newStyle.backgroundColor = color;
      newStyle.borderColor = color;
    }

    if (inverse) {
      newStyle.backgroundColor = 'transparent';
      newStyle.borderColor = color || colors.button;
    }

    if (borderColor) newStyle.borderColor = borderColor || colors.border;

    if (height) newStyle.height = height;

    if (width) newStyle.width = width;

    if (paddingHorizontal) newStyle.paddingHorizontal = paddingHorizontal;
    if (paddingVertical) newStyle.paddingVertical = paddingVertical;

    if (backgroundColor) newStyle.backgroundColor = backgroundColor;

    if (disabled) newStyle.opacity = 0.5;

    if (borderRadius !== undefined && borderRadius !== null) {
      newStyle.borderRadius = borderRadius;
    }
    if (isRemoveTopBorderRadius) {
      newStyle.borderTopStartRadius = 0;
      newStyle.borderTopEndRadius = 0;
    }
    composedStyle.push(newStyle);

    return composedStyle;
  }, [colors.border, colors.button, disabled, props]);

  const RenderMain = useMemo(() => {
    if (disabled) {
      return <View style={getComposedStyle()}>{children}</View>;
    }
    return (
      <RButton
        {...props}
        style={getComposedStyle()}
        onPress={onPress ? (event) => onPress(event) : () => {}}
        testID={screenName + buttonName + index}
      >
        {children}
      </RButton>
    );
  }, [
    buttonName,
    children,
    disabled,
    getComposedStyle,
    index,
    onPress,
    props,
    screenName,
  ]);

  return RenderMain;
};

export default ButtonMainComponent;
