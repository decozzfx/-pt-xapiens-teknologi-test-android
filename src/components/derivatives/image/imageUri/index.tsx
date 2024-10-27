import React, { useMemo } from 'react';
import ImageComponent from '@components-generics/image';
import { StyleProp, ViewStyle } from 'react-native';

type IProps = {
  uri: string;
  style?: StyleProp<ViewStyle>;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
};
const ImageUri: React.FC<IProps> = (props) => {
  const { uri } = props;
  const RenderMain = useMemo(() => {
    return <ImageComponent source={{ uri }} {...props} />;
  }, [props, uri]);
  return RenderMain;
};

export default ImageUri;
