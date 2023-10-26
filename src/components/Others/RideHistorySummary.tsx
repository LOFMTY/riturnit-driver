import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {FONTS, SIZES} from '../../constants';

const RideHistorySummary = ({appTheme, text, icon, mainText}: any) => {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: appTheme.tabBackgroundColor,
        marginTop: SIZES.padding,
        borderRadius: SIZES.base,
        height: 70,
        width: 170,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={icon}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>

        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.body3,
              fontWeight: 'bold',
              color: appTheme.subTextColor,
            }}>
            {text}
          </Text>
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
              paddingTop: 5,
            }}>
            {mainText}
          </Text>
        </View>
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

export default connect(mapStateToProps)(RideHistorySummary);
