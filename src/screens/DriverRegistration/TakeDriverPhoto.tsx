import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import {TextButton} from '../../components';
import {FONTS, SIZES, COLORS, images} from '../../constants';
import UploadProfilePhotoModal from '../Setting/Profile/UploadProfilePhotoModal';
import AuthLayout from '../../components/AuthLayout';
import {DriverRegistrationNavigationParamList} from '../../type/navigation';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';

const TakeDriverPhoto = () => {
  const navigation = useNavigation<DriverRegistrationNavigationParamList>();

  const [selectedPhoto, setSelectedPhoto] = useState<any | Asset>('');
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);

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

  return (
    <AuthLayout
      topHeader={true}
      headerTitle="Driver's photo"
      contentContainerStyle={{marginTop: -200, justifyContent: 'center'}}>
      {showUploadPhotoModal && (
        <UploadProfilePhotoModal
          library={onChangePhoto}
          camera={onCameraPress}
          isVisible={showUploadPhotoModal}
          onClose={() => setShowUploadPhotoModal(false)}
        />
      )}

      {/* Paragraph 1 */}
      <View>
        <Text style={{...FONTS.body3, lineHeight: 22, textAlign: 'center'}}>
          Your profile photo helps people recognize you. Note that once your
          photo has been submitted, it cannot be changed
        </Text>
      </View>

      {/* Paragraph 2 */}
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{...FONTS.body3, lineHeight: 25}}>
          * Make sure you face the camera directly.
        </Text>
        <Text style={{...FONTS.body3, lineHeight: 25}}>
          * Make sure the environment is bright.
        </Text>
        <Text style={{...FONTS.body3, lineHeight: 25}}>
          * No photos of a photo, filters or alterations.
        </Text>
      </View>

      {/* Diver Test Image */}
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.padding,
        }}>
        <FastImage
          source={{uri: selectedPhoto?.uri || DEFAULT_PROFILE_IMAGE}}
          resizeMode={FastImage.resizeMode.cover}
          style={{
            width: 230,
            height: 230,
            borderRadius: 400 / 2,
            borderWidth: 5,
            borderColor: selectedPhoto?.uri ? COLORS.gradient2 : COLORS.gray,
          }}
        />
        <TouchableOpacity onPress={() => setShowUploadPhotoModal(true)}>
          <FastImage
            source={images.upload}
            style={{
              width: 40,
              height: 40,
              top: -40,
              left: 50,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TextButton
        disabled={!selectedPhoto?.uri}
        label={'Continue'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
          width: 300,
          marginTop: SIZES.height > 700 ? 60 : SIZES.padding,
          backgroundColor: selectedPhoto?.uri ? COLORS.gradient2 : COLORS.gray,
        }}
        onPress={() =>
          navigation.navigate({
            name: 'WelcomeRegistration',
            params: {driverPhoto: selectedPhoto?.uri},
            merge: true,
          })
        }
      />
    </AuthLayout>
  );
};

export default TakeDriverPhoto;
