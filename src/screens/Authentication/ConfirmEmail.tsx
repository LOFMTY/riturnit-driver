import React, {useState, useEffect, memo} from 'react';
import {View, TouchableOpacity, Text, Image, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {Auth} from 'aws-amplify';

import {SIZES, COLORS, icons, FONTS} from '../../constants';
import {TextButton, FormInput} from '../../components';
import {
  ConfirmEmailNavigationProp,
  ConfirmEmailRouteProp,
} from '../../type/navigation';
import AuthLayout from '../../components/AuthLayout';

type ConfirmEmailData = {
  email: string;
  code: string;
};

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ConfirmEmail = () => {
  const route = useRoute<ConfirmEmailRouteProp | any>();
  const {control, handleSubmit, watch, reset} = useForm<ConfirmEmailData>({
    defaultValues: {email: route.params.email},
  });

  const navigation = useNavigation<ConfirmEmailNavigationProp | any>();

  const email = watch('email');

  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({email, code}: ConfirmEmailData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.confirmSignUp(email, code);
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert((error as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const onResendCode = async () => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Check your email', 'Code resent successfully.');
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function renderHeaderTextSection() {
    return (
      <View
        style={{
          marginHorizontal: 20,
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: SIZES.radius,
          }}>
          <FastImage
            source={icons.logo}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: SIZES.height > 700 ? 150 : 100,
              height: SIZES.height > 700 ? 150 : 100,
            }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: SIZES.radius,
            }}>
            <Text
              style={{
                ...FONTS.h3,
                fontWeight: 'bold',
                letterSpacing: -1,
                textAlign: 'center',
              }}>
              OTP Authentication
            </Text>

            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.gray,
                marginTop: 30,
                textAlign: 'center',
              }}>
              Please enter the 6-digit code sent your email{' '}
              {
                <Text
                  numberOfLines={1}
                  style={{
                    ...FONTS.h6,
                    color: COLORS.black,
                    lineHeight: 24,
                  }}>
                  {route?.params?.email}
                </Text>
              }
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderPINCodeSection() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
          marginHorizontal: SIZES.radius,
        }}>
        {/* username / email */}
        <FormInput
          keyboardType="email-address"
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
          inputContainerStyle={{marginTop: 0}}
          placeholder={'Email address'}
          prependComponent={
            <View
              style={{
                width: 35,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.mail}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gradient1,
                }}
              />
            </View>
          }
        />

        {/* Code */}
        <FormInput
          keyboardType={'numeric'}
          name="code"
          control={control}
          rules={{
            required: 'Confirmation code is required',
          }}
          inputContainerStyle={{marginTop: 0}}
          placeholder="Enter your confirmation code"
          prependComponent={
            <View
              style={{
                width: 35,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <FastImage
                source={icons.padlock}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </View>
          }
        />

        {/* Countdown Timer */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              paddingHorizontal: SIZES.radius,
              ...FONTS.body3,
              color: COLORS.gray1,
              fontWeight: 'bold',
            }}>
            Didn't receive code?
          </Text>

          <TouchableOpacity
            disabled={timer == 0 ? false : true}
            style={{backgroundColor: 'undefined', paddingTop: SIZES.base}}
            onPress={() => {
              setTimer(10);
              onResendCode();
            }}>
            <Text
              style={{
                color: COLORS.scarlet,
                ...FONTS.body3,
                fontWeight: 'bold',
              }}>
              Resend in ({timer}s)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <AuthLayout
      backButton={true}
      title="Log in as a Driver "
      titleStyle={{...FONTS.h2}}
      contentContainerStyle={{marginTop: 20}}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? SIZES.padding * 2 : SIZES.margin,
      }}>
      {renderHeaderTextSection()}
      {renderPINCodeSection()}

      <TextButton
        label={loading ? 'Loading...' : 'Confirm'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 50,
          marginTop: SIZES.padding,
          width: 300,
        }}
        onPress={handleSubmit(onSubmit)}
      />
    </AuthLayout>
  );
};

export default memo(ConfirmEmail);
