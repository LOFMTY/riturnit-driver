import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
import {useMutation} from '@apollo/client';

import {TextButton} from '../../components';
import {FONTS, SIZES, COLORS, images} from '../../constants';
import UploadProfilePhotoModal from '../Setting/Profile/UploadProfilePhotoModal';
import AuthLayout from '../../components/AuthLayout';
import {useAuthContext} from '../../context/AuthContext';
import {
  CreateRegistrationDocumentMutation,
  CreateRegistrationDocumentMutationVariables,
} from '../../API';
import {createRegistrationDocument} from '../../queries/Document/DocumentQueries';
import {VEH_REG_IMG} from '../../utilities/Utils';

const TakeDriverLicensePhoto = () => {
  const navigation = useNavigation<any>();

  const {userID} = useAuthContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<any | Asset>(null);
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const selectedDate = dayjs(date).format('DD, MMMM, YYYY');
    setDate(selectedDate);
    hideDatePicker();
  };

  function handleContinue() {
    return date != '' && selectedPhoto?.uri != null;
  }

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

  // CREATE DRIVER REGISTRATION
  const [doCreateRegistrationDocument, {error}] = useMutation<
    CreateRegistrationDocumentMutation,
    CreateRegistrationDocumentMutationVariables
  >(createRegistrationDocument);

  const onSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await doCreateRegistrationDocument({
        variables: {
          input: {
            name: 'Vehicle Registration',
            image: selectedPhoto?.uri,
            expiry_date: date,
            driverID: userID,
          },
        },
      });
      // console.log('CREATE REGISTRATION DOCUMENT', res);
      navigation.navigate({
        name: 'WelcomeRegistration',
        params: {vehicleReg: selectedPhoto?.uri},
        merge: true,
      });
    } catch (error) {
      Alert.alert((error as Error).message);
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      topHeader={true}
      headerTitle="Vehicle Registration"
      contentContainerStyle={{marginTop: -140, justifyContent: 'center'}}>
      {showUploadPhotoModal && (
        <UploadProfilePhotoModal
          library={onChangePhoto}
          camera={onCameraPress}
          isVisible={showUploadPhotoModal}
          onClose={() => setShowUploadPhotoModal(false)}
        />
      )}
      <Spinner
        visible={isSubmitting}
        animation={'fade'}
        overlayColor={'rgba(0,0,0,0.5)'}
      />

      {/* Text Header */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{...FONTS.h4, textAlign: 'center', lineHeight: 22}}>
          Take a photo of your Vehicle Registration
        </Text>
      </View>

      {/* Paragraph 1 */}
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.body3, textAlign: 'center'}}>
          Make sure your vehicle’s make, model, year, license plate, VIN, and
          expiration are clear and visible
        </Text>
      </View>

      {/* Vehicle Registration Image */}
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
        }}>
        <Image
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: selectedPhoto?.uri || VEH_REG_IMG}}
          style={{
            width: 300,
            height: 300,
          }}
        />
        <TouchableOpacity onPress={() => setShowUploadPhotoModal(true)}>
          <FastImage
            source={images.upload}
            style={{
              width: 45,
              height: 45,
              top: -20,
              left: 130,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Date Picker */}
      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Choose birth date button */}
        <TextButton
          label="Select expiry date"
          buttonContainerStyle={{
            marginLeft: 20,
            padding: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h6,
          }}
          onPress={showDatePicker}
        />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h5, color: COLORS.black}}>{date}</Text>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* Next Button */}
      <TextButton
        disabled={handleContinue() ? false : true}
        label={isSubmitting ? 'Saving...' : 'Save'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
          width: 300,
          marginTop: SIZES.height > 700 ? 50 : SIZES.padding,
          backgroundColor: handleContinue() ? COLORS.gradient2 : COLORS.gray,
        }}
        onPress={onSubmit}
      />
    </AuthLayout>
  );
};

export default TakeDriverLicensePhoto;
