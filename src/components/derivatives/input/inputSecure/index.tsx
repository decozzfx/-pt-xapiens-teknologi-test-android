import React, { useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import InputString from "@/components/derivatives/input/inputString";
import InputStringTypes from "@/components/derivatives/input/inputString/types";

const InputSecure: React.FC<InputStringTypes> = (props) => {
  const { onChangeText } = props;
  const [isSecure, setIsSecure] = useState(true);

  const updateValue = useCallback(
    (value: string) => {
      if (onChangeText) {
        onChangeText(value);
      }
    },
    [onChangeText]
  );

  const RenderMain = useMemo(() => {
    return (
      <View>
        <InputString
          {...props}
          secureTextEntry={isSecure}
          onChangeText={(value: string) => updateValue(value)}
          rightIcon={isSecure ? "hide" : "unhide"}
          onRightIconPress={() => setIsSecure(!isSecure)}
        />
      </View>
    );
  }, [isSecure, props, updateValue]);
  return RenderMain;
};

export default InputSecure;
