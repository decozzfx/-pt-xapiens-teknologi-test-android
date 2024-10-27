import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { TextM } from "@/components/derivatives/text";
import Toggle from "@/components/generics/toggle";
import Styles from "./style";

type Iprops = {
  onToggle: (val: boolean) => void;
  isActive: boolean | false;
  style?: StyleProp<ViewStyle>;
  label: string | any;
};

const InputRadio: React.FC<Iprops> = (props) => {
  const { onToggle, style, label, isActive } = props;
  const [active, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(isActive === true);
  }, [isActive]);
  const updateValue = useCallback(
    (value: boolean) => {
      if (active !== value) {
        setIsActive(value);
        if (onToggle) {
          onToggle(value);
        }
      }
    },
    [active, onToggle]
  );

  const RenderMain = useMemo(() => {
    return (
      <TouchableOpacity
        style={[Styles.container, style]}
        onPress={() => updateValue(true)}
      >
        <Toggle
          isActive={active}
          onToggle={(value: boolean) => updateValue(value)}
          rounded
          shouldPersist={active}
        />

        <View style={Styles.label}>
          <TextM>{label}</TextM>
        </View>
      </TouchableOpacity>
    );
  }, [active, label, style, updateValue]);

  return RenderMain;
};

export default InputRadio;
