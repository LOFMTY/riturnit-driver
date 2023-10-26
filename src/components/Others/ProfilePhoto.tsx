import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {Storage} from 'aws-amplify';

import {SIZES, FONTS, icons, images, COLORS} from '../../constants';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';

interface IDriverImage {
  driverImage?: string | null;
  profileName?: string;
  driverRating: any;
  totalTrips: any;
  distance: any;
  rating?: number;
  years?: string;
  carType?: string;
  appTheme?: any;
  onPress: Function;
  containerStyle?: any;
}

const ProfilePhoto = ({
  appTheme,
  totalTrips,
  onPress,
  distance,
  driverImage,
  containerStyle,
  driverRating,
}: IDriverImage) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    let unmounted = false;
    if (driverImage) {
      Storage.get(driverImage).then(setImageUri);
    }
    return () => {
      unmounted = true;
    };
  }, [driverImage]);

  return (
    <View
      style={{
        marginTop: SIZES.radius,
        height: SIZES.height > 700 ? '25%' : '22%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        ...containerStyle,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        {/* Profile Photo */}
        <View
          style={{
            marginTop: SIZES.padding * 2.4,
            paddingHorizontal: 170,
            paddingVertical: 120,
            position: 'absolute',
            borderRadius: 15,
            backgroundColor: appTheme.tabBackgroundColor,
          }}>
          {/* Horizontal Rule */}
          <View
            style={{
              top: 165,
              position: 'absolute',
              width: 330,
              borderBottomWidth: 0.4,
              right: 5,
              borderColor: appTheme.textColor,
            }}
          />
        </View>
        <FastImage
          source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
          style={{
            width: 160,
            height: 160,
            borderRadius: 100 * 2,
            borderWidth: 4,
            borderColor: COLORS.gradient2,
            backgroundColor: appTheme.tabBackgroundColor,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        {/* driver Profile Upload Button */}
        <TouchableOpacity onPress={() => onPress()}>
          <FastImage
            source={images.upload}
            style={{
              width: 30,
              height: 30,
              top: -25,
              left: 20,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>

        {/* Profile Name & Rating */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: SIZES.margin,
          }}>
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={icons.rate}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
          <View style={{justifyContent: 'center', paddingLeft: 8}}>
            <Text
              style={{
                ...FONTS.h2,
                color: appTheme.buttonText,
              }}>
              {driverRating}
            </Text>
          </View>
        </View>

        {/* Driver Trips and Years */}
        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
          <View style={{justifyContent: 'center', right: 0}}>
            <Text
              style={{
                marginTop: 5,
                textAlign: 'center',
                color: appTheme.textColor,
                ...FONTS.h5,
              }}>
              {totalTrips}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: appTheme.buttonText,
                paddingTop: 4,
                ...FONTS.body3,
              }}>
              Total Trips
            </Text>
          </View>

          {/* Vertical Rule */}
          <View
            style={{
              top: -10,
              position: 'absolute',
              height: 70,
              width: 0.8,
              right: 195,
              backgroundColor: appTheme.buttonText,
            }}
          />
          <View
            style={{
              marginTop: 5,
              justifyContent: 'center',
              right: -15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: appTheme.textColor,
                ...FONTS.h5,
              }}>
              {distance} mi
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: appTheme.buttonText,
                paddingTop: 4,
                ...FONTS.body3,
              }}>
              Total Distance
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(ProfilePhoto);
