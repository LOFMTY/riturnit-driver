import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/client';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';
import CircularProgress from 'react-native-circular-progress-indicator';
import {AirbnbRating} from 'react-native-ratings';

import {RatingItem, TopHeader} from '../../components';

import {ratingsByDriverID} from '../../queries/Profile/DriverQueries';
import {
  ListTripsQuery,
  RatingsByDriverIDQuery,
  RatingsByDriverIDQueryVariables,
  ListTripsQueryVariables,
} from '../../API';
import {listTrips} from '../../queries/Home/TripQueries';
import {useAuthContext} from '../../context/AuthContext';
import {SIZES, FONTS, COLORS, icons} from '../../constants';

const Ratings = ({appTheme}: any) => {
  const {userID} = useAuthContext();

  // LIST ALL TRIPS
  const {loading: onLoad, data: onData} = useQuery<
    ListTripsQuery,
    ListTripsQueryVariables
  >(listTrips, {
    pollInterval: 20,
  });

  const fetchTrips: any =
    onData?.listTrips?.items
      .filter(tripStatus => tripStatus?.trip_status?.startsWith('COMPLETED'))
      .filter(userId => userId?.tripsDriverId === userID)
      .filter(trips => !trips?._deleted) || [];

  // DRIVER DETAILS - GET DRIVER RATINGS
  const {data, loading} = useQuery<
    RatingsByDriverIDQuery,
    RatingsByDriverIDQueryVariables
  >(ratingsByDriverID, {
    variables: {driverID: userID, limit: 20},
    pollInterval: 200,
  });

  const userReviews =
    data?.ratingsByDriverID?.items
      .filter(cm => cm?.comment)
      .filter(upd => upd?.createdAt) || [];

  // FIND AVERAGE RATINGS
  const averageRatings = data?.ratingsByDriverID?.items;
  const findAverageAge = (arr: any) => {
    return arr?.reduce((acc: number, val: {rating: number}) => {
      return acc + val.rating / arr.length;
    }, 0);
  };
  let driverRatings = findAverageAge(averageRatings);

  if (onLoad || loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Ratings" />

      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          backgroundColor: appTheme.backgroundColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CircularProgress
          initialValue={fetchTrips.length || 0}
          value={fetchTrips.length || 0}
          radius={70}
          title={'Total Returns'}
          titleColor={appTheme.buttonText}
          titleStyle={{...FONTS.body4, fontWeight: '700'}}
          progressValueStyle={{...FONTS.extraBold}}
          inActiveStrokeWidth={12}
          inActiveStrokeOpacity={0.6}
          inActiveStrokeColor={COLORS.cornflowerBlue}
          activeStrokeColor={COLORS.gradient2}
          activeStrokeWidth={12}
          activeStrokeSecondaryColor={COLORS.gradient2}
        />
        <View
          style={{
            marginRight: SIZES.margin,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h1, color: appTheme.textColor}}>
            {parseFloat(driverRatings) || 0}
          </Text>
          <View
            style={{
              paddingTop: 2,
              justifyContent: 'center',
              right: 4,
            }}>
            <AirbnbRating
              count={5}
              defaultRating={driverRatings || 0}
              size={17}
              showRating={false}
              isDisabled={true}
              selectedColor={COLORS.gradient2}
            />
          </View>

          <View
            style={{
              paddingTop: 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <FastImage source={icons.user} style={{width: 15, height: 15}} />
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.base,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h5, color: appTheme.buttonText}}>
                {averageRatings?.length} users
              </Text>
            </View>
          </View>
        </View>
      </View>

      {userReviews.length > 0 ? (
        <FlatList
          data={userReviews}
          keyExtractor={(item, index) => `${item && index}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: any) => {
            // Render item
            return (
              <RatingItem
                name={item?.customer_name}
                comment={item?.comment}
                rating={item?.rating}
                userImage={item?.customer_image}
                dateOfComment={dayjs(item?.createdAt).format('ddd, DD MMM')}
              />
            );
          }}
          ListFooterComponent={<View style={{marginBottom: 300}} />}
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding * 1.5,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                ...FONTS.h4,
                color: appTheme.textColor,
                textAlign: 'center',
              }}>
              You currently have no reviews
            </Text>
          </View>
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

export default connect(mapStateToProps)(Ratings);
