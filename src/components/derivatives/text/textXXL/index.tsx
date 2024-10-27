import React, { useMemo } from "react";
import Sizes from "@/configs/sizes";
import Text from "@/components/generics/text";
import textProps from "@/components/generics/text/types";

const TextXXL: React.FC<textProps> = (props) => {
  const { children } = props;

  const RenderMain = useMemo(() => {
    return (
      <Text
        line={Sizes.text.xxl.lineHeight}
        size={Sizes.text.xxl.size}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
};

export default TextXXL;
