import React, { useCallback, useMemo } from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextM } from "@/components/derivatives/text";
import Toggle from "@/components/generics/toggle";
import Styles from "./style";
import Colors from "@/configs/colors";

type Iprops = {
  onToggle?: (val: boolean) => void;
  isActive: boolean | false;
  style?: StyleProp<ViewStyle>;
  label: string | any;
  line?: boolean;
  labelRight?: string;
};

const InputCheckBoxRight: React.FC<Iprops> = (props) => {
  const { onToggle, style, label, isActive, line, labelRight } = props;

  const updateValue = useCallback(
    (value: boolean) => {
      if (onToggle) {
        onToggle(value);
      }
    },
    [onToggle]
  );

  const RenderBody = useMemo(() => {
    return (
      <View>
        <TouchableOpacity
          style={[Styles.container, style]}
          onPress={() => updateValue(!isActive)}
        >
          <View style={Styles.label}>
            <TextM>{label}</TextM>
          </View>
          <View style={Styles.labelRight}>
            <TextM>{labelRight}</TextM>
          </View>
          <View style={Styles.toggle}>
            <Toggle
              isActive={isActive}
              onToggle={() => updateValue(!isActive)}
              shouldPersist={isActive}
              rounded={false}
              style={{
                backgroundColor: isActive
                  ? Colors.main.baseRed
                  : Colors.main.pureBlack,
                borderColor: Colors.main.baseRed,
                borderWidth: 2,
                marginLeft: 30,
              }}
              iconCheck={
                <Icon
                  name="checkmark"
                  size={18}
                  color={Colors.main.baseBlack}
                />
              }
            />
          </View>
        </TouchableOpacity>
        {line && <View style={Styles.line} />}
      </View>
    );
  }, [style, label, labelRight, isActive, line, updateValue]);

  return RenderBody;
};

export default InputCheckBoxRight;
