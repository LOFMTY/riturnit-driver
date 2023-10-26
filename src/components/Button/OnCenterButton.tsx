import {TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {icons, SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

function OnCenterButton({onCenter, containerStyle, appTheme}: any) {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: SIZES.height > 700 ? height * 0.88 : 550,
        right: 15,
        height: 45,
        padding: 12,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        backgroundColor: appTheme.bottomSheet,
        ...containerStyle,
      }}
      onPress={onCenter}>
      <FastImage
        source={icons.focus}
        style={{
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
}

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(OnCenterButton);
