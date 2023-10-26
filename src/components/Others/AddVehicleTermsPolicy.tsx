import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {SIZES, FONTS} from '../../constants';

const AddVehicleTermsPolicy = ({appTheme}: any) => {
  return (
    <View style={{marginTop: SIZES.margin, marginHorizontal: SIZES.margin}}>
      <Text
        style={{
          ...FONTS.body3,
          color: appTheme.textColor,
          textAlign: 'center',
          lineHeight: 22,
        }}>
        By continuing, I confirm that i have read and agreed to the{' '}
        <Text
          style={{
            ...FONTS.h5,
            color: appTheme.textColor,
            textAlign: 'center',
            lineHeight: 22,
          }}>
          Terms & conditions
        </Text>{' '}
        and{' '}
        <Text
          style={{
            ...FONTS.h5,
            color: appTheme.textColor,
            textAlign: 'center',
            lineHeight: 22,
          }}>
          Privacy policy
        </Text>
      </Text>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AddVehicleTermsPolicy);
