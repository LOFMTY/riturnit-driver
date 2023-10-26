import {ActivityIndicator, View} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/client';

import {TopHeader, TextButton, CancelTripOption} from '../../components';
import {FONTS, COLORS, SIZES, constants} from '../../constants';
import {MapStackNavigatorParamList} from '../../type/navigation';
import {useTripContext} from '../../context/TripContext';
import {TripStatus} from '../../models';
import {listRiturnitCancelTripReasons} from '../../queries/Home/TripQueries';
import {
  ListDriverSystemNotificationsQueryVariables,
  ListRiturnitCancelTripReasonsQuery,
} from '../../API';

const cancelTripsOptions = constants.cancelTrips;

const CancelTrip = ({appTheme}: any) => {
  const navigation = useNavigation<MapStackNavigatorParamList>();

  const [selectedOption, setSelectedOption] = useState<any>(true);
  const {setDeliveryStatus} = useTripContext();

  const {loading, data, error} = useQuery<
    ListRiturnitCancelTripReasonsQuery,
    ListDriverSystemNotificationsQueryVariables
  >(listRiturnitCancelTripReasons, {pollInterval: 20});

  const listReasons = data?.listRiturnitCancelTripReasons?.items.filter(
    item => !item?._deleted,
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
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Cancel Trip" titleStyle={{top: 2}} />

      <View
        style={{
          marginTop: SIZES.margin,
        }}>
        {cancelTripsOptions.map((item, index) => {
          return (
            <CancelTripOption
              key={`CancelTripOption-${item.id}`}
              tripText={item?.label}
              isSelected={
                `${selectedOption?.key}-${selectedOption?.id}` ==
                `CancelTripOption-${item.id}`
              }
              onPress={() =>
                setSelectedOption(
                  {...item, key: 'CancelTripOption'},
                  // console.log('item pressed', item.label),
                )
              }
            />
          );
        })}
      </View>

      <TextButton
        label={selectedOption?.id == 5 ? 'Next' : 'Done'}
        labelStyle={{...FONTS.h4, color: COLORS.white}}
        buttonContainerStyle={{
          height: 50,
          width: 270,
          alignSelf: 'center',
          marginTop: 150,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.gradient2,
        }}
        // onPress={() => navigation.goBack()}
        onPress={() => {
          if (selectedOption?.id == 5) {
            navigation.navigate('CancelTripReason');
          } else {
            setDeliveryStatus(TripStatus.NEW);
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: 'HomeScreen',
                    params: {selectedOption: selectedOption?.label},
                  },
                ],
              }),
            );
          }
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

export default connect(mapStateToProps)(CancelTrip);
