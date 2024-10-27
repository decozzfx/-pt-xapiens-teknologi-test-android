import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Colors from "@/configs/colors";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import { TextS } from "@/components/derivatives/text";
import { ButtonSmall } from "@/components/derivatives/button";

type IOptions = {
  value: string;
  label: string;
};
interface IProps {
  onSelect?: (val: string) => void;
  options: IOptions[];
  style?: StyleProp<ViewStyle>;
  label: string;
  value?: string;
  backgroundColor: string;
}
const InputCheckButtons: React.FC<IProps> = (props) => {
  const { onSelect, options, style, label, value, backgroundColor } = props;

  const [isValue, setValue] = React.useState(value);

  const updateValue = useCallback(
    (_value: string) => {
      setValue(_value);
      if (onSelect) {
        onSelect(_value);
      }
    },
    [onSelect]
  );

  const _renderOption = useCallback(
    (
      labelRender: string,
      _value: string,
      isActive: boolean | false,
      index: number
    ) => {
      return (
        <ButtonSmall
          key={index}
          inverse
          color={isActive ? Colors.main.baseRed : Colors.main.inactiveGray}
          style={Styles.content}
          width={104}
          height={40}
          backgroundColor={backgroundColor}
          onPress={() => updateValue(_value)}
        >
          {labelRender}
        </ButtonSmall>
      );
    },
    [backgroundColor, updateValue]
  );

  // ----------------------------------------
  // ----------------------------------------
  // MAIN RENDER
  // ----------------------------------------

  const RenderMain = useMemo(() => {
    return (
      <View style={[style]}>
        <TextS color={Colors.main.baseGray}>{label}</TextS>
        <View style={Styles.grouper}>
          {options.map((opt: any, index) => {
            return _renderOption(
              opt.label,
              opt.value,
              opt.value === isValue,
              index
            );
          })}
        </View>
      </View>
    );
  }, [_renderOption, isValue, label, options, style]);

  return RenderMain;
  // ----------------------------------------
};

const Styles = StyleSheet.create({
  grouper: {
    flex: -1,
    flexDirection: "row",
    marginTop: 8,
  },

  content: {
    marginRight: 8,
  },
});

const areEqual = (prev: any, next: any) => {
  if (prev.props !== next.props) {
    return true;
  }
  return false;
};
export default React.memo(InputCheckButtons, areEqual);
