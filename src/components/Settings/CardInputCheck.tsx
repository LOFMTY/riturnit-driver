import React from 'react';
import {View, Image} from 'react-native';

import {COLORS, icons} from '../../constants';

const CardInputCheck = ({value, error}: any) => {
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Image
        source={
          value == '' || (value != '' && error == '')
            ? icons.correct
            : icons.deleted
        }
        style={{
          height: 23,
          width: 23,
          tintColor:
            value == ''
              ? COLORS.gray
              : value != '' && error == ''
              ? COLORS.caribbeanGreen
              : COLORS.scarlet,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default CardInputCheck;
