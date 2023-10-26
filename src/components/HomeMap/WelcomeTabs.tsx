import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';

import {COLORS, SIZES, FONTS, icons} from '../../constants';

const WelcomeTabs = ({
  onPress,
  title,
  iconType,
  containerStyle,
  checked,
  iconStyle,
  text,
  subTextStyle,
  subText,
}: any) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        padding: SIZES.margin,
        marginTop: 6,
        paddingHorizontal: 18,
        backgroundColor: COLORS.lexicon,
        ...containerStyle,
      }}
      onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={iconType}
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.gradient1,
            ...iconStyle,
          }}
        />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            paddingLeft: 10,
            ...FONTS.h5,
            color: COLORS.black,
          }}>
          {title}
        </Text>

        {text ? (
          <Text
            style={{
              paddingLeft: 10,
              ...FONTS.body3,
              ...subTextStyle,
            }}>
            {subText}
          </Text>
        ) : (
          <View />
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <FastImage
          source={checked}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: 25,
            height: 25,
            justifyContent: 'center',
            alignContent: 'flex-end',
          }}
        />
      </View>
    </Pressable>
  );
};

export default WelcomeTabs;
