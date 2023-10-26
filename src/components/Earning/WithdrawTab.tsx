import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import FastImage from 'react-native-fast-image';

import {FONTS, SIZES, icons} from '../../constants';

const WithdrawTab = ({time, appTheme}: any) => {
  const navigation = useNavigation();

  return (
    // {/* Wallet Amount */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: SIZES.margin,
      }}>
      {/* Image  */}
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={icons.clock}
          resizeMode="contain"
          style={{
            width: 35,
            height: 35,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.margin,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.body4,
            color: appTheme.textColor,
          }}>
          Your next payout day is:
        </Text>

        <Text
          style={{
            paddingTop: SIZES.base,
            ...FONTS.h5,
            color: appTheme.textColor,
          }}>
          {time}
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

export default connect(mapStateToProps)(WithdrawTab);
