import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {COLORS, SIZES, FONTS} from '../../constants';

const AccountTabs = ({
  onPress,
  title,
  infoStyle,
  info,
  containerStyle,
  appTheme,
}: any) => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 50,
          backgroundColor: appTheme.backgroundColor,
          marginHorizontal: SIZES.radius,
          marginTop: 5,
          ...containerStyle,
        }}
        onPress={onPress}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            ...infoStyle,
          }}>
          <Text
            numberOfLines={1}
            style={{
              ...FONTS.body3,
              letterSpacing: 0.09,
              color: COLORS.gray,
            }}>
            {info}
          </Text>
        </View>
      </TouchableOpacity>
      {/* Horizontal Rule */}
      <View
        style={{
          marginTop: 2,
          marginVertical: 3,
          marginHorizontal: SIZES.radius,
          borderBottomWidth: 0.3,
          borderRadius: SIZES.padding,
          borderColor: appTheme.textColor,
        }}
      />
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AccountTabs);
