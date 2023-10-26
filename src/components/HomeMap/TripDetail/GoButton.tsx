import {View, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES} from '../../../constants';

const GoButton = ({isOnline, onPress}: any) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: isOnline ? COLORS.caribbeanGreen : COLORS.lightGray4,
        height: 70,
        width: 70,
        alignSelf: 'center',
        borderRadius: 150 / 2,
        justifyContent: 'center',
        bottom: SIZES.height > 700 ? height * 0.197 : 150,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: isOnline ? COLORS.caribbeanGreen : COLORS.lightGray4,
          height: 60,
          width: 60,
          alignSelf: 'center',
          justifyContent: 'center',
          borderWidth: 3,
          borderColor: COLORS.white,
          borderRadius: 100 / 2,
        }}>
        <Text style={{...FONTS.h4, color: COLORS.white, textAlign: 'center'}}>
          {isOnline ? 'END' : 'GO'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoButton;
