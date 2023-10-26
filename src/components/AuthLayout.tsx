import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {icons, images, FONTS, SIZES, COLORS} from '../constants';
import {AuthLayoutHeader} from '.';

const AuthLayout = ({
  title,
  subtitle,
  titleContainerStyle,
  children,
  backButton,
  titleStyle,
  subtitleStyle,
  contentContainerStyle,
  topHeader,
  headerTitle,
  backButtonStyle,
}: any) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={images.authBackgroundImage}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
      resizeMode="cover">
      {topHeader && (
        <AuthLayoutHeader
          title={headerTitle}
          containerStyle={{
            backgroundColor: COLORS.white,
          }}
        />
      )}

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        scrollEnabled={false}
        extraHeight={200}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.margin,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : SIZES.padding,
          ...contentContainerStyle,
        }}>
        {/* Back Button */}
        {backButton && (
          <TouchableOpacity
            style={{
              alignItems: 'flex-start',
              top: SIZES.height > 700 ? 20 : SIZES.radius,
              ...backButtonStyle,
            }}
            onPress={() => navigation.goBack()}>
            <FastImage
              source={icons.back}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
        )}

        {/* Title */}
        <View
          style={{
            ...titleContainerStyle,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h4,
              color: COLORS.gradient1,
              paddingHorizontal: 30,
              ...titleStyle,
            }}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: SIZES.radius,
              ...FONTS.body2,
              ...subtitleStyle,
            }}>
            {subtitle}
          </Text>
        </View>

        {children}
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default AuthLayout;
