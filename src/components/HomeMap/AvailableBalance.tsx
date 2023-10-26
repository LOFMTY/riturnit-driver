import {TouchableOpacity, Text, Dimensions} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {FONTS, SIZES, COLORS} from '../../constants';

const {width, height} = Dimensions.get('window');

const AvailableBalance = ({containerStyle, appTheme}: any) => {
  const navigation = useNavigation<any>();

  const userBalance = 0;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Wallet')}
      style={{
        position: 'absolute',
        bottom: SIZES.height > 700 ? height * 0.89 : 620,
        alignSelf: 'center',
        padding: SIZES.base,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        opacity: 0.9,
        backgroundColor: appTheme.bottomSheet,
        ...containerStyle,
      }}>
      <Text
        style={{
          ...FONTS.h3,
          fontWeight: 'bold',
          color: appTheme.textColor,
          textAlign: 'center',
        }}>
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.body2,
            fontWeight: 'bold',
            color: COLORS.caribbeanGreen,
            textAlign: 'center',
          }}>
          ${' '}
        </Text>
        {userBalance?.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AvailableBalance);
