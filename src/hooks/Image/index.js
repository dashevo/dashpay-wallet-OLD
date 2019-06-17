import React from 'react';
import { Image } from 'react-native';

export { default as Image } from 'react-native-fast-image';
export { default as useImage } from './useImage';

// Tmp
type Props = {};

function TmpImage(props: Props) {
  return <Image {...props} />;
}

export default TmpImage;
