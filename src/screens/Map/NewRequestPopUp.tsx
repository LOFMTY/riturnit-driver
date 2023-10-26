import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useRef, useMemo} from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {useNavigation} from '@react-navigation/native';
import {Storage} from 'aws-amplify';

import {SIZES, icons, FONTS, COLORS} from '../../constants';
import {useTripContext} from '../../context/TripContext';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';
import {ErrorBottomSheet, TextButton} from '../../components';

const NewRequestPopUp = ({
  customerImg,
  customerName,
  distance,
  price,
  storeAddress,
  customerAddress,
  appTheme,
  onAccept,
  storeName,
  time,
  onViewItems,
}: any) => {
  const navigation = useNavigation<any>();

  const [imageUri, setImageUri] = useState<any>(null);

  const snapPoints2 = useMemo(() => ['38%', '10%'], []);

  const bottomSheetRef = useRef<any>(null);

  const {updateLoading, updateError, fetchAllTrips, deliveryStatus} =
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
    if (deliveryStatus === 'NEW') {
      return 'Accept';
    }
  };

  const isButtonDisabled = () => {
    if (deliveryStatus === 'NEW') {
      return false;
    }
    return true;
  };

  if (updateLoading) {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints2}
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
    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints2}
        handleIndicatorStyle={{backgroundColor: appTheme.textColor}}
        handleStyle={{backgroundColor: appTheme.bottomSheet}}
        backgroundStyle={{
          backgroundColor: appTheme.bottomSheet,
        }}>
        <ErrorBottomSheet text="Error fetching data" />
      </BottomSheet>
    );
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints2}
      handleIndicatorStyle={{backgroundColor: appTheme.textColor}}
      handleStyle={{backgroundColor: appTheme.bottomSheet}}
      backgroundStyle={{
        backgroundColor: appTheme.bottomSheet,
      }}>
      <View
        style={{
          marginHorizontal: SIZES.padding * 4,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FONTS.h5, color: COLORS.gradient1}}>New request</Text>
        <View style={{justifyContent: 'center'}}>
          <CountdownCircleTimer
            isPlaying
            size={35}
            strokeWidth={3}
            duration={45}
            colors={['#00bb65', '#C3FF99', '#ffca00', '#D84035']}
            colorsTime={[7, 5, 3, 0]}
            onComplete={() => navigation.goBack()}>
            {({remainingTime}) => (
              <Text style={{...FONTS.h6, color: appTheme.textColor}}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
      <View
        style={{
          marginTop: 6,
          marginHorizontal: SIZES.radius,
          alignItems: 'center',
          padding: 6,
          borderRadius: SIZES.base,
          backgroundColor: appTheme.tabIndicatorBackgroundColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Customer Image */}
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
            style={{
              width: 60,
              height: 60,
              right: 4,
              top: 2.5,
              borderRadius: 5,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        {/* Customer Name & Price */}
        <View
          style={{
            flex: 1,
            paddingLeft: 4,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text
                numberOfLines={2}
                style={{...FONTS.h6, color: appTheme.textColor}}>
                {customerName}
              </Text>
            </View>

            <View style={{justifyContent: 'center', paddingRight: 6}}>
              <Text style={{...FONTS.h5, color: appTheme.textColor}}>
                {price}
              </Text>
            </View>
          </View>

          {/* View Item Details */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 6,
              paddingTop: 4,
            }}>
            <TouchableOpacity
              style={{justifyContent: 'center'}}
              onPress={onViewItems}>
              <Text
                style={{
                  ...FONTS.body3,
                  fontWeight: '600',
                  color: COLORS.gradient2,
                }}>
                Returning items
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onViewItems}
              style={{flex: 1, justifyContent: 'center'}}>
              <FastImage
                source={icons.right}
                style={{
                  width: 20,
                  height: 20,
                }}
              />

              {/* Distance */}
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{...FONTS.h5, color: appTheme.buttonText}}>
                  {parseFloat(distance).toFixed(2)} miles
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <Text style={{...FONTS.h5, color: appTheme.buttonText}}>
                {time}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Customer Address & Store Address */}
      <View style={{paddingTop: SIZES.base, marginHorizontal: 15}}>
        <Text style={{...FONTS.h6, color: COLORS.gray}}>PICK UP</Text>
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.body4,
            fontWeight: 'bold',
            color: appTheme.textColor,
            paddingTop: 2,
          }}>
          {customerAddress}
        </Text>
        {/* Horizontal Rule */}
        <View
          style={{
            marginTop: 6,
            borderBottomWidth: 0.8,
            borderColor: COLORS.gray,
          }}
        />
      </View>

      <View style={{paddingTop: SIZES.base, marginHorizontal: 15}}>
        <Text style={{...FONTS.h6, color: COLORS.gray}}>DROP OFF</Text>
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.body4,
            fontWeight: 'bold',
            color: appTheme.textColor,
            paddingTop: 2,
          }}>
          <Text style={{color: COLORS.gradient2, ...FONTS.body3}}>
            {storeName}
          </Text>{' '}
          - {storeAddress}
        </Text>
        {/* Horizontal Rule */}
        <View
          style={{
            marginTop: SIZES.base,
            borderBottomWidth: 0.8,
            borderColor: COLORS.gray,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding * 2,
        }}>
        <TextButton
          label={renderButtonTitle()}
          disabled={isButtonDisabled()}
          labelStyle={{fontWeight: '600', ...FONTS.h5, color: COLORS.white}}
          buttonContainerStyle={{
            height: 40,
            width: 120,
            borderRadius: SIZES.base,
            backgroundColor: COLORS.caribbeanGreen,
          }}
          onPress={onAccept}
        />
        <TextButton
          label="Ignore"
          labelStyle={{fontWeight: '600', ...FONTS.h5, color: COLORS.white}}
          buttonContainerStyle={{
            height: 40,
            width: 120,
            borderRadius: SIZES.base,
            backgroundColor: COLORS.red,
          }}
          onPress={() => navigation.goBack()}
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

export default connect(mapStateToProps)(NewRequestPopUp);
