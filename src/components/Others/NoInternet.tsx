import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';

import {SIZES, FONTS} from '../../constants';

const NoInternet = ({appTheme}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
        justifyContent: 'center',
      }}>
      <View>
        <LottieView
          style={{height: 300, width: 300, alignSelf: 'center'}}
          autoPlay
          speed={0.5}
          loop={true}
          source={require('../../assets/json/NoInternet.json')}
        />
        <View style={{margin: SIZES.base}}>
          <Text
            style={{
              ...FONTS.h3,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            Network Error
          </Text>
        </View>

        <View style={{margin: SIZES.base}}>
          <Text
            style={{
              ...FONTS.body2,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            You have no active network connection
          </Text>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state: {themeReducer: {appTheme: any}; error: any}) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(NoInternet);
