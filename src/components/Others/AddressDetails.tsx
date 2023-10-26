import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {COLORS, FONTS, SIZES, icons} from '../../constants';

const AddressDetails = ({
  icon,
  title,
  address,
  appTheme,
  onPress,
  containerStyle,
}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        borderRadius: SIZES.base,
        backgroundColor: appTheme.tabBackgroundColor,
        ...containerStyle,
      }}>
      {/* Payment  */}
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <FastImage
          source={icon}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </View>

      {/* address Title */}
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: SIZES.radius,
        }}
        onPress={onPress}>
        <Text
          style={{
            ...FONTS.body4,
            fontWeight: 'bold',
            color: appTheme.textColor,
          }}>
          {title}
        </Text>

        <Text
          numberOfLines={1}
          style={{
            ...FONTS.body4,
            color: COLORS.gray,
          }}>
          {address}
        </Text>
      </TouchableOpacity>

      {/* select option */}
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginRight: SIZES.radius,
        }}>
        {/* radio select button */}
        <FastImage
          source={icons.right}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: 15,
            height: 15,
          }}
        />
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

export default connect(mapStateToProps)(AddressDetails);
