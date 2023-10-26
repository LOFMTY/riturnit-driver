import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Storage} from 'aws-amplify';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {COLORS, FONTS, SIZES} from '../../constants';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';

const DrawerProfileImage = ({
  onPress,
  appTheme,
  driverImage,
  email,
  name,
}: any) => {
  const [imageUri, setImageUri] =  useState<string | null>(null);

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
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.padding * 2,
      }}
      onPress={onPress}>
      <FastImage
        source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
        style={{
          width: 60,
          height: 60,
          borderRadius: 100 / 2,
          borderColor: COLORS.gradient2,
          borderWidth: 1,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'center',
        }}>
        <Text
          numberOfLines={1}
          style={{color: appTheme.textColor, ...FONTS.h6}}>
          {name}
        </Text>
        <Text
          numberOfLines={1}
          style={{color: appTheme.buttonText, ...FONTS.body4}}>
          {email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(DrawerProfileImage);
