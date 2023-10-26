import {useState, useEffect} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import {Storage} from 'aws-amplify';
import {v4 as uuidV4} from 'uuid';
import {useMutation, useQuery} from '@apollo/client';

import UploadProfilePhotoModal from './UploadProfilePhotoModal';
import {COLORS, SIZES, FONTS} from '../../../constants';
import {
  TopHeader,
  TextButton,
  CustomInput,
  ProfilePhoto,
} from '../../../components';
import {IEditableDriver} from '../../../components/Others/CustomInput';
import {SettingsStackNavigatorParamList} from '../../../type/navigation';
import {useAuthContext} from '../../../context/AuthContext';
import {
  GetDriverQuery,
  GetDriverQueryVariables,
  UpdateDriverInput,
  UpdateDriverMutation,
  UpdateDriverMutationVariables,
  ListTripsQuery,
  ListTripsQueryVariables,
  RatingsByDriverIDQuery,
  RatingsByDriverIDQueryVariables,
} from '../../../API';
import {
  getDriver,
  ratingsByDriverID,
  updateDriver,
} from '../../../queries/Profile/DriverQueries';
import {listTrips} from '../../../queries/Home/TripQueries';

const Profile = ({appTheme}: any) => {
  const navigation = useNavigation<SettingsStackNavigatorParamList>();

  const {userID} = useAuthContext();

  const [selectedPhoto, setSelectedPhoto] = useState<any | Asset>(null);
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);
  const [load, setLoad] = useState(false);

  const {control, handleSubmit, setValue} = useForm<IEditableDriver>();

  // LIST ALL TRIPS
  const {loading: newLoad, data: newData} = useQuery<
    ListTripsQuery,
    ListTripsQueryVariables
  >(listTrips, {pollInterval: 20});

  const fetchTrips: any =
    newData?.listTrips?.items
      .filter(tripStatus => tripStatus?.trip_status?.startsWith('COMPLETED'))
      .filter(userId => userId?.tripsDriverId === userID)
      .filter(trips => !trips?._deleted) || [];

  const totalDistance = fetchTrips.reduce(
    (acc: number, o: {distance: string}) => acc + parseInt(o.distance),
    0,
  );

  // UPDATE DRIVER DETAILS - RATING
  const {data: driverData} = useQuery<
    RatingsByDriverIDQuery,
    RatingsByDriverIDQueryVariables
  >(ratingsByDriverID, {
    variables: {driverID: userID},
    pollInterval: 300,
  });

  // FIND AVERAGE RATINGS
  const averageRatings =
    driverData?.ratingsByDriverID?.items.filter(item => !item?._deleted) || [];

  const findAverageAge = (arr: any[] | undefined) => {
    return arr?.reduce((acc, val) => {
      return acc + val?.rating / averageRatings?.length;
    }, 0);
  };
  let driverRatings = findAverageAge(averageRatings);

  // GET DRIVER DETAILS
  const {data, loading: onLoad} = useQuery<
    GetDriverQuery,
    GetDriverQueryVariables
  >(getDriver, {
    variables: {
      id: userID,
    },
  });
  const driverDetail: any = data?.getDriver;

  useEffect(() => {
    let unmounted = false;
    if (driverDetail) {
      setValue('name', driverDetail?.name);
      setValue('email', driverDetail?.email);
      setValue('phone_number', driverDetail?.phone_number);
    }
    return () => {
      unmounted = true;
    };
  }, [driverDetail, setValue]);

  // console.log('driver', driverDetail);

  // UPDATE DRIVER DETAILS
  const [doUpdateDriver, {loading}] = useMutation<
    UpdateDriverMutation,
    UpdateDriverMutationVariables
  >(updateDriver);

  const storeData = async (formData: IEditableDriver) => {
    if (load) {
      return;
    }
    setLoad(true);

    try {
      const input: UpdateDriverInput = {
        id: userID,
        ...formData,
        _version: driverDetail?._version,
      };
      if (selectedPhoto?.uri) {
        input.image = await uploadMedia(selectedPhoto.uri);
      }
      const res = await doUpdateDriver({
        variables: {
          input,
        },
      });
      // console.log('updated driver', res);
      navigation.navigate('Home');
    } finally {
      setLoad(false);
    }
  };

  // UPLOAD IMAGE OF DRIVER
  const uploadMedia = async (uri: string) => {
    if (load) {
      return;
    }
    setLoad(true);
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
    } finally {
      setLoad(false);
    }
  };

  // UPLOAD VIA GALLERY
  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 0.5, selectionLimit: 1},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  // UPLOAD VIA CAMERA
  const onCameraPress = () => {
    launchCamera(
      {mediaType: 'photo', quality: 0.5},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  if (loading || onLoad || newLoad) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  function renderFormSection() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.margin,
          marginTop: SIZES.padding * 5,
        }}>
        {/* Full Name */}
        <CustomInput
          control={control}
          label="Full name"
          name="name"
          rules={{
            required: 'Full name is required',
            minLength: {
              value: 3,
              message: 'names should be more than 5 characters',
            },
          }}
          textInputStyle={{backgroundColor: COLORS.white}}
          keyboardType={'default'}
        />

        {/* Phone Number */}
        <CustomInput
          control={control}
          label="Mobile number"
          name="phone_number"
          rules={{required: 'Mobile number is required'}}
          keyboardType={'phone-pad'}
          editable={false}
          textInputStyle={{color: appTheme.buttonText}}
        />

        {/* email address */}
        <CustomInput
          control={control}
          label="Email"
          name="email"
          editable={false}
          textInputStyle={{color: appTheme.buttonText}}
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
      <Spinner
        visible={load}
        animation={'fade'}
        overlayColor={'rgba(0,0,0,0.5)'}
      />
      <TopHeader title="Profile" />

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraHeight={200}
        contentContainerStyle={{flex: 1}}>
        {/* Profile Photo */}
        <ProfilePhoto
          onPress={() => setShowUploadPhotoModal(true)}
          profileName={driverDetail?.name}
          driverImage={selectedPhoto?.uri || driverDetail?.image}
          driverRating={parseFloat(driverRatings).toFixed(1) || 0}
          distance={totalDistance.toFixed(2) || 0}
          totalTrips={fetchTrips.length || 0}
        />
        {showUploadPhotoModal && (
          <UploadProfilePhotoModal
            library={onChangePhoto}
            camera={onCameraPress}
            isVisible={showUploadPhotoModal}
            onClose={() => setShowUploadPhotoModal(false)}
          />
        )}
        {renderFormSection()}
        <TextButton
          label={load ? 'Updating...' : 'Update'}
          labelStyle={{color: COLORS.white, ...FONTS.h5}}
          buttonContainerStyle={{
            height: 45,
            width: 300,
            marginTop: SIZES.height > 700 ? SIZES.padding : SIZES.margin,
            backgroundColor: COLORS.gradient2,
          }}
          onPress={handleSubmit(storeData)}
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

export default connect(mapStateToProps)(Profile);
