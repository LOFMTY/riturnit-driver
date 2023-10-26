import React from 'react';
import {View, Text, ActivityIndicator, Alert} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {useQuery, useMutation} from '@apollo/client';

import {FONTS, COLORS, SIZES} from '../../constants';
import {
  TripDetailsHeader,
  TripDetailsAddress,
  TripCostDuration,
  TripTimeDate,
  TextButton,
} from '../../components';
import {MapStackNavigatorParamList} from '../../type/navigation';
import {useTripContext} from '../../context/TripContext';
import {
  GetTripsQuery,
  TripStatus,
  GetTripsQueryVariables,
  GetDriverQuery,
  GetDriverQueryVariables,
  UpdateDriverMutation,
  UpdateDriverMutationVariables,
  RatingsByDriverIDQuery,
  RatingsByDriverIDQueryVariables,
} from '../../API';
import {getTrips} from '../../queries/Home/TripQueries';
import {useAuthContext} from '../../context/AuthContext';
import {
  getDriver,
  ratingsByDriverID,
  updateDriver,
} from '../../queries/Profile/DriverQueries';

const TripDetails = ({appTheme}: any) => {
  const navigation = useNavigation<MapStackNavigatorParamList>();

  const dateObj = dayjs().format('MMMM DD, YYYY - hh:mma');

  const {userID} = useAuthContext();
  const {tripsId, setDeliveryStatus} = useTripContext();

  // GET TRIP INFO TO UPDATE
  const {data} = useQuery<GetTripsQuery, GetTripsQueryVariables>(getTrips, {
    variables: {id: tripsId},
  });
  const tripsIdInfo: any = data?.getTrips;

  // GET DRIVER DETAILS
  const {data: dataLoad} = useQuery<GetDriverQuery, GetDriverQueryVariables>(
    getDriver,
    {
      variables: {id: userID},
    },
  );
  const driverAccount = dataLoad?.getDriver;

  // GET DRIVER RATING
  const {data: driverData, loading} = useQuery<
    RatingsByDriverIDQuery,
    RatingsByDriverIDQueryVariables
  >(ratingsByDriverID, {
    variables: {driverID: userID},
    pollInterval: 20,
  });

  // FIND AVERAGE RATINGS
  const averageRatings = driverData?.ratingsByDriverID?.items;
  const findAverageAge = (arr: any) => {
    return arr?.reduce((acc: number, val: {rating: number}) => {
      return acc + val.rating / arr.length;
    }, 0);
  };
  let driverRatings = findAverageAge(averageRatings);

  // UPDATE DRIVER DETAILS
  const [doUpdateDriver, {loading: onLoad}] = useMutation<
    UpdateDriverMutation,
    UpdateDriverMutationVariables
  >(updateDriver);

  const updateDriverInfo = async () => {
    try {
      const res = await doUpdateDriver({
        variables: {
          input: {
            id: userID,
            rating: driverRatings,
            _version: driverAccount?._version,
          },
        },
      });
      // console.log('DRIVER RATING', res);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  if (loading || onLoad) {
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
      <TripDetailsHeader title="Trip Details" />
      <TripDetailsAddress
        dropOff={tripsIdInfo?.dropoff_location_description}
        pickUp={tripsIdInfo?.pickup_location_description}
      />

      {/* Return Complete image */}
      <View
        style={{
          justifyContent: 'center',
        }}>
        <LottieView
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
          }}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../assets/json/return_complete.json')}
        />
      </View>

      {/* Fare  */}
      <View
        style={{
          backgroundColor: appTheme.tabBackgroundColor,
          alignItems: 'center',
          padding: SIZES.radius,
        }}>
        <Text
          style={{
            textAlign: 'center',
            ...FONTS.extraLarge,
            color: COLORS.caribbeanGreen,
          }}>
          ${parseFloat(tripsIdInfo?.trip_cost).toFixed(2)}
        </Text>

        <TripCostDuration
          duration={parseFloat(tripsIdInfo?.duration).toFixed(2)}
          distance={parseFloat(tripsIdInfo?.distance).toFixed(2)}
        />

        {/* Time and Date */}
        <TripTimeDate dateTime={dateObj} />
      </View>

      <TextButton
        label={'Complete'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
          width: 300,
          marginTop: SIZES.padding,
          alignSelf: 'center',
          marginHorizontal: SIZES.radius,
          backgroundColor: COLORS.gradient2,
        }}
        onPress={() => {
          setDeliveryStatus(TripStatus.NEW);
          updateDriverInfo();
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'HomeScreen',
                },
              ],
            }),
          );
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

export default connect(mapStateToProps)(TripDetails);
