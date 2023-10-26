import React, {useState, memo, useRef} from 'react';
import {View, Text, Image, Alert, TouchableOpacity, Switch} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FastImage from 'react-native-fast-image';
import {Controller, useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';

import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import AuthLayout from '../../components/AuthLayout';
import {AuthStackNavigatorParamList} from '../../type/navigation';

// sign up pw: devLIFE**!@#12

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type SignUpData = {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  username: string;
  passwordRepeat: string;
};

const SignUp = () => {
  const navigation = useNavigation<AuthStackNavigatorParamList>();

  const phoneInput = useRef<PhoneInput>(null);

  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {control, handleSubmit, watch, reset} = useForm<SignUpData>();
  const pwd = watch('password');

  const onSubmit = async ({
    password,
    email,
    name,
    username,
    phone_number,
  }: SignUpData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          phone_number,
          preferred_username: username,
          'custom:isDriver': 'Driver',
        },
      });
      // console.log('sign up response', response);
      navigation.navigate('ConfirmEmail', {email});
    } catch (error) {
      Alert.alert('Oops', (error as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <AuthLayout
      title="Sign up as a driver "
      subtitle="Earn good money with your vehicle"
      contentContainerStyle={{marginTop: SIZES.margin}}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? 30 : 15,
      }}>
      <Spinner
        visible={loading}
        animation={'fade'}
        overlayColor={'rgba(0,0,0,0.5)'}
      />
      {/* Logo Image */}
      <View
        style={{
          marginTop: SIZES.radius,
          alignItems: 'center',
        }}>
        <FastImage
          source={icons.logo}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: SIZES.height > 700 ? 150 : 100,
            height: SIZES.height > 700 ? 150 : 100,
          }}
        />
      </View>

      <View>
        {/* Name */}
        <FormInput
          name="name"
          control={control}
          placeholder="Full name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
          inputContainerStyle={{marginTop: -10}}
          prependComponent={
            <View
              style={{
                width: 30,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.user}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gradient2,
                }}
              />
            </View>
          }
        />

        {/* Email */}
        <FormInput
          keyboardType="email-address"
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
          inputContainerStyle={{marginTop: -5}}
          placeholder={'Email address'}
          prependComponent={
            <View
              style={{
                width: 30,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.mail}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gradient2,
                }}
              />
            </View>
          }
        />

        {/* {/* mobile number */}
        <Controller
          control={control}
          name="phone_number"
          rules={{
            required: 'Phone Number is required',
          }}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="US"
                layout="first"
                onChangeFormattedText={onChange}
                withDarkTheme={false}
                withShadow={false}
                autoFocus={false}
                placeholder={'Mobile number'}
                codeTextStyle={{right: 22}}
                textInputStyle={{right: 25}}
                textContainerStyle={{
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.lightGray5,
                  borderWidth: 0.1,
                  borderLeftWidth: 0,
                  borderRadius: SIZES.base,
                }}
                containerStyle={{
                  marginTop: SIZES.base,
                  borderColor: COLORS.lightGray5,
                  borderWidth: 0.5,
                  borderRadius: SIZES.base,
                  backgroundColor: COLORS.white,
                  width: 345,
                }}
              />
              {error && (
                <Text style={{color: 'red', alignSelf: 'stretch'}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </>
          )}
        />

        {/* Password */}
        <FormInput
          secureTextEntry={!showPass}
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
          placeholder={'Password'}
          inputContainerStyle={{marginTop: -5}}
          prependComponent={
            <View
              style={{
                width: 30,
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
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye : icons.eye_close}
                style={{
                  height: 15,
                  width: 15,
                  tintColor: COLORS.lightGray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Confirm Password */}
        <FormInput
          secureTextEntry={!showPass2}
          name="passwordRepeat"
          control={control}
          rules={{
            validate: (value: string) =>
              value === pwd || 'Password do not match',
          }}
          placeholder={'Repeat password'}
          inputContainerStyle={{marginTop: -5}}
          prependComponent={
            <View
              style={{
                width: 30,
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
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass2(!showPass2)}>
              <Image
                source={showPass ? icons.eye : icons.eye_close}
                style={{
                  height: 15,
                  width: 15,
                  tintColor: COLORS.lightGray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Agree To Terms Switch */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.height > 700 ? SIZES.padding : SIZES.radius,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Switch
              trackColor={{false: COLORS.silver, true: COLORS.caribbeanGreen}}
              thumbColor={isEnabled ? COLORS.white : COLORS.white}
              ios_backgroundColor="#fff"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              paddingLeft: SIZES.padding,
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text
              style={{
                ...FONTS.body3,
                fontWeight: 'bold',
                color: COLORS.gradient2,
                textDecorationLine: 'underline',
              }}>
              I agree to Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TextButton
          disabled={!isEnabled}
          label={loading ? 'Loading...' : 'Sign Up'}
          labelStyle={{color: COLORS.white, ...FONTS.h5}}
          buttonContainerStyle={{
            height: 45,
            marginTop: SIZES.height > 700 ? 25 : 15,
            width: 300,
            backgroundColor: !isEnabled ? COLORS.gray : COLORS.gradient2,
          }}
          onPress={handleSubmit(onSubmit)}
        />

        {/* already have an account */}
        <View
          style={{
            margin: SIZES.margin,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body3, color: COLORS.black}}>
            Already have an account?{'   '}
            <Text
              style={{...FONTS.h5, color: COLORS.gradient2}}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
};

export default memo(SignUp);
