import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {SIZES, FONTS, icons} from '../../constants';

const CardTab = ({appTheme, item, onPress, isSelected, bankDetail}: any) => {
  return (
    <Pressable
      style={{
        marginTop: SIZES.base,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.base,
        backgroundColor: appTheme.backgroundColor,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={() => onPress(item)}>
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={bankDetail?.paymentImage || icons.mastercard}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.radius,
          justifyContent: 'center',
          top: 2,
        }}>
        <View>
          <Text
            style={{
              ...FONTS.h5,
              fontWeight: '800',
              color: appTheme.textColor,
            }}>
            **** {bankDetail?.cardNumber.substring(15)}
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.buttonText,
            }}>
            {bankDetail?.bankName}
          </Text>
        </View>
      </View>
      <Pressable
        style={{
          justifyContent: 'center',
        }}
        onPress={() => onPress(item)}>
        <FastImage
          source={isSelected ? icons.radioButton1 : icons.radioButton2}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </Pressable>
    </Pressable>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(CardTab);
