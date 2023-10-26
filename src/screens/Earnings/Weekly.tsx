import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import {useQuery} from '@apollo/client';

import {SIZES, FONTS} from '../../constants';
import {WeeklyTableData} from '../../components';
import {ListTripsQuery, ListTripsQueryVariables} from '../../API';
import {listTrips} from '../../queries/Home/TripQueries';
import {useAuthContext} from '../../context/AuthContext';

const Weekly = ({appTheme}: any) => {
  const {userID} = useAuthContext();

  const startOfWeek = dayjs().startOf('week').toDate().toISOString();
  const endOfWeek = dayjs().endOf('week').toDate().toISOString();

  // LIST ALL TRIPS
  const {data} = useQuery<ListTripsQuery, ListTripsQueryVariables>(listTrips);

  const totalTrips: any =
    data?.listTrips?.items
      .filter(tripStatus => tripStatus?.trip_status?.startsWith('COMPLETED'))
      .filter(userId => userId?.tripsDriverId === userID)
      .filter(
        sw => sw?.updatedAt! >= startOfWeek && sw?.updatedAt! <= endOfWeek,
      )
      .filter(trips => !trips?._deleted) || [];

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SIZES.radius,
        height: 100000,
      }}>
      {totalTrips.length > 0 ? (
        <WeeklyTableData />
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
            You haven't made any returns this week, go online and begin
            accepting request
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

export default connect(mapStateToProps)(Weekly);
