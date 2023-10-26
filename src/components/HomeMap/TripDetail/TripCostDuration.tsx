import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {SIZES, FONTS, COLORS} from '../../../constants';

const TripCostDuration = ({duration, distance, appTheme}: any) => {
  return (
    <View>
      <View
        style={{
          marginTop: SIZES.radius,
          borderBottomWidth: 0.5,
          borderColor: appTheme.textColor,
        }}
      />
      {/* Cost, Duration & Other details */}
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.textColor,
              ...FONTS.h5,
            }}>
            {duration} mins
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.subTextColor,
              paddingTop: 4,
              ...FONTS.body3,
              fontWeight: 'bold',
            }}>
            Duration
          </Text>
        </View>

        {/* Vertical Rule */}
        <View
          style={{
            height: '150%',
            width: 0.6,
            backgroundColor: appTheme.subTextColor,
          }}
        />
        <View style={{right: 0}}>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.textColor,
              ...FONTS.h5,
            }}>
            {distance} miles
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.subTextColor,
              paddingTop: 4,
              ...FONTS.body3,
              fontWeight: 'bold',
            }}>
            Distance
          </Text>
        </View>
      </View>
      {/* Horizontal Rule */}
      <View
        style={{
          marginTop: SIZES.radius,
          borderBottomWidth: 0.3,
          borderColor: appTheme.textColor,
        }}
      />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(TripCostDuration);
