import React, { useMemo } from "react";
import Sizes from "@/configs/sizes";
import Text from "@/components/generics/text";
import textProps from "@/components/generics/text/types";

const Text4XL: React.FC<textProps> = (props) => {
  const { children } = props;

  const RenderMain = useMemo(() => {
    return (
      <Text
        size={Sizes.text["4xl"].size}
        line={Sizes.text["4xl"].lineHeight}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
};

export default Text4XL;
