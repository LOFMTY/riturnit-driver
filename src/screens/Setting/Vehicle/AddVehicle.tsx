import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useMutation} from '@apollo/client';

import {SIZES, FONTS} from '../../../constants';
import {
  TextButton,
  AddVehicleTermsPolicy,
  TopHeader,
  FormInput,
} from '../../../components';
import {CreateCarMutation, CreateCarMutationVariables} from '../../../API';
import {createCar} from '../../../queries/Vehicle/VehicleQueries';
import {useAuthContext} from '../../../context/AuthContext';

type CarData = {
  carBrand: string;
  carModel: string;
  carYear: number;
  licensePlate: string;
  carColor: string;
  carType: any;
};

const AddVehicle = ({appTheme}: any) => {
  const navigation = useNavigation<any>();

  const {userID} = useAuthContext();

  const {control, handleSubmit} = useForm<CarData>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [doCreateCar] = useMutation<
    CreateCarMutation,
    CreateCarMutationVariables
  >(createCar);

  const onSubmit = async ({
    carColor,
    carBrand,
    carYear,
    carModel,
    licensePlate,
  }: CarData) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await doCreateCar({
        variables: {
          input: {
            driverID: userID,
            color: carColor,
            make: carBrand,
            model: carModel,
            plate_number: licensePlate,
            year: carYear,
          },
        },
      });
      navigation.navigate('Vehicles');
    } catch (error) {
      Alert.alert((error as Error).message);
      setIsSubmitting(false);
    }
  };

  function renderFormSection() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.margin,
        }}>
        {/* Vehicle Brand */}
        <FormInput
          name="carBrand"
          control={control}
          rules={{
            required: 'Car brand is required',
          }}
          placeholder="Car Brand e.g. Honda"
          placeholderTextColor={appTheme.inputColor}
          inputStyle={{color: appTheme.textColor}}
          inputContainerStyle={{
            marginTop: -10,
            height: 55,
            backgroundColor: appTheme.tabBackgroundColor,
            borderColor: null,
            borderWidth: 0,
          }}
        />

        {/* Vehicle Model */}
        <FormInput
          name="carModel"
          control={control}
          rules={{
            required: 'Car Model is required',
          }}
          placeholder="Car Model e.g. Accord"
          placeholderTextColor={appTheme.inputColor}
          inputStyle={{color: appTheme.textColor}}
          inputContainerStyle={{
            marginTop: -5,
            height: 55,
            backgroundColor: appTheme.tabBackgroundColor,
            borderColor: null,
            color: appTheme.textColor,
            borderWidth: 0,
          }}
        />

        {/* Year of Production */}
        <FormInput
          name="carYear"
          control={control}
          rules={{
            required: 'Car year is required',
          }}
          placeholder="Year e.g. 2015"
          keyboardType="numeric"
          placeholderTextColor={appTheme.inputColor}
          inputStyle={{color: appTheme.textColor}}
          inputContainerStyle={{
            marginTop: -5,
            height: 55,
            backgroundColor: appTheme.tabBackgroundColor,
            borderColor: null,
            borderWidth: 0,
          }}
        />

        {/* license plate */}
        <FormInput
          name="licensePlate"
          control={control}
          rules={{
            required: 'License plate is required',
          }}
          placeholder="license plate e.g. ABC124XY"
          placeholderTextColor={appTheme.inputColor}
          inputStyle={{color: appTheme.textColor}}
          inputContainerStyle={{
            marginTop: -5,
            height: 55,
            backgroundColor: appTheme.tabBackgroundColor,
            borderColor: null,
            borderWidth: 0,
          }}
        />

        {/* Vehicle Color */}
        <FormInput
          name="carColor"
          control={control}
          rules={{
            required: 'Car color is required',
          }}
          placeholder="Car color e.g. blue"
          placeholderTextColor={appTheme.inputColor}
          inputStyle={{color: appTheme.textColor}}
          inputContainerStyle={{
            marginTop: -5,
            height: 55,
            backgroundColor: appTheme.tabBackgroundColor,
            borderColor: null,
            borderWidth: 0,
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Add Vehicle" />

      <KeyboardAwareScrollView keyboardDismissMode="on-drag" extraHeight={150}>
        <View
          style={{
            margin: SIZES.margin,
          }}>
          <Text style={{...FONTS.h4, color: appTheme.textColor}}>
            Vehicle requirements
          </Text>

          <Text
            style={{
              paddingTop: SIZES.radius,
              ...FONTS.body3,
              color: appTheme.textColor,
            }}>
            To drive with Riturnit, you must have a car that is newer than 2010,
            has at least two doors, and is not salvaged.
          </Text>
        </View>

        {renderFormSection()}

        <AddVehicleTermsPolicy />

        <TextButton
          label={isSubmitting ? 'Saving...' : 'Save'}
          labelStyle={{...FONTS.h5, color: 'white'}}
          buttonContainerStyle={{
            height: 45,
            width: 300,
            alignSelf: 'center',
            marginTop: SIZES.padding * 1.2,
            marginBottom: 100,
          }}
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AddVehicle);
