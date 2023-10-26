import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {TextButton} from '../../components';
import {FONTS, SIZES, COLORS, images} from '../../constants';
import AuthLayout from '../../components/AuthLayout';

const DriverTest = () => {
  const navigation = useNavigation<any>();

  return (
    <AuthLayout
      topHeader={true}
      headerTitle="Driver's Test"
      contentContainerStyle={{marginTop: -200, justifyContent: 'center'}}>
      {/* Diver Test Image */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <FastImage
          source={images.manOnWheel}
          style={{width: 220, height: 220}}
        />
      </View>

      {/* Text Header */}
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.radius,
        }}>
        <Text style={{...FONTS.h2, textAlign: 'center', lineHeight: 28}}>
          Complete the Driver’s documentation process
        </Text>
      </View>

      {/* Paragraph 1 */}
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
        }}>
        <Text style={{...FONTS.body3, lineHeight: 22, textAlign: 'center'}}>
          Complete the Riturnit driver’s test to get activated.
        </Text>
      </View>

      {/* Paragraph 2 */}
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.body3, lineHeight: 22, textAlign: 'center'}}>
          To proceed with your onboarding, you need to complete a virtual
          drivers’ test. You will learn more about driver require- ments,
          available products, fares and earnings.
        </Text>
      </View>

      {/* Next Button */}
      <TextButton
        label={'Begin now'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
            width: 300,
            marginTop: 30,
        }}
        onPress={() => navigation.navigate('TakeDriverPhoto')}
      />
    </AuthLayout>
  );
};

export default DriverTest;
