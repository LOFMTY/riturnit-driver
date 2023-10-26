import {TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {icons, SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

const DirectionsButton = ({appTheme, onPress, containerStyle}: any) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: SIZES.height > 700 ? height * 0.695 : 450,
        right: 12,
        padding: 10,
        opacity: 0.8,
        borderRadius: 200 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appTheme.bottomSheet,
        ...containerStyle,
      }}
      onPress={onPress}>
      <FastImage
        source={icons.direction}
        resizeMode={FastImage.resizeMode.contain}
        style={{
          width: 35,
          height: 35,
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

export default connect(mapStateToProps)(DirectionsButton);
