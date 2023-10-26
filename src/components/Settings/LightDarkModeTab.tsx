import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {COLORS, SIZES, FONTS, icons} from '../../constants';

const LightDarkModeTab = ({
  title,
  iconTitle,
  appTheme,
  textStyle,
  containerStyle,
  switched,
  imageIcon,
  iconStyle,
}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 55,
        borderRadius: SIZES.radius,
        backgroundColor: appTheme.tabBackgroundColor,
        marginTop: 8,
        padding: SIZES.base,
        marginHorizontal: SIZES.padding,
        ...containerStyle,
      }}>
      <View
        style={{
          justifyContent: 'center',
          paddingLeft: 4,
        }}>
        <FastImage
          source={iconTitle}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            ...iconStyle,
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 22, justifyContent: 'center'}}>
        <Text style={{...FONTS.h5, color: appTheme.textColor, ...textStyle}}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingRight: 5,
        }}>
        {imageIcon ? (
          <FastImage
            source={icons.right}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
            }}
          />
        ) : (
          switched
        )}
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

export default connect(mapStateToProps)(LightDarkModeTab);
