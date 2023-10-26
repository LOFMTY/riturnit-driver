import React, {useState, useRef} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useForm} from 'react-hook-form';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

import AuthLayout from '../../components/AuthLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {TextButton, FormInput} from '../../components';
import {AuthStackNavigatorParamList} from '../../type/navigation';

type SignInData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigation = useNavigation<AuthStackNavigatorParamList>();

  const {control, handleSubmit, reset} = useForm<SignInData>();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // sas@jk.com
  // devLIFE**!@#12

  const onSubmit = async ({email, password}: SignInData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const res = await Auth.signIn(email, password);
    } catch (error) {
      if ((error as Error).name === 'UserNotConfirmedException') {
        navigation.navigate('ConfirmEmail', {email});
      } else {
        Alert.alert('Oops', (error as Error).message);
      }
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <AuthLayout
      title="Log in as a Driver "
      titleStyle={{...FONTS.h2}}
      contentContainerStyle={{marginTop: 20}}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? SIZES.padding * 2 : SIZES.margin,
      }}>
      <Spinner
        visible={loading}
        animation={'fade'}
        overlayColor={'rgba(0,0,0,0.5)'}
      />
      {/* Logo Image */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <FastImage
          source={icons.logo}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: SIZES.height > 700 ? 180 : 100,
            height: SIZES.height > 700 ? 180 : 100,
          }}
        />
      </View>

      {/* Login Form */}
      <View
        style={{
          marginHorizontal: SIZES.radius,
        }}>
        {/* Email */}
        <FormInput
          keyboardType="email-address"
          name="email"
          control={control}
          rules={{required: 'Email is required'}}
          placeholder={'Email address'}
          prependComponent={
            <View
              style={{
                width: 30,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <FastImage
                source={icons.mail}
                tintColor={COLORS.gradient2}
                style={{
                  height: 20,
                  width: 20,
                  top: 2
                }}
              />
            </View>
          }
        />

        {/* Password */}
        <FormInput
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
          secureTextEntry={!showPass}
          placeholder={'Password'}
          inputContainerStyle={{marginTop: 0}}
          prependComponent={
            <View
              style={{
                width: 35,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <FastImage
                source={icons.padlock}
                tintColor={COLORS.gradient2}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </View>
          }
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <FastImage
                source={showPass ? icons.eye : icons.eye_close}
                tintColor={COLORS.lightGray}
                style={{
                  height: 15,
                  width: 15,
                }}
              />
            </TouchableOpacity>
          }
        />

        <TextButton
          label={loading ? 'Loading...' : 'Sign In'}
          labelStyle={{color: COLORS.white, ...FONTS.h5}}
          buttonContainerStyle={{
            height: 45,
            width: 300,
            marginTop: 30,
          }}
          onPress={handleSubmit(onSubmit)}
        />

        {/* Forgot password */}
        <TextButton
          label={'Forgot password?'}
          labelStyle={{color: COLORS.gradient2, ...FONTS.h5}}
          buttonContainerStyle={{
            height: 45,
            alignSelf: 'center',
            marginTop: SIZES.base,
            backgroundColor: null,
          }}
          onPress={() => navigation.navigate('ForgotPassword')}
        />

        {/* Don't have an account */}
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.black,
            }}>
            Don't have an account?{' '}
            <TouchableOpacity
              style={{paddingTop: 3}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  ...FONTS.body3,
                  fontWeight: 'bold',
                  color: COLORS.gradient2,
                }}>
                {' '}
                Create One
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignIn;
