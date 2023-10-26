import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {FONTS, COLORS, SIZES} from '../../constants';

const TransactionTab = ({
  body,
  title,
  transactionType,
  amount,
  time,
  appTheme,
  containerStyle,
}: any) => {
  return (
    <View
      style={{
        backgroundColor: appTheme.tabBackgroundColor,
        marginTop: 5,
        marginHorizontal: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.base,
        ...containerStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
            }}>
            {title}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.h5,
              color: transactionType,
            }}>
            ${amount.toFixed(2)}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: SIZES.base,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.buttonText,
            }}>
            {body}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.body4,
              fontWeight: '500',
              color: appTheme.buttonText,
            }}>
            {time}
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

export default connect(mapStateToProps)(TransactionTab);
