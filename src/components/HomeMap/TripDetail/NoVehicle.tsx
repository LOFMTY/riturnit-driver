import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

import {SIZES, FONTS} from '../../../constants';

const NoVehicle = ({appTheme}: any) => {
  return (
    <View
      style={{
        padding: SIZES.base,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.base,
        borderRadius: SIZES.radius,
        backgroundColor: appTheme.tabIndicatorBackgroundColor,
        marginTop: SIZES.padding,
      }}>
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.radius,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: '700',
            color: appTheme.textColor,
            lineHeight: 20,
          }}>
          You currently have no vehicle. Add one to make a Return
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <LottieView
          style={{width: 80, height: 80}}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../../assets/json/carStop.json')}
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

export default connect(mapStateToProps)(NoVehicle);
