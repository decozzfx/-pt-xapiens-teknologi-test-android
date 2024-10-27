import React, { useMemo } from 'react';
import ImageComponent from '@components-generics/image';
import { StyleProp, ViewStyle } from 'react-native';

type IProps = {
  data: string;
  style?: StyleProp<ViewStyle>;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
};
const ImageBase64: React.FC<IProps> = (props) => {
  const { data } = props;
  const RenderMain = useMemo(() => {
    return <ImageComponent source={data} {...props} />;
  }, [data, props]);
  return RenderMain;
};

export default ImageBase64;
