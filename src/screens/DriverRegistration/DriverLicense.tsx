import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
import {useMutation} from '@apollo/client';
import Spinner from 'react-native-loading-spinner-overlay';

import {TextButton} from '../../components';
import {FONTS, SIZES, COLORS, images} from '../../constants';
import UploadProfilePhotoModal from '../Setting/Profile/UploadProfilePhotoModal';
import AuthLayout from '../../components/AuthLayout';
import {useAuthContext} from '../../context/AuthContext';
import {
  CreateLicenseDocumentMutation,
  CreateLicenseDocumentMutationVariables,
} from '../../API';
import {createLicenseDocument} from '../../queries/Document/DocumentQueries';
import {LICENSE_IMG} from '../../utilities/Utils';

const TakeDriverLicensePhoto = () => {
  const navigation = useNavigation<any>();

  const {userID} = useAuthContext();

  const [selectedPhoto, setSelectedPhoto] = useState<any | Asset>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<any>('');

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

  // CREATE DRIVER LICENSE
  const [doCreateLicenseDocument, {error}] = useMutation<
    CreateLicenseDocumentMutation,
    CreateLicenseDocumentMutationVariables
  >(createLicenseDocument);

  const onSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await doCreateLicenseDocument({
        variables: {
          input: {
            name: 'Driver License',
            image: selectedPhoto?.uri,
            expiry_date: date,
            driverID: userID,
          },
        },
      });
      // console.log('CREATE LICENSE DOCUMENT', res);
      navigation.navigate({
        name: 'WelcomeRegistration',
        params: {license: selectedPhoto?.uri},
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
      headerTitle="Driver License"
      contentContainerStyle={{marginTop: -120, justifyContent: 'center'}}>
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
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.h4, textAlign: 'center', lineHeight: 30}}>
          Take a photo of your Driver’s License
        </Text>
      </View>

      {/* Paragraph 1 */}
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.body3, textAlign: 'center'}}>
          Make sure your Driver’s License is not expired and avoid using the
          flash so that your information is clear and visible.
        </Text>
      </View>

      {/* Diver License FastImage */}
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
        }}>
        <FastImage
          source={{uri: selectedPhoto?.uri || LICENSE_IMG}}
          resizeMode={FastImage.resizeMode.cover}
          style={{
            width: 330,
            height: 330,
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
            marginLeft: 10,
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
