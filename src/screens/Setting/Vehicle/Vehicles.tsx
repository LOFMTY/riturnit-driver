import {View, Text, ActivityIndicator, FlatList, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {useQuery} from '@apollo/client';

import {VehicleTabs, TopHeader, TextButton} from '../../../components';
import {SIZES, FONTS, COLORS} from '../../../constants';
import {ListCarsQuery, ListCarsQueryVariables} from '../../../API';
import {SettingsStackNavigatorParamList} from '../../../type/navigation';
import {useTripContext} from '../../../context/TripContext';
import {listCars} from '../../../queries/Vehicle/VehicleQueries';
import {useAuthContext} from '../../../context/AuthContext';
import {ALERT_TYPE, Root, Toast} from 'react-native-alert-notification';

const Vehicles = ({appTheme}: any) => {
  const navigation = useNavigation<SettingsStackNavigatorParamList>();
  const {userID} = useAuthContext();

  const {
    selectedVehicle,
    setSelectedVehicle,
    loadSelectedCar,
    setCarSelection,
  } = useTripContext();

  const {loading, data} = useQuery<ListCarsQuery, ListCarsQueryVariables>(
    listCars,
    {pollInterval: 20},
  );

  const listOfCars =
    data?.listCars?.items
      .filter(item => !item?._deleted)
      .filter(driverId => driverId?.driverID === userID) || [];

  useEffect(() => {
    let unmounted = false;
    loadSelectedCar();

    return () => {
      unmounted = true;
    };
  }, [loading]);

  function selectCardHandler(item: any) {
    setSelectedVehicle(item);
    setCarSelection(item);
  }

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
    <Root>
      <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
        <TopHeader title="Vehicles" />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.base,
            // backgroundColor: appTheme.tabBackgroundColor,
          }}>
          <LottieView
            style={{width: 200, alignSelf: 'center'}}
            autoPlay
            speed={1.5}
            loop={true}
            source={require('../../../assets/json/addCar.json')}
          />

          <LottieView
            style={{height: 150, width: 150}}
            autoPlay
            speed={1.5}
            loop={true}
            source={require('../../../assets/json/car.json')}
          />
        </View>

        {/* list of vehicles */}
        <FlatList
          data={listOfCars}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{margin: SIZES.radius}}>
              <Text
                style={{
                  alignSelf: 'center',
                  ...FONTS.h4,
                  color: appTheme.textColor,
                }}>
                {listOfCars.length <= 0 && 'No current vehicle'}
              </Text>
            </View>
          }
          renderItem={(data: any) => {
            return (
              <VehicleTabs
                key={`MyCar-${data.item.id}`}
                car={data.item}
                isSelected={
                  `${selectedVehicle?.key}-${selectedVehicle?.id}` ==
                  `MyCar-${data.item.id}`
                }
                onPress={() => {
                  Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: `${data.item.make + ' ' + data.item.model} selected`,
                    titleStyle: {...FONTS.body3, fontWeight: '500'},
                    autoClose: 750,
                  });
                  selectCardHandler({...data.item, key: 'MyCar'});
                }}
              />
            );
          }}
          ListFooterComponent={
            <TextButton
              label={'Add a vehicle'}
              labelStyle={{color: COLORS.white, ...FONTS.h5}}
              buttonContainerStyle={{
                height: 45,
                width: 300,
                marginTop: SIZES.padding * 1.2,
              }}
              onPress={() => navigation.navigate('AddVehicle')}
            />
          }
        />
      </View>
    </Root>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(Vehicles);
