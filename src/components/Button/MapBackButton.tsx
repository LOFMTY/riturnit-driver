import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

const MapBackButton = ({appTheme, onPress, containerStyle, icon}: any) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: SIZES.height > 700 ? height * 0.895 : 620,
        left: 15,
        height: 45,
        padding: 12,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        opacity: 0.9,
        justifyContent: 'center',
        backgroundColor: appTheme.bottomSheet,
        ...containerStyle,
      }}
      onPress={onPress}>
      <FastImage
        source={icon}
        tintColor={appTheme.textColor}
        style={{
          width: 18,
          height: 18,
        }}
      />
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(MapBackButton);
