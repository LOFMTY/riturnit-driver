import React, {useState, memo} from 'react';
import {View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {Auth} from 'aws-amplify';

import {SIZES, COLORS, icons, FONTS} from '../../constants';
import {TextButton, FormInput} from '../../components';
import {AuthStackNavigatorParamList} from '../../type/navigation';
import AuthLayout from '../../components/AuthLayout';

type ForgotPasswordData = {
  email: string;
};

const ForgotPassword = () => {
  const {control, handleSubmit, reset} = useForm<ForgotPasswordData>();

  const navigation = useNavigation<AuthStackNavigatorParamList>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async ({email}: ForgotPasswordData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.forgotPassword(email);
      Alert.alert(
        'Check your email',
        `The code has been sent to ${response.CodeDeliveryDetails.Destination}`,
      );
      navigation.navigate('NewPassword');
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

  function renderFormCodeSection() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
          marginHorizontal: SIZES.padding * 1.5,
        }}>
        {/* Forgot Password */}
        <FormInput
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
          }}
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
                  tintColor: COLORS.gradient2,
                }}
              />
            </View>
          }
        />
      </View>
    );
  }

  return (
    <AuthLayout
      backButton={true}
      title="Forgot Password"
      titleStyle={{...FONTS.h2}}
      contentContainerStyle={{marginTop: 20}}
      titleContainerStyle={{
        marginTop: SIZES.height > 700 ? SIZES.padding * 2 : SIZES.margin,
      }}>

      {renderHeaderTextSection()}
      {renderFormCodeSection()}

      <TextButton
        label={loading ? 'Loading...' : 'Reset Password'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
          marginTop: SIZES.padding * 1.5,
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

export default memo(ForgotPassword);
