import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {SIZES, FONTS, icons} from '../../constants';

const SettingsTabs = ({icon, title, onPress, appTheme, containerStyle}: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        marginTop: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: appTheme.tabBackgroundColor,
        borderRadius: SIZES.radius,
        padding: 15,
        height: 50,
        marginHorizontal: SIZES.padding,
        ...containerStyle,
      }}
      onPress={onPress}>
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={icon}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: SIZES.margin,
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h5, color: appTheme.textColor}}>{title}</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
        }}>
        <FastImage
          source={icons.right}
          resizeMode="contain"
          style={{width: 25, height: 25}}
        />
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

export default connect(mapStateToProps)(SettingsTabs);

