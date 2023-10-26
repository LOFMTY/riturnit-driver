import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {useMutation} from '@apollo/client';

import {SIZES, COLORS, FONTS, icons} from '../../constants';
import {Car, DeleteCarMutation, DeleteCarMutationVariables} from '../../API';
import {deleteCar} from '../../queries/Vehicle/VehicleQueries';
import {useTripContext} from '../../context/TripContext';

interface ICarProps {
  appTheme: any;
  car: Car | any;
  onPress: Function;
  isSelected: any;
}

const VehicleTabs = ({car, onPress, isSelected, appTheme}: ICarProps) => {
  const {clearAll} = useTripContext();

  const [doDeleteCar] = useMutation<
    DeleteCarMutation,
    DeleteCarMutationVariables
  >(deleteCar, {
    variables: {
      input: {
        id: car.id,
        _version: car._version,
      },
    },
  });

  const deleteItem = async (car: any) => {
    try {
      await doDeleteCar();
      clearAll();
    } catch (error) {
      Alert.alert('Failed to delete product', (error as Error).message);
    }
  };

  return (
    <View
      style={{
        marginHorizontal: SIZES.radius,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: SIZES.radius,
        borderRadius: SIZES.base,
        marginTop: SIZES.base,
        backgroundColor: appTheme.tabBackgroundColor,
      }}>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => onPress(car)}>
        <FastImage
          source={isSelected ? icons.check : icons.radioButton2}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            borderRadius: SIZES.padding * 8,
            borderColor: COLORS.gradient2,
          }}
        />
      </TouchableOpacity>
      <View style={{marginLeft: SIZES.radius, justifyContent: 'center'}}>
        <FastImage
          source={icons.dodge}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <TouchableOpacity
        style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}
        onPress={() => onPress(car)}>
        <Text style={{...FONTS.h6, color: appTheme.textColor}}>
          {car.make} {car.model} - {car.year}
        </Text>
        <Text
          style={{...FONTS.body4, color: appTheme.buttonText, paddingTop: 2}}>
          {car.plate_number} - {car.color}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{justifyContent: 'center'}} onPress={deleteItem}>
        <FastImage
          source={icons.bin}
          style={{
            width: 20,
            height: 20,
            alignSelf: 'center',
          }}
          tintColor={COLORS.red}
        />
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(VehicleTabs);
