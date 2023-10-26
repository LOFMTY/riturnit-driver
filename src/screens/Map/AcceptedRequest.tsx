import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useRef, useMemo} from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {Storage} from 'aws-amplify';
import BottomSheet from '@gorhom/bottom-sheet';

import {useTripContext} from '../../context/TripContext';
import {SIZES, icons, FONTS, COLORS} from '../../constants';
import TextButton from '../../components/Button/TextButton';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';
import {ErrorBottomSheet} from '../../components';

const AcceptedRequest = ({
  customerImg,
  distance,
  customerAddress,
  onDropOff,
  customerName,
  time,
  onCancel,
  appTheme,
  onCall,
}: any) => {
  const [imageUri, setImageUri] = useState<any>(null);

  const snapPoints1 = useMemo(() => ['28%', '10%'], []);

  const bottomSheetRef = useRef<any>(null);

  const {updateLoading, updateError, deliveryStatus, isDriverClose} =
    useTripContext();

  const renderButtonTitle = () => {
    if (deliveryStatus === 'ACCEPTED') {
      return 'Pick Up';
    }
  };

  const isButtonDisabled = () => {
    if (deliveryStatus === 'ACCEPTED' && isDriverClose) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    let unmounted = false;
    if (customerImg) {
      Storage.get(customerImg).then(setImageUri);
    }
    return () => {
      unmounted = true;
    };
  }, [customerImg]);

  if (updateLoading) {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints1}
        handleIndicatorStyle={{backgroundColor: appTheme.textColor}}
        handleStyle={{backgroundColor: appTheme.bottomSheet}}
        backgroundStyle={{
          backgroundColor: appTheme.bottomSheet,
        }}>
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center'}}
          size={'large'}
          color={'#3580ff'}
        />
      </BottomSheet>
    );
  }

  if (updateError) {
    return <ErrorBottomSheet text="Error fetching data" />;
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints1}
      handleIndicatorStyle={{backgroundColor: appTheme.textColor}}
      handleStyle={{backgroundColor: appTheme.bottomSheet}}
      backgroundStyle={{
        backgroundColor: appTheme.bottomSheet,
      }}>
      {/* New Request Details */}
      <View
        style={{
          backgroundColor: appTheme.bottomSheet,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            marginHorizontal: SIZES.base,
            borderRadius: SIZES.radius,
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: appTheme.tabIndicatorBackgroundColor,
          }}>
          {/* Customer Image */}
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
              resizeMode={FastImage.resizeMode.cover}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>

          {/* Pickup Address */}
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h6, color: appTheme.textColor}}>
              {customerName}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                ...FONTS.body4,
                color: appTheme.textColor,
                lineHeight: 25,
              }}>
              {customerAddress}
            </Text>
          </View>
        </View>

        {/* Time, */}
        <View
          style={{
            marginHorizontal: SIZES.radius,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                ...FONTS.h5,
                color: appTheme.subTextColor,
                textAlign: 'center',
              }}>
              ETA:
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>{time}</Text>
          </View>

          {/* Make Call */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              borderRadius: SIZES.padding * 1.5,
              height: 35,
              width: 35,
              borderWidth: 0.5,
              borderColor: COLORS.caribbeanGreen,
              marginRight: SIZES.padding,
              top: 13,
            }}
            onPress={onCall}>
            <Image
              source={icons.call}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                alignSelf: 'center',
                tintColor: COLORS.caribbeanGreen,
              }}
            />
          </TouchableOpacity>

          {/* Cancel */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              borderRadius: SIZES.padding * 1.5,
              height: 35,
              width: 35,
              borderWidth: 0.5,
              borderColor: COLORS.red,
              marginRight: 10,
              top: 13,
            }}
            onPress={onCancel}>
            <Image
              source={icons.close}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                alignSelf: 'center',
                tintColor: COLORS.red,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Distance */}
        <View
          style={{
            marginHorizontal: SIZES.radius,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                ...FONTS.h5,
                color: appTheme.subTextColor,
                textAlign: 'center',
              }}>
              Distance:
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              {parseFloat(distance).toFixed(2)} miles
            </Text>
          </View>
        </View>

        {/* Horizontal Rule */}
        <View
          style={{
            marginTop: 10,
            borderBottomWidth: 0.3,
            marginHorizontal: SIZES.radius,
            borderColor: appTheme.buttonText,
          }}
        />

        {/* Pick Up Button */}
        <TextButton
          label={renderButtonTitle()}
          disabled={isButtonDisabled()}
          labelStyle={{...FONTS.h4, color: COLORS.white}}
          buttonContainerStyle={{
            height: 45,
            width: 230,
            alignSelf: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.base,
            backgroundColor: isButtonDisabled()
              ? COLORS.whiteSmoke
              : COLORS.gradient2,
          }}
          onPress={onDropOff}
        />
      </View>
    </BottomSheet>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}
export default connect(mapStateToProps)(AcceptedRequest);
