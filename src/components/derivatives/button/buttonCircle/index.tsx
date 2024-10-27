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

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import Button from "@/components/generics/button";
import buttonProps from "@/components/derivatives/button/buttonFull/types";
import { useTheme } from "@react-navigation/native";

const ButtonCircle: React.FC<buttonProps> = (props) => {
  const { onPress, buttonSize, backgroundColor, borderColor, children } = props;
  const { colors } = useTheme();

  const RenderButton = useMemo(() => {
    return (
      <Button
        {...props}
        onPress={onPress}
        height={buttonSize || 20}
        width={buttonSize || 20}
        backgroundColor={backgroundColor}
        borderColor={borderColor || colors.primary}
        borderRadius={buttonSize ?? 20}
      >
        {children}
      </Button>
    );
  }, [
    backgroundColor,
    borderColor,
    buttonSize,
    children,
    colors.primary,
    onPress,
    props,
  ]);

  return RenderButton;
  // ----------------------------------------
};

export default ButtonCircle;
