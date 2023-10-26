import React from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/client';
import dayjs from 'dayjs';

import {SIZES, icons, FONTS, COLORS} from '../../constants';
import {
  GetDriverQuery,
  GetDriverQueryVariables,
  ListTripsQuery,
  ListTripsQueryVariables,
} from '../../API';
import {useAuthContext} from '../../context/AuthContext';
import {getDriver} from '../../queries/Profile/DriverQueries';
import {listTrips} from '../../queries/Home/TripQueries';
import {timeConvert} from '../../utilities/service';

const DriverBottomSheetInfo = ({appTheme, statusText}: any) => {
  const {userID} = useAuthContext();

  const start = dayjs().startOf('day').toISOString(); // set to 12:00 am today

  // GET DRIVER DETAILS
  const {data: onData} = useQuery<GetDriverQuery, GetDriverQueryVariables>(
    getDriver,
    {
      variables: {
        id: userID,
      },
    },
  );
  const driverDetail: any = onData?.getDriver;

  // LIST ALL TRIPS
  const {loading, data} = useQuery<ListTripsQuery, ListTripsQueryVariables>(
    listTrips,
    {
      variables: {
        limit: 26,
      },
    },
  );

  const totalTrips: any =
    data?.listTrips?.items
      .filter(tripStatus => tripStatus?.trip_status?.startsWith('COMPLETED'))
      .filter(userId => userId?.tripsDriverId === userID)
      .filter(sw => sw?.updatedAt! > start)
      .filter(trips => !trips?._deleted)
      .sort((a: any, b: any): any => a?.createdAt > b?.createdAt) || [];

  // console.log('daily trips', totalTrips)

  const totalDistance = totalTrips.reduce(
    (acc: number, o: {distance: string}) => acc + parseFloat(o.distance),
    0,
  );
  const onlineHours = totalTrips.reduce(
    (acc: any, duration: {duration: any}) => acc + duration.duration,
    0,
  );

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: appTheme.bottomSheet,
      }}>
      <View
        style={{
          marginTop: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: statusText ? COLORS.lightGray4 : COLORS.caribbeanGreen,
          }}>
          {statusText}
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.base,
          marginHorizontal: SIZES.margin,
          alignItems: 'center',
          height: 90,
          borderRadius: SIZES.padding,
          backgroundColor: appTheme.tabIndicatorBackgroundColor,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {/* Acceptance */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FastImage
            source={icons.clock}
            tintColor={COLORS.gradient2}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
              paddingTop: 6,
              textAlign: 'center',
            }}>
            {timeConvert(onlineHours)}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.textColor,
              textAlign: 'center',
            }}>
            Online Hours
          </Text>
        </View>

        {/* Rating */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FastImage
            source={icons.star}
            tintColor={COLORS.gradient2}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
              paddingTop: 6,
              textAlign: 'center',
            }}>
            {parseFloat(driverDetail?.rating) || 0}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.textColor,
              textAlign: 'center',
            }}>
            Rating
          </Text>
        </View>

        {/* Driver Score */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FastImage
            source={icons.speed}
            tintColor={COLORS.gradient2}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
              paddingTop: 6,
              textAlign: 'center',
            }}>
            {totalDistance.toFixed(2)}mi
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.textColor,
              textAlign: 'center',
            }}>
            Total Distance
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(DriverBottomSheetInfo);
