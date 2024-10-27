import { Pressable } from "react-native";
import React from "react";
import Style from "./style";
import { InputDateProps } from "./types";
import Icon from "react-native-vector-icons/Ionicons";
import { TextS, TextXS } from "@/components/derivatives/text";
import Colors from "@/configs/colors";
import Gap from "@/components/generics/gap/Gap";

// eslint-disable-next-line react/function-component-definition
const InputDate: React.FC<InputDateProps> = (props) => {
  const { name, type, onPress, disabled = false, error = "" } = props;
  return (
    <>
      <Pressable
        style={Style.inputContaner}
        onPress={onPress}
        disabled={disabled}
      >
        <TextS
          color={
            name === "Tanggal Pengiriman"
              ? Colors.text.black50
              : Colors.text.primary
          }
        >
          {name}
        </TextS>
        {type !== undefined && (
          <Icon
            name={type === "date" ? "calendar-outline" : "time-outline"}
            size={20}
            color={Colors.base.background}
          />
        )}
      </Pressable>
      {error !== "" && (
        <>
          <Gap height={5} />
          <TextXS color={Colors.text.error}>{error}</TextXS>
        </>
      )}
    </>
  );
};

export default InputDate;
