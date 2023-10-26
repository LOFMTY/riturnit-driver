import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import {FONTS, SIZES, COLORS, icons} from '../../constants';

const AuthLayoutHeader = ({title, contentStyle, containerStyle, onPress}: any) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        height: '12.5%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        ...containerStyle,
      }}>
      <View
        style={{
          marginHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
          ...contentStyle,
        }}>
        {/* Header Back Button */}
        <TouchableOpacity
          // onPress={() => navigation.navigate('OnBoarding')}
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: 'center',
            borderWidth: 0.5,
            padding: SIZES.base,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gradient2,
          }}>
          <FastImage
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 17,
              height: 17,
              right: 1,
            }}
          />
        </TouchableOpacity>

        {/* Header Store Title */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingRight: SIZES.padding * 1.5,
          }}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default AuthLayoutHeader;
