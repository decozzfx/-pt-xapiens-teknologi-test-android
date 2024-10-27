import React, { useMemo } from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextM } from "@/components/derivatives/text";
import Styles from "./style";
import Colors from "@/configs/colors";

type Iprops = {
  onToggle?: (val: boolean) => void;
  isActive?: boolean;
  style?: StyleProp<ViewStyle>;
  label?: string | any;
};

const InputCheckBox: React.FC<Iprops> = (props) => {
  const { onToggle, style, label, isActive = false } = props;

  const RenderBody = useMemo(() => {
    return (
      <TouchableOpacity
        style={[Styles.container, style]}
        onPress={() => onToggle?.(!isActive)}
      >
        <View
          style={[
            Styles.containerCheckbox,
            {
              borderWidth: isActive ? 0 : 2,
              backgroundColor: isActive ? "#2FA12D" : undefined,
              borderColor: isActive ? "#2FA12D" : "#484C50",
            },
          ]}
        >
          {isActive && (
            <Icon name="checkmark" size={13} color={Colors.base.baseWhite} />
          )}
        </View>
        {label && (
          <View style={Styles.label}>
            <TextM>{label}</TextM>
          </View>
        )}
      </TouchableOpacity>
    );
  }, [onToggle, isActive, label, style]);

  return RenderBody;
};

export default InputCheckBox;
