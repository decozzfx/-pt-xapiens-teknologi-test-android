import React, { ReactNode, useMemo } from 'react';
import Tag from '@components-generics/tag';
import { useTheme } from '@react-navigation/native';

const TagComponent: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const { colors } = useTheme();

  const RenderMain = useMemo(() => {
    return (
      <Tag color={colors.tagWarning} {...props}>
        {children}
      </Tag>
    );
  }, [children, colors, props]);
  return RenderMain;
};

export default TagComponent;
