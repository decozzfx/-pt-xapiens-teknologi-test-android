import React, { useMemo } from "react";
import Sizes from "@/configs/sizes";
import Text from "@/components/generics/text";
import textProps from "@/components/generics/text/types";

const Text2XL: React.FC<textProps> = (props) => {
  const { children } = props;

  const RenderMain = useMemo(() => {
    return (
      <Text
        size={Sizes.text["2xl"].size}
        line={Sizes.text["2xl"].lineHeight}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
};

export default Text2XL;
