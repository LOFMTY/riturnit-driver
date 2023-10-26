import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {SIZES} from '../../constants';

const ContactUsHorizontalTabs = ({onPress, imageIcon, containerStyle}: any) => {
  return (
    <TouchableOpacity
      style={{
        paddingTop: SIZES.radius,
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <FastImage
          source={imageIcon}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: 35,
            height: 35,
          }}
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

export default connect(mapStateToProps)(ContactUsHorizontalTabs);
