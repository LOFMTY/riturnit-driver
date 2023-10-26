import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

import {SIZES, FONTS, COLORS} from '../../../constants';

interface ErrorMessageProps {
  appTheme: any;
  text?: string;
  message?: string;
  onRetry?: () => void;
}

const ErrorBottomSheet = ({
  appTheme,
  text = 'Error',
  message = 'Unknown Error',
  onRetry = () => {},
}: ErrorMessageProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center'}}>
        <LottieView
          style={{
            height: 150,
            width: 150,
            left: 7,
            marginTop: SIZES.padding * 2.5,
          }}
          autoPlay
          speed={0.5}
          loop={true}
          source={require('../../../assets/json/errorBot.json')}
        />
        <View style={{marginTop: SIZES.margin}}>
          <Text
            style={{
              ...FONTS.h3,
              textAlign: 'center',
              color: appTheme.textColor,
              lineHeight: 22,
            }}>
            {text}
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              paddingTop: SIZES.margin,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            {message}
          </Text>
        </View>
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

export default connect(mapStateToProps)(ErrorBottomSheet);
