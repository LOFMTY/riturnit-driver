import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {SIZES, FONTS, icons} from '../../../constants';

const TripTimeDate = ({dateTime, appTheme}: any) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginBottom: SIZES.radius,
        marginHorizontal: SIZES.radius,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={icons.timer}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.radius,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h5,
            color: appTheme.subTextColor,
          }}>
          Date & Time:
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            ...FONTS.h6,
            color: appTheme.textColor,
          }}>
          {dateTime}
        </Text>
      </View>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(TripTimeDate);
