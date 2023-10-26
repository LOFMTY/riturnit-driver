import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import {TextButton} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import AuthLayout from '../../components/AuthLayout';
import {DriverRegistrationNavigationParamList} from '../../type/navigation';

const RegistrationComplete = () => {
  const navigation = useNavigation<DriverRegistrationNavigationParamList>();

  return (
    <AuthLayout
      nav={true}
      title="Registration Complete"
      subtitle="Your account registration is complete. We'll notify you via your email when your account is verified"
      titleStyle={{
        ...FONTS.h2,
        color: COLORS.black,
      }}
      subtitleStyle={{
        textAlign: 'left',
        marginTop: 30,
        color: COLORS.black,
        ...FONTS.body2,
      }}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? SIZES.padding * 1.5 : SIZES.padding,
      }}
      contentContainerStyle={{marginTop: 20, justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <LottieView
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              marginBottom: 5,
            }}
            autoPlay
            speed={1.5}
            loop={true}
            source={require('../../assets/json/Successful.json')}
          />
        </View>
        {/* Next Button */}
        <TextButton
          label={'Continue'}
          labelStyle={{color: COLORS.white, ...FONTS.h5}}
          buttonContainerStyle={{
            height: 45,
            width: 300,
            marginTop: 30,
          }}
          onPress={() => navigation.replace('SignIn')}
        />
      </View>
    </AuthLayout>
  );
};

export default RegistrationComplete;
