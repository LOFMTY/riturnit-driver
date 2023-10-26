import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

import {SIZES, FONTS, icons} from '../../../constants';

const NoReturnsAvailable = ({appTheme}: any) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: appTheme.tabIndicatorBackgroundColor,
        marginTop: SIZES.padding,
        padding: SIZES.margin
      }}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <FastImage
          source={icons.noCars}
          resizeMode="contain"
          style={{width: 25, height: 25}}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.radius,
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h5, color: appTheme.textColor}}>
          No returns available at the moment...
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <LottieView
          style={{width: 55, alignSelf: 'center'}}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../../assets/json/parking.json')}
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

export default connect(mapStateToProps)(NoReturnsAvailable);
