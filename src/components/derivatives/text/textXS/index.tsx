import React, { useMemo } from "react";
import Sizes from "@/configs/sizes";
import Text from "@/components/generics/text";
import textProps from "@/components/generics/text/types";

const TextXS: React.FC<textProps> = (props) => {
  const { children } = props;
  console.log("🚀 ~ props:", props);

  const RenderMain = useMemo(() => {
    return (
      <Text
        size={Sizes.text.xs.size}
        line={Sizes.text.xs.lineHeight}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
};

export default TextXS;
