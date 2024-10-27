import React, { useMemo } from "react";
import Sizes from "@/configs/sizes";
import Text from "@/components/generics/text";
import textProps from "@/components/generics/text/types";

const TextLG: React.FC<textProps> = (props) => {
  const { children } = props;

  const RenderMain = useMemo(() => {
    return (
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        size={Sizes.text.lg.size}
        line={Sizes.text.lg.lineHeight}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
};

export default TextLG;
