import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {AuthStackNavigatorParamList} from '../../type/navigation';
import AuthLayout from '../../components/AuthLayout';

type NewPasswordType = {
  email: string;
  code: string;
  password: string;
};

const NewPassword = () => {
  const navigation = useNavigation<AuthStackNavigatorParamList>();

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit, reset} = useForm<NewPasswordType>();

  const onSubmit = async ({email, code, password}: NewPasswordType) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert((error as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

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
              width: SIZES.height > 700 ? 200 : 100,
              height: SIZES.height > 700 ? 200 : 100,
            }}
          />
        </View>
      </View>
    );
  }

  function renderFormSection() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding * 1.5,
          marginTop: SIZES.radius,
        }}>
        {/* UserName / Email */}
        <FormInput
          name="email"
          control={control}
          placeholder={'Email address'}
          prependComponent={
            <View
              style={{
                width: 35,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <FastImage
                source={icons.mail}
                style={{
                  height: 20,
                  width: 20,
                }}
                tintColor={COLORS.gradient2}
              />
            </View>
          }
        />

        {/* Code */}

        <FormInput
          keyboardType={'numeric'}
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
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
          placeholder={'Create password'}
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
      </View>
    );
  }

  return (
    <AuthLayout
      backButton={true}
      title="New Password"
      titleStyle={{...FONTS.h2}}
      contentContainerStyle={{marginTop: 20}}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? SIZES.padding * 2 : SIZES.margin,
      }}>
      {renderHeaderTextSection()}
      {renderFormSection()}

      <TextButton
        label={loading ? 'Loading...' : 'Submit'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
          marginTop: SIZES.height > 700 ? SIZES.padding * 1.5 : SIZES.padding,
          width: 250,
          alignSelf: 'center',
          backgroundColor: COLORS.gradient1,
        }}
        onPress={handleSubmit(onSubmit)}
      />

      {/* Back to Sign in */}
      <TouchableOpacity
        style={{
          marginTop: SIZES.padding,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('SignIn')}>
        <Text
          style={{
            ...FONTS.body2,
            fontWeight: 'bold',
            color: COLORS.gradient1,
          }}>
          Back to Sign in{' '}
        </Text>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default NewPassword;
