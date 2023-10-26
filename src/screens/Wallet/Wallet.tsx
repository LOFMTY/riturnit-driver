import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {TextButton, TopHeader, WalletTab, WithdrawTab} from '../../components';
import {SIZES, FONTS, COLORS, icons} from '../../constants';

const Wallet = ({appTheme}: any) => {
  const navigation = useNavigation<any>();

  // const [userBalance] = useState(dummyData.drivers[0]?.remainBalance);
  const userBalance = 0;

  function renderCurrentBalance() {
    return (
      <View
        style={{
          backgroundColor: appTheme.tabBackgroundColor,
          margin: SIZES.margin,
          padding: SIZES.margin,
          borderRadius: SIZES.radius,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{...FONTS.h5, color: appTheme.buttonText}}>
              Current Balance
            </Text>

            <View style={{paddingTop: SIZES.radius}}>
              <Text
                style={{
                  fontSize: SIZES.mediumTitle,
                  fontWeight: 'bold',
                  color: COLORS.caribbeanGreen,
                }}>
                ${userBalance?.toFixed(2)}
              </Text>
            </View>
          </View>

          <TextButton
            disabled={userBalance <= 0}
            label="Withdraw"
            labelStyle={{...FONTS.h5, color: COLORS.white}}
            buttonContainerStyle={{
              height: 45,
              width: 120,
              justify: 'center',
              marginTop: SIZES.margin,
              borderRadius: SIZES.base,
              backgroundColor:
                userBalance <= 0 ? COLORS.gray : COLORS.gradient2,
            }}
            onPress={() => navigation.navigate('WithdrawMoney')}
          />
        </View>

        <WithdrawTab time={'Friday, November 16th, 2022 '} amount={0.01} />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader title="Wallet" />

      {/* Current Balance  */}
      {renderCurrentBalance()}

      <WalletTab
        icon={icons.money}
        title="Add payment method"
        onPress={() => navigation.navigate('PaymentMethod')}
      />
      <WalletTab
        icon={icons.receipt}
        title="View transaction history"
        onPress={() => navigation.navigate('TransactionHistory')}
      />
      <WalletTab icon={icons.danger} title="Need help?" />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(Wallet);
