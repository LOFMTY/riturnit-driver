import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {TopHeader, WalletTab} from '../../components';
import {SIZES, FONTS, COLORS, icons} from '../../constants';

const PaymentMethod = ({appTheme}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader title="Payment method" />

      <WalletTab
        icon={icons.payment}
        title="Add new card"
        containerStyle={{marginTop: SIZES.margin, paddingHorizontal: 20}}
        // onPress={() => navigation.navigate('PaymentMethod')}
      />

      <View style={{margin: SIZES.padding}}>
       
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

export default connect(mapStateToProps)(PaymentMethod);
