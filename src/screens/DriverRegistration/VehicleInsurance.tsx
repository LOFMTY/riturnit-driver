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
  CreateInsuranceDocumentMutation,
  CreateInsuranceDocumentMutationVariables,
} from '../../API';
import {createInsuranceDocument} from '../../queries/Document/DocumentQueries';
import { INSURANCE_IMG } from '../../utilities/Utils';

const VehicleInsurance = () => {
  const navigation = useNavigation<any>();

  const {userID} = useAuthContext();

  const [selectedPhoto, setSelectedPhoto] = useState<any | Asset>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // CREATE DRIVER INSURANCE
  const [doCreateInsuranceDocument, {error}] = useMutation<
    CreateInsuranceDocumentMutation,
    CreateInsuranceDocumentMutationVariables
  >(createInsuranceDocument);

  const onSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await doCreateInsuranceDocument({
        variables: {
          input: {
            name: 'Vehicle Insurance',
            image: selectedPhoto?.uri,
            expiry_date: date,
            driverID: userID,
          },
        },
      });
      // console.log('CREATE REGISTRATION DOCUMENT', res);
      navigation.navigate({
        name: 'WelcomeRegistration',
        params: {insure: selectedPhoto?.uri},
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
        headerTitle="Vehicle Insurance"
        contentContainerStyle={{
          marginTop: -150,
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}>
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

        {/* Paragraph 1 */}
        <View>
          {/* Text Header */}
          <Text style={{...FONTS.h4, textAlign: 'center'}}>
            Take a photo of your Vehicle Insurance
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              lineHeight: 20,
              textAlign: 'center',
              marginTop: SIZES.padding,
            }}>
            Make sure your name, VIN, insurance company,and expiration date are
            clear and visible.
          </Text>
        </View>

        {/* Vehicle Insurance Image */}
        <View
          style={{
            alignItems: 'center',
            borderRadius: SIZES.radius,
            marginTop: SIZES.padding,
          }}>
          <FastImage
            source={{uri: selectedPhoto?.uri || INSURANCE_IMG}}
            resizeMode={FastImage.resizeMode.cover}
            style={{
              width: 330,
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
              marginLeft: SIZES.margin,
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
            marginTop: SIZES.height > 700 ? 40 : SIZES.padding,
            backgroundColor: handleContinue() ? COLORS.gradient2 : COLORS.gray,
          }}
          onPress={onSubmit}
        />
      </AuthLayout>
  );
};

export default VehicleInsurance;
