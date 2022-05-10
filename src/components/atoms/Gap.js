import React from 'react';
import {View} from 'react-native';

const Gap = ({height, width, color}) => {
  return (
    <View
      height={height ? height : 0}
      width={width ? width : '100%'}
      style={{backgroundColor: color ? color : '#fff'}}></View>
  );
};

export default Gap;
