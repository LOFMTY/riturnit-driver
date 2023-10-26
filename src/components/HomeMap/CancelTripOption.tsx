import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {SIZES, COLORS, FONTS, icons} from '../../constants';

const CancelTripOption = ({item, onPress, tripText, isSelected, appTheme}: any) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: appTheme.tabBackgroundColor,
        borderRadius: SIZES.radius,
        marginHorizontal: SIZES.padding,
        marginTop: SIZES.base,
      }}
      onPress={() => onPress(item)}>
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={isSelected ? icons.radioButton1 : icons.radioButton2}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            borderRadius: SIZES.padding * 8,
            borderColor: COLORS.gradient2,
          }}
        />
      </View>
      <View
        style={{flex: 1, marginLeft: SIZES.margin, justifyContent: 'center'}}>
        <Text style={{...FONTS.h5, color: appTheme.textColor}}>{tripText}</Text>
      </View>
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(CancelTripOption);
