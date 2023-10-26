import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import {useQuery} from '@apollo/client';

import {SIZES, FONTS, COLORS} from '../../constants';
import {DailyImage, DailyTableData} from '../../components';
import {ListTripsQuery, ListTripsQueryVariables} from '../../API';
import {listTrips} from '../../queries/Home/TripQueries';
import {useAuthContext} from '../../context/AuthContext';
import {timeConvert} from '../../utilities/service';

const Daily = ({appTheme}: any) => {
  const {userID} = useAuthContext();

  const currentDay = dayjs().format('ddd, D MMM YYYY');
  const start = dayjs().startOf('day').toISOString(); // set to 12:00 am today

  // LIST ALL TRIPS
  const {loading, data, refetch} = useQuery<
    ListTripsQuery,
    ListTripsQueryVariables
  >(listTrips, {
    variables: {
      limit: 26,
    },
  });

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
  const totalAmount = totalTrips.reduce(
    (acc: any, distance: {trip_cost: any}) => acc + distance.trip_cost,
    0,
  );
  const totalCashTrip = totalTrips.reduce(
    (acc: number, o: {trip_cost: string}) => acc + parseFloat(o.trip_cost),
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
    <View
      style={{
        flex: 1,
        marginHorizontal: SIZES.radius,
      }}>
      {totalTrips.length > 0 ? (
        <FlatList
          data={totalTrips}
          refreshControl={
            <RefreshControl
              tintColor={COLORS.gradient2}
              refreshing={loading}
              onRefresh={refetch}
            />
          }
          ListHeaderComponent={
            <DailyTableData
              currentDay={currentDay}
              onlineHours={timeConvert(onlineHours)}
              totalAmount={totalAmount.toFixed(2)}
              totalMiles={totalDistance.toFixed(2)}
              totalCashTrip={totalCashTrip.toFixed(2)}
              dailyDelivery={totalTrips.length}
            />
          }
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}: any) => {
            return (
              <View key={index}>
                <DailyImage
                  name={item?.user_name}
                  userImage={item?.user_photo}
                  amount={parseFloat(item?.trip_cost).toFixed(2)}
                />
              </View>
            );
          }}
          ListFooterComponent={<View style={{marginBottom: 200}} />}
        />
      ) : (
        <View
          style={{
            backgroundColor: appTheme.tabBackgroundColor,
            padding: SIZES.margin,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h3,
              textAlign: 'center',
              color: appTheme.textColor,
            }}>
            No activity today
          </Text>
          <Text
            style={{
              paddingTop: SIZES.radius,
              ...FONTS.body2,
              textAlign: 'center',
            }}>
            You haven't made any returns today, go online and begin accepting
            request
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

export default connect(mapStateToProps)(Daily);
