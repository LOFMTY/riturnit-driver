import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {v4 as uuidV4} from 'uuid';
import {Storage} from 'aws-amplify';
import Spinner from 'react-native-loading-spinner-overlay';

import {WelcomeTabs, TextButton} from '../../components';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import AuthLayout from '../../components/AuthLayout';
import {DriverRegistrationNavigationParamList} from '../../type/navigation';
import {useAuthContext} from '../../context/AuthContext';
import {
  CreateDriverMutation,
  CreateDriverMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  DriverRegistrationStatus,
  CreateDriverInput,
} from '../../API';
import {createDriver, getUser} from '../../queries/Profile/DriverQueries';

const WelcomeRegistration = () => {
  const navigation = useNavigation<DriverRegistrationNavigationParamList>();
  const route = useRoute<any>();

  const {userID} = useAuthContext();

  const [driverPhotoCheck, setDriverPhotoCheck] = useState(null);
  const [driverLicense, setDriverLicense] = useState(null);
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [insurance, setInsurance] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function isValid() {
    return (
      driverPhotoCheck !== null &&
      vehicleInfo !== null &&
      driverLicense !== null &&
      insurance !== null
    );
  }

  // GET DRIVER DETAILS
  const {loading, error, data} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {
      variables: {id: userID},
    },
  );
  const driverAccount: any = data?.getUser;

  // Driver Photo Check
  useEffect(() => {
    let unmounted = false;
    if (route.params?.driverPhoto) {
      const {driverPhoto} = route.params;
      setDriverPhotoCheck(driverPhoto);
    }
    return () => {
      unmounted = true;
    };
  }, [route.params?.driverPhoto]);

  // Driver License
  useEffect(() => {
    let unmounted = false;
    if (route.params?.license) {
      const {license} = route.params;
      setDriverLicense(license);
    }
    return () => {
      unmounted = true;
    };
  }, [route.params?.license]);

  // Driver Vechicle Registration
  useEffect(() => {
    let unmounted = false;
    if (route.params?.vehicleReg) {
      const {vehicleReg} = route.params;
      setVehicleInfo(vehicleReg);
    }
    return () => {
      unmounted = true;
    };
  }, [route.params?.vehicleReg]);

  // Vehicle Insurance
  useEffect(() => {
    let unmounted = false;
    if (route.params?.insure) {
      const {insure} = route.params;
      setInsurance(insure);
    }
    return () => {
      unmounted = true;
    };
  }, [route.params?.insure]);

  // CREATE DRIVER DETAILS
  const [doCreateDriver, {error: onError, loading: onLoad}] = useMutation<
    CreateDriverMutation,
    CreateDriverMutationVariables
  >(createDriver);

  const onSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const input: CreateDriverInput = {
        id: userID,
        name: driverAccount?.name,
        inviteCode: driverAccount?.inviteCode,
        email: driverAccount?.email,
        phone_number: driverAccount?.phone_number,
        verificationStatus: DriverRegistrationStatus.NEW,
        image: driverPhotoCheck,
      };
      if (driverPhotoCheck) {
        input.image = await uploadMedia(driverPhotoCheck);
      }
      const res = await doCreateDriver({
        variables: {
          input,
        },
      });

      // console.log('CREATE DRIVER', res);
      navigation.replace('RegistrationComplete');
    } catch (error) {
      Alert.alert((error as Error).message);
      setIsSubmitting(false);
    }
  };

  // UPLOAD IMAGE OF USER
  const uploadMedia = async (uri: string) => {
    try {
      // get the Blob of the file from uri
      const response = await fetch(uri);
      const blob = await response.blob();

      // file extension splitting
      const uriParts = uri.split('.');
      const extension = uriParts[uriParts.length - 1];

      // upload file (blob) to s3
      const s3Response = await Storage.put(`${uuidV4()}.${extension}`, blob);
      return s3Response.key;
    } catch (error) {
      Alert.alert('Error uploading the file', (error as Error).message);
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

  if (error || onError) {
    Alert.alert('Network Error, something went wrong. Please try again.');
  }

  return (
    <AuthLayout
      topHeader={false}
      title={`Welcome, ${driverAccount?.name}`}
      subtitle="Here’s what you need to do to setup your account."
      titleStyle={{
        ...FONTS.h2,
      }}
      subtitleStyle={{
        paddingHorizontal: SIZES.padding,
        color: COLORS.grey,
        ...FONTS.body2,
      }}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? SIZES.padding * 1.5 : SIZES.padding,
      }}
      contentContainerStyle={{marginTop: 20, justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          marginTop:
            SIZES.height > 700 ? SIZES.padding * 2 : SIZES.padding * 1.5,
          marginHorizontal: SIZES.base,
        }}>
        <Spinner
          visible={isSubmitting}
          animation={'fade'}
          overlayColor={'rgba(0,0,0,0.5)'}
        />
        <WelcomeTabs
          iconType={icons.receipt}
          title={"Virtual drivers' test"}
          text={true}
          subText={'Recommended next step'}
          subTextStyle={{color: COLORS.gradient1}}
          onPress={() => navigation.navigate('DriverTest')}
          containerStyle={{
            borderTopLeftRadius: SIZES.radius,
            borderTopRightRadius: SIZES.radius,
            borderWidth: 0.3,
            borderColor: COLORS.lightGray5,
          }}
        />
        {/* DRIVER PHOTO UPLOAD */}
        <WelcomeTabs
          iconType={icons.receipt}
          checked={driverPhotoCheck === null ? icons.right : icons.check}
          title={"Driver's Photo"}
          text={true}
          subText={driverPhotoCheck ? 'Completed' : 'Attention needed'}
          subTextStyle={{
            color: driverPhotoCheck ? COLORS.caribbeanGreen : COLORS.red,
          }}
          containerStyle={{
            borderWidth: 0.3,
            borderColor: COLORS.lightGray5,
          }}
          onPress={() => navigation.navigate('TakeDriverPhoto')}
        />
        {/* DRIVER LICENSE UPLOAD */}
        <WelcomeTabs
          iconType={icons.receipt}
          checked={driverLicense === null ? icons.right : icons.check}
          title={'Driver’s License'}
          text={true}
          subText={driverLicense ? 'Completed' : 'Attention needed'}
          subTextStyle={{
            color: driverLicense ? COLORS.caribbeanGreen : COLORS.red,
          }}
          containerStyle={{
            borderWidth: 0.3,
            borderColor: COLORS.lightGray5,
          }}
          onPress={() => navigation.navigate('DriverLicense')}
        />
        {/* DRIVER REGISTRATION UPLOAD */}
        <WelcomeTabs
          iconType={icons.receipt}
          checked={vehicleInfo === null ? icons.right : icons.check}
          title={'Vehicle Registration'}
          text={true}
          subText={vehicleInfo ? 'Completed' : 'Attention needed'}
          subTextStyle={{
            color: vehicleInfo ? COLORS.caribbeanGreen : COLORS.red,
          }}
          containerStyle={{
            borderWidth: 0.3,
            borderColor: COLORS.lightGray5,
          }}
          onPress={() => navigation.navigate('VehicleRegistration')}
        />
        {/* DRIVER INSURANCE UPLOAD */}
        <WelcomeTabs
          iconType={icons.receipt}
          checked={insurance === null ? icons.right : icons.check}
          title={'Insurance Documents'}
          text={true}
          subText={insurance ? 'Completed' : 'Attention needed'}
          subTextStyle={{
            color: insurance ? COLORS.caribbeanGreen : COLORS.red,
          }}
          containerStyle={{
            borderWidth: 0.3,
            borderColor: COLORS.lightGray5,
            borderBottomLeftRadius: SIZES.radius,
            borderBottomRightRadius: SIZES.radius,
          }}
          onPress={() => navigation.navigate('VehicleInsurance')}
        />
        {/* Next Button */}
        <TextButton
          disabled={!isValid()}
          label={isSubmitting ? 'Loading...' : 'Save'}
          labelStyle={{color: COLORS.white, ...FONTS.h5}}
          buttonContainerStyle={{
            height: 45,
            width: 300,
            marginTop: 30,
            backgroundColor: !isValid() ? COLORS.gray : COLORS.gradient2,
          }}
          onPress={onSubmit}
        />
      </View>
    </AuthLayout>
  );
};

export default WelcomeRegistration;
