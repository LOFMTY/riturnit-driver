import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {FONTS, SIZES, icons} from '../../constants';

const WalletTab = ({icon, title, onPress, appTheme, containerStyle}: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 60,
        borderRadius: SIZES.radius,
        backgroundColor: appTheme.tabBackgroundColor,
        marginTop: 5,
        marginHorizontal: SIZES.margin,
        paddingHorizontal: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <FastImage
          source={icon}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            paddingLeft: SIZES.radius,
            ...FONTS.h5,
            color: appTheme.textColor,
          }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        onPress={onPress}>
        <FastImage
          source={icons.right}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(WalletTab);
