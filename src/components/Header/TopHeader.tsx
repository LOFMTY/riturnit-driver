import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {FONTS, SIZES, COLORS, icons} from '../../constants';

const TopHeader = ({
  appTheme,
  title,
  contentStyle,
  containerStyle,
  userImg,
  userImage,
  callUser,
  onCall,
  titleStyle,
}: any) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: appTheme.tabBackgroundColor,
        height: '12%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        ...containerStyle,
      }}>
      <View
        style={{
          top: -3,
          marginHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
          ...contentStyle,
        }}>
        {/* Header Back Button */}
        <TouchableOpacity
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

        {userImg ? (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: SIZES.padding,
            }}>
            <FastImage
              source={userImage ? userImage : icons.dummyUser}
              style={{width: 35, height: 35, borderRadius: 50}}
            />
          </View>
        ) : (
          <View />
        )}

        {/* Header Store Title */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingRight: SIZES.padding * 1.3,
            ...titleStyle,
          }}>
          <Text
            style={{
              ...FONTS.h4,
              color: appTheme.textColor,
              top: 2,
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>

        {callUser ? (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              marginRight: 2,
              backgroundColor: appTheme.backgroundColor,
              padding: 8,
              borderRadius: SIZES.radius,
              // top: 3,
            }}
            onPress={onCall}>
            <FastImage source={icons.call} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </SafeAreaView>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(TopHeader);
