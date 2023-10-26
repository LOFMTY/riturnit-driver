import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const IconButton = ({containerStyle,iconStyle, icon, onPress}: any) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
      }}
      onPress={onPress}>
      <FastImage
        source={icon}
        resizeMode={FastImage.resizeMode.contain}
        tintColor={iconStyle}
        style={{
          width: 16,
          height: 16,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
