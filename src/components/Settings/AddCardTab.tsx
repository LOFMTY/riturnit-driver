import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {SIZES, FONTS, COLORS, icons} from '../../constants';

const AddCardTab = ({onPress, appTheme, containerStyle}: any) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: appTheme.backgroundColor,
        ...containerStyle
      }}
      onPress={onPress}>
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={icons.payment}
          style={{
            width: 25,
            height: 25,
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
            ...FONTS.h5,
            color: appTheme.textColor,
          }}>
          Add debit/credit card
        </Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}>
        <FastImage
          source={icons.right}
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

export default connect(mapStateToProps)(AddCardTab);
