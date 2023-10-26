import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {SIZES, FONTS, icons} from '../../constants';

const NotificationTab = ({appTheme, title, body}: any) => {
  return (
    <View
      style={{
        marginTop: SIZES.base,
        padding: SIZES.base,
        backgroundColor: appTheme.tabBackgroundColor,
        marginHorizontal: SIZES.radius,
        borderRadius: SIZES.base,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={icons.logo}
            style={{
              width: 30,
              height: 30,
              borderRadius: 100 * 2,
            }}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 6, justifyContent: 'center'}}>
          <Text style={{...FONTS.h6, color: appTheme.textColor}}>{title}</Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            ...FONTS.body4,
            color: appTheme.textColor,
          }}>
          {body}
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

export default connect(mapStateToProps)(NotificationTab);
