import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory-native';
import dayjs from 'dayjs';

import {FONTS, SIZES, COLORS} from '../../constants';
import {listTrips} from '../../queries/Home/TripQueries';
import {ListTripsQuery, ListTripsQueryVariables} from '../../API';
import {useQuery} from '@apollo/client';
import {useAuthContext} from '../../context/AuthContext';

const WeeklyTableData = ({appTheme}: any) => {
  const {userID} = useAuthContext();

  const [selectedWeek, setSelectedWeek] = useState('');
  const [totalSpending, setTotalSpending] = useState<any>(0);

  let startOfWeek = dayjs().startOf('week').toDate().toDateString();
  let endOfWeek = dayjs().endOf('week').toDate().toDateString();

  const startWeek = dayjs().startOf('week').toDate().toISOString();
  const endWeek = dayjs().endOf('week').toDate().toISOString();

  // LIST ALL TRIPS
  const {loading, data} = useQuery<ListTripsQuery, ListTripsQueryVariables>(
    listTrips,
  );

  const allTrips: any =
    data?.listTrips?.items
      .filter(tripStatus => tripStatus?.trip_status?.startsWith('COMPLETED'))
      .filter(userId => userId?.tripsDriverId === userID)
      .filter(sw => sw?.updatedAt! >= startWeek && sw?.updatedAt! <= endWeek)
      .filter(trips => !trips?._deleted) || [];

  // Create new array for trips with DATE & COST
  const updateTotalTrips = allTrips.map(({updatedAt, trip_cost}: any) => ({
    updatedAt,
    trip_cost,
  }));

  // NEW ARRAY WITH DATE & COST AGGREGATION
  const aggregatedData: any = {};
  updateTotalTrips.forEach((item: any) => {
    const date = new Date(item.updatedAt);
    const dayOfWeek = date.getDay(); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday

    if (!aggregatedData[dayOfWeek]) {
      aggregatedData[dayOfWeek] = 0;
    }
    aggregatedData[dayOfWeek] += item.trip_cost;
  });

  const chartData = Object.keys(aggregatedData).map(dayOfWeek => {
    return {x: dayOfWeek, y: aggregatedData[dayOfWeek]};
  });

  // TOTAL DISTANCE
  const totalDistance = allTrips.reduce(
    (acc: number, o: {distance: string}) => acc + parseFloat(o.distance),
    0,
  );

  // ONLINE HOURS
  const onlineHours = allTrips.reduce(
    (acc: any, duration: {duration: any}) => acc + duration.duration,
    0,
  );

  useEffect(() => {
    let unmounted = false;
    if (selectedWeek == '') {
      // Calculate total spending
      let total = updateTotalTrips.reduce(
        (acc: any, distance: {trip_cost: any}) => acc + distance.trip_cost,
        0,
      );
      setTotalSpending(total);
    }
    return () => {
      unmounted = true;
    };
  }, [selectedWeek]);

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
        backgroundColor: appTheme.tabBackgroundColor,
        borderRadius: SIZES.margin,
        padding: SIZES.margin,
        marginBottom: SIZES.radius,
      }}>
      <Text
        style={{
          ...FONTS.h6,
          textAlign: 'center',
          color: appTheme.textColor,
        }}>
        {`${startOfWeek}`} - {`${endOfWeek}`}
      </Text>

      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.caribbeanGreen,
          textAlign: 'center',
          fontWeight: '900',
          letterSpacing: 1,
          paddingTop: SIZES.radius,
        }}>
        ${parseFloat(totalSpending).toFixed(2)}
      </Text>

      <View style={{alignSelf: 'center', paddingTop: SIZES.radius}}>
        <VictoryChart
          padding={35}
          width={SIZES.width - SIZES.padding * 2.5}
          height={SIZES.height / 3.5}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({datum}) => `$${parseFloat(datum.y).toFixed(2)}`}
              labelComponent={
                <VictoryTooltip
                  flyoutWidth={70}
                  style={{
                    fill: COLORS.gradient2,
                    fontWeight: '500',
                    letterSpacing: 0.3,
                    fontSize: SIZES.h4,
                  }}
                />
              }
            />
          }>
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5, 6]}
            tickFormat={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            style={{
              axis: {stroke: 'transparent'},
              tickLabels: {
                ...FONTS.h6,
                fill: appTheme.buttonText,
              },
            }}
          />

          <VictoryBar
            animate={{duration: 70}}
            barRatio={0.8}
            barWidth={30}
            cornerRadius={{
              top: SIZES.radius,
            }}
            style={{
              data: {
                fill: ({datum}) =>
                  datum.x === selectedWeek
                    ? COLORS.gradient2
                    : COLORS.gainsboro,
              },
            }}
            data={chartData}
            // x="updatedAt" y="trip_cost"
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPressIn: (event, data) => {
                    setSelectedWeek(
                      selectedWeek != parseFloat(data.datum.x).toFixed(2)
                        ? parseFloat(data.datum.x).toFixed(2)
                        : '',
                    );
                    setTotalSpending(
                      selectedWeek != parseFloat(data.datum.x).toFixed(2)
                        ? parseFloat(data.datum.y).toFixed(2)
                        : 0,
                    );
                  },
                },
              },
            ]}
          />
        </VictoryChart>
      </View>

      {/* Horizontal Rule */}
      <View
        style={{
          marginTop: SIZES.base,
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
            {allTrips.length}
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
            {parseFloat(totalDistance).toFixed(2)}
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
            {parseFloat(onlineHours).toFixed(2)}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: appTheme.buttonText,
              paddingTop: 4,
              ...FONTS.body3,
            }}>
            Total Hours
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

export default connect(mapStateToProps)(WeeklyTableData);
