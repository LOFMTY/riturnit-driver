import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useMemo, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {Storage} from 'aws-amplify';
import BottomSheet from '@gorhom/bottom-sheet';

import {useTripContext} from '../../context/TripContext';
import {SIZES, icons, FONTS, COLORS} from '../../constants';
import {DEFAULT_IMAGE, DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';
import {ErrorBottomSheet, TextButton} from '../../components';

const DropOff = ({
  storeImg,
  storeAddress,
  appTheme,
  onDropOff,
  customerName,
  customerImg,
  onCancel,
  onCall,
  storeName,
  time,
  distance,
}: any) => {
  const [imageUri, setImageUri] = useState<any>(null);

  const snapPoints3 = useMemo(() => ['36%', '10%'], []);

  const bottomSheetRef = useRef<any>(null);

  const {updateLoading, updateError, deliveryStatus, isDriverClose} =
    useTripContext();

  useEffect(() => {
    let unmounted = false;
    if (customerImg) {
      Storage.get(customerImg).then(setImageUri);
    }
    return () => {
      unmounted = true;
    };
  }, [customerImg]);

  const renderButtonTitle = () => {
    if (deliveryStatus === 'PICKED_UP') {
      return 'End Trip';
    }
  };

  const isButtonDisabled = () => {
    if (deliveryStatus === 'NEW') {
      return false;
    }
    if (deliveryStatus === 'PICKED_UP' && isDriverClose) {
      return false;
    }
    return true;
  };

  if (updateLoading) {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints3}
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
      snapPoints={snapPoints3}
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
          {/* Store Image */}
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={{uri: storeImg || DEFAULT_IMAGE}}
              resizeMode={FastImage.resizeMode.cover}
              style={{
                width: 50,
                height: 50,
                borderRadius: SIZES.base,
              }}
            />
          </View>

          {/* Drop off Address */}
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.radius,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body3, color: appTheme.buttonText}}>
              Drop off:{'  '}
              <Text style={{...FONTS.h6, color: appTheme.textColor}}>
                {storeName}
              </Text>
            </Text>
            <Text
              numberOfLines={2}
              style={{
                ...FONTS.body4,
                fontWeight: '600',
                color: appTheme.textColor,
                paddingTop: 4,
                lineHeight: 18,
              }}>
              {storeAddress}
            </Text>
          </View>
        </View>

        {/* Time, Distance and Fare */}
        <View
          style={{
            marginTop: 6,
            marginHorizontal: SIZES.margin,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                ...FONTS.h6,
                color: appTheme.buttonText,
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
            <Text style={{...FONTS.h6, color: appTheme.textColor}}>{time}</Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 2,
            marginHorizontal: SIZES.margin,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                ...FONTS.h6,
                color: appTheme.buttonText,
                textAlign: 'center',
              }}>
              Distance:
            </Text>
          </View>
          <View
            style={{flex: 1, marginLeft: SIZES.base, justifyContent: 'center'}}>
            <Text style={{...FONTS.h6, color: appTheme.textColor}}>
              {parseFloat(distance).toFixed(2)} miles
            </Text>
          </View>
        </View>

        {/* Horizontal Rule */}
        <View
          style={{
            marginTop: SIZES.base,
            borderBottomWidth: 0.5,
            borderColor: appTheme.buttonText,
          }}
        />

        {/* Footer Buttons */}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.base,
            marginHorizontal: 15,
          }}>
          {/* Customer Image */}
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
              resizeMode={FastImage.resizeMode.cover}
              style={{
                width: 50,
                height: 50,
                borderRadius: SIZES.base,
              }}
            />
          </View>

          {/* Pickup Address */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingLeft: SIZES.radius,
            }}>
            <Text style={{...FONTS.h6, color: appTheme.buttonText}}>
              Contact customer
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{...FONTS.h6, color: appTheme.textColor}}>
              {customerName}
            </Text>
          </View>

          {/* Make Call */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              borderRadius: SIZES.padding * 1.5,
              padding: SIZES.radius,
              borderWidth: 0.5,
              borderColor: COLORS.caribbeanGreen,
              marginRight: SIZES.padding,
            }}
            onPress={onCall}>
            <FastImage
              source={icons.call}
              resizeMode={FastImage.resizeMode.contain}
              tintColor={COLORS.caribbeanGreen}
              style={{
                width: 17,
                height: 17,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>

          {/* Cancel */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              borderRadius: SIZES.padding * 1.5,
              padding: SIZES.radius,
              borderWidth: 0.5,
              borderColor: COLORS.red,
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

        {/* Horizontal Rule */}
        <View
          style={{
            marginTop: SIZES.base,
            borderBottomWidth: 0.5,
            borderColor: appTheme.buttonText,
          }}
        />

        {/* Pick Up Button */}
        <TextButton
          label={renderButtonTitle()}
          disabled={isButtonDisabled()}
          labelStyle={{
            ...FONTS.h4,
            color: COLORS.whiteAsh,
          }}
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

export default connect(mapStateToProps)(DropOff);
