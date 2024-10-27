import React from 'react';
import { View, ViewStyle } from 'react-native';

interface GapProps {
  height?: number;
  width?: number;
  customStyles?: ViewStyle;
}
function Gap(props: GapProps) {
  const { customStyles, height, width } = props;

  return (
    <View
      style={{
        height,
        width,
        ...customStyles,
      }}
    />
  );
}

export default Gap;
