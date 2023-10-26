import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

import {TransactionTab, TopHeader} from '../../components';
import {SIZES, dummyData, COLORS, FONTS} from '../../constants';

const transactions = dummyData.transactionHistory;
// const transactions: any = 0;

const TransactionHistory = ({appTheme}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader title="Transaction History" />

      {transactions ? (
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<View style={{marginTop: SIZES.padding}} />}
          renderItem={({item}: any) => {
            return (
              <TransactionTab
                title={item.title}
                amount={item.amount}
                body={item.body}
                time={item.time}
                transactionType={
                  item.transactionType === 'CREDIT'
                    ? COLORS.caribbeanGreen
                    : COLORS.scarlet
                }
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            backgroundColor: appTheme.tabBackgroundColor,
            padding: SIZES.margin,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Lottie Image */}
          <View
            style={{
              marginHorizontal: SIZES.padding,
              alignItems: 'center',
            }}>
            <LottieView
              style={{width: 400, alignSelf: 'center', marginBottom: 5}}
              autoPlay
              speed={1.5}
              loop={true}
              source={require('../../assets/json/noTransactions.json')}
            />
          </View>

          <Text
            style={{
              ...FONTS.h2,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            You haven't made any return.
          </Text>
          <Text
            style={{
              paddingTop: SIZES.radius,
              ...FONTS.body2,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            Once you successfully complete a ride, you'll earn and all the
            transactions will appear
          </Text>
        </View>
      )}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(TransactionHistory);
