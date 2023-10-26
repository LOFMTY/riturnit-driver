import {View, StatusBar, ActivityIndicator, Text, FlatList} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/client';

import {TopHeader, Ride, RideHistorySummary} from '../../components';
import {FONTS, SIZES, icons} from '../../constants';
import {ListTripsQuery, ListTripsQueryVariables} from '../../API';
import {listTrips} from '../../queries/Home/TripQueries';
import {useAuthContext} from '../../context/AuthContext';

const RideHistory = ({appTheme}: any) => {
  const {userID} = useAuthContext();

  // LIST ALL TRIPS
  const {loading, data} = useQuery<ListTripsQuery, ListTripsQueryVariables>(
    listTrips,
  );

  const fetchTrips: any =
    data?.listTrips?.items
      .filter(tripStatus => tripStatus?.trip_status?.startsWith('COMPLETED'))
      .filter(userId => userId?.tripsDriverId === userID)
      .filter(trips => !trips?._deleted) || [];

  const totalEarnings = fetchTrips.reduce(
    (acc: number, o: {trip_cost: string}) => acc + parseInt(o.trip_cost),
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
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader title="Ride History" />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.radius,
          justifyContent: 'space-between',
        }}>
        <RideHistorySummary
          text={'Earnings'}
          icon={icons.earnings}
          mainText={`$${parseFloat(totalEarnings).toFixed(2)} ` || 0}
        />
        <RideHistorySummary
          text={'Rides'}
          icon={icons.cars}
          mainText={fetchTrips.length || 0}
        />
      </View>

      {fetchTrips.length > 0 ? (
        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: SIZES.radius,
            marginTop: SIZES.base,
          }}>
          <FlatList
            data={fetchTrips}
            keyExtractor={(item, index) => `${item && index}`}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <Ride ride={item} user_photo={item.user_photo} />;
            }}
            ListFooterComponent={<View style={{marginBottom: 300}} />}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: appTheme.tabBackgroundColor,
            padding: SIZES.margin,
            alignItems: 'center',
            margin: SIZES.padding,
            borderRadius: SIZES.base,
          }}>
          <Text
            style={{
              ...FONTS.h4,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            No activity today
          </Text>
          <Text
            style={{
              paddingTop: SIZES.radius,
              ...FONTS.body3,
              textAlign: 'center',
            }}>
            You haven't made any returns. Go online and begin accepting request
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

export default connect(mapStateToProps)(RideHistory);
