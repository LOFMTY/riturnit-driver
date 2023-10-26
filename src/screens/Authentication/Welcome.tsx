import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import {FONTS, SIZES, COLORS, images} from '../../constants';
import {TextButton} from '../../components';
import {AuthStackNavigatorParamList} from '../../type/navigation';

const Welcome = () => {
  const navigation = useNavigation<AuthStackNavigatorParamList>();

  function renderContents() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: SIZES.padding * 4,
        }}>
        <FastImage
          source={images.truck}
          resizeMode="contain"
          style={{width: 300, height: 130}}
        />

        <View
          style={{
            marginTop: SIZES.padding * 2,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.extraLarge,
              textAlign: 'center',
              paddingHorizontal: SIZES.padding * 3,
            }}>
            Welcome to Riturnit Drive
          </Text>

          <Text
            style={{
              ...FONTS.body1,
              top: SIZES.margin,
              textAlign: 'center',
              color: COLORS.gray3,
            }}>
            Earn good money with your vehicle
          </Text>
        </View>

        {/* Buttons */}
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
            paddingTop: SIZES.padding * 2,
          }}>
          <TextButton
            label="Sign Up"
            labelStyle={{...FONTS.h5, color: COLORS.white}}
            buttonContainerStyle={{
              height: 50,
              width: 300,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.gradient1,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />

          <TextButton
            label="Already have an account?"
            labelStyle={{color: COLORS.gradient2, ...FONTS.h5}}
            buttonContainerStyle={{
              height: 50,
              bottom: 10,
              width: 300,
              borderRadius: SIZES.radius,
              marginTop: 15,
              backgroundColor: null,
            }}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={images.authBackgroundImage}
      resizeMode="cover"
      style={{
        flex: 1,
        height: '100%',
      }}>
      {renderContents()}
    </ImageBackground>
  );
};

export default Welcome;
