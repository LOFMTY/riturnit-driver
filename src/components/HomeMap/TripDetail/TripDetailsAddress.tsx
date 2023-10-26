import {View, Text, Image} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {SIZES, FONTS, COLORS, icons} from '../../../constants';

const TripDetailsAddress = ({pickUp, dropOff, appTheme}: any) => {
  return (
    <View
      style={{
        marginTop: SIZES.radius,
        backgroundColor: appTheme.tabBackgroundColor,
        padding: 12,
      }}>
      {/* Pick up */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{paddingLeft: 3, justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.h6,
              color: appTheme.subTextColor,
            }}>
            Pick up:
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: SIZES.base,
            justifyContent: 'center',
          }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{
              ...FONTS.h6,
              color: appTheme.textColor,
            }}>
            {pickUp}
          </Text>
        </View>
      </View>

      {/* Drop Off */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: SIZES.radius,
        }}>
        <View style={{paddingLeft: 2, justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.h6,
              color: appTheme.subTextColor,
            }}>
            Drop off:
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: SIZES.base,
            justifyContent: 'center',
          }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{
              ...FONTS.h6,
              color: appTheme.textColor,
            }}>
            {dropOff}
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

export default connect(mapStateToProps)(TripDetailsAddress);
