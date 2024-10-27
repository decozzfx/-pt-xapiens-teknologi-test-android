import React, { useMemo } from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';

type IProps = {
  style?: StyleProp<ViewStyle> | ViewProps | any;
  source?: any;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
};
const ImageComponent: React.FC<IProps> = (props) => {
  const { source, style, resizeMode } = props;

  const RenderMain = useMemo(() => {
    return (
      <FastImage
        {...props}
        style={style}
        source={source}
        resizeMode={resizeMode}
      />
    );
  }, [props, resizeMode, source, style]);

  return RenderMain;
};

export default ImageComponent;
