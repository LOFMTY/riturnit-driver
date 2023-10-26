import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {FONTS, SIZES, COLORS} from '../../constants';

const DailyTableData = ({
  dailyDelivery,
  totalMiles,
  totalCashTrip,
  totalAmount,
  currentDay,
  appTheme,
  onlineHours,
}: any) => {
  return (
    <View
      style={{
        backgroundColor: appTheme.tabBackgroundColor,
        borderRadius: SIZES.margin,
        padding: SIZES.margin,
        marginBottom: 15,
      }}>
      <Text
        style={{
          ...FONTS.h6,
          textAlign: 'center',
          color: appTheme.textColor,
        }}>
        {currentDay}
      </Text>

      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.caribbeanGreen,
          textAlign: 'center',
          fontWeight: '900',
          letterSpacing: 1,
          paddingTop: SIZES.base
        }}>
        ${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>

      <Text
        style={{
          ...FONTS.h6,
          textAlign: 'center',
          color: appTheme.buttonText,
          paddingTop: SIZES.radius,
        }}>
        Total Trip Time -{' '}
        <Text
          style={{
            ...FONTS.h5,
            textAlign: 'center',
            color: appTheme.textColor,
            paddingTop: 15,
          }}>
          {onlineHours}
        </Text>
      </Text>

      {/* Horizontal Rule */}
      <View
        style={{
          marginTop: SIZES.margin,
          borderBottomWidth: 0.8,
          marginHorizontal: SIZES.base,
          borderColor: appTheme.buttonText,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <View style={{justifyContent: 'center', paddingTop: 15}}>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.textColor,
              ...FONTS.h5,
            }}>
            {dailyDelivery}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.buttonText,
              paddingTop: 4,
              ...FONTS.body3,
            }}>
            Total Trips
          </Text>
        </View>

        {/* Vertical Rule */}
        <View
          style={{
            height: '120%',
            width: 0.8,
            right: 0,
            backgroundColor: appTheme.buttonText,
          }}
        />

        <View style={{paddingTop: 15}}>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.textColor,
              ...FONTS.h5,
            }}>
            {totalMiles}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.buttonText,
              paddingTop: 4,
              ...FONTS.body3,
            }}>
            Total Miles
          </Text>
        </View>

        {/* Vertical Rule */}
        <View
          style={{
            height: '120%',
            width: 0.8,
            right: 0,
            backgroundColor: appTheme.buttonText,
          }}
        />

        <View style={{paddingTop: 15}}>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.textColor,
              ...FONTS.h5,
            }}>
            ${totalCashTrip}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.buttonText,
              paddingTop: 4,
              ...FONTS.body3,
            }}>
            Cash Trip
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

export default connect(mapStateToProps)(DailyTableData);
