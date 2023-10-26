import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {Storage} from 'aws-amplify';
import dayjs from 'dayjs';

import {FONTS, SIZES} from '../../constants';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';

const Ride = ({appTheme, ride, user_photo}: any) => {
  const [imageUri, setImageUri] = useState<any>(null);

  useEffect(() => {
    let unmounted = false;
    if (user_photo) {
      Storage.get(user_photo).then(setImageUri);
    }
    return () => {
      unmounted = true;
    };
  }, [user_photo]);

  return (
    <View
      style={{
        backgroundColor: appTheme.tabBackgroundColor,
        borderRadius: SIZES.base,
        marginTop: 10,
        padding: SIZES.radius,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
            resizeMode={FastImage.resizeMode.cover}
            style={{
              width: 40,
              height: 40,
              borderRadius: SIZES.base,
            }}
          />
        </View>

        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h6, color: appTheme.textColor}}>
            {ride.user_name}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              fontWeight: 'bold',
              color: appTheme.subTextColor,
              paddingTop: 3,
            }}>
            {dayjs(ride.createdAt).format('ddd, DD MMM')}
          </Text>
        </View>

        <View style={{marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h6, color: appTheme.textColor}}>
            ${parseFloat(ride.trip_cost).toFixed(2)}
          </Text>

          <Text
            style={{
              ...FONTS.body4,
              fontWeight: 'bold',
              color: appTheme.subTextColor,
              paddingTop: 3,
            }}>
            {parseFloat(ride.distance).toFixed(2)} miles
          </Text>
        </View>
      </View>

      {/* Horizontal Rule */}
      <View
        style={{
          marginTop: SIZES.radius,
          borderBottomWidth: 0.4,
          borderColor: appTheme.buttonText,
        }}
      />

      {/* PICK UP */}
      <View style={{flex: 1, marginTop: SIZES.base}}>
        <Text
          style={{
            ...FONTS.body5,
            fontWeight: 'bold',
            color: appTheme.subTextColor,
          }}>
          PICK UP:{' '}
        </Text>

        <Text
          style={{
            ...FONTS.body4,
            fontWeight: 'bold',
            color: appTheme.textColor,
          }}>
          {ride.pickup_location_description}
        </Text>
      </View>

      {/* DROP OFF */}
      <View style={{flex: 1, marginTop: SIZES.base}}>
        <Text
          style={{
            ...FONTS.body5,
            fontWeight: 'bold',
            color: appTheme.subTextColor,
          }}>
          DROF OFF:{' '}
        </Text>

        <Text
          style={{
            ...FONTS.body4,
            fontWeight: 'bold',
            color: appTheme.textColor,
          }}>
          {ride.dropoff_location_description}
        </Text>
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

export default connect(mapStateToProps)(Ride);
