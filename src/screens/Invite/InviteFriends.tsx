import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {useQuery} from '@apollo/client';

import {COLORS, SIZES, FONTS, icons} from '../../constants';
import {TopHeader, TextButton} from '../../components';
import {GetDriverQuery, GetDriverQueryVariables} from '../../API';
import {useAuthContext} from '../../context/AuthContext';
import {getDriver} from '../../queries/Profile/DriverQueries';
import {CustomDrawerStackNavigatorParamList} from '../../type/navigation';

const InviteFriends = ({appTheme}: any) => {
  const navigation = useNavigation<CustomDrawerStackNavigatorParamList>();

  const {userID} = useAuthContext();

  const {loading, data} = useQuery<GetDriverQuery, GetDriverQueryVariables>(
    getDriver,
    {variables: {id: userID}},
  );
  const referralCode: any = data?.getDriver?.inviteCode;

  // copy to clipboard
  const copyToClipboard = () => {
    Clipboard.setString(referralCode);
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Invite friends" />

      {/* Lottie Image */}
      <View
        style={{
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          style={{width: 300, height: 300, marginBottom: 5}}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../assets/json/invite.json')}
        />
      </View>

      {/* Invite Text */}
      <View
        style={{
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.extraBold,
            color: appTheme.textColor,
            textAlign: 'center',
          }}>
          Invite Friends
        </Text>
        <Text
          style={{
            ...FONTS.h1,
            color: appTheme.textColor,
            textAlign: 'center',
          }}>
          Earn up to{' '}
          <Text
            style={{
              ...FONTS.h1,
              color: appTheme.textColor,
              textAlign: 'center',
            }}>
            $150 a day
          </Text>
        </Text>

        {/* Promo text */}
        <View
          style={{
            marginTop: SIZES.margin,
          }}>
          <Text
            style={{
              ...FONTS.body2,
              color: appTheme.buttonText,
              textAlign: 'center',
              lineHeight: 24,
            }}>
            When your friend sign up with your referral code, you can receive up
            to{' '}
            <Text
              style={{
                ...FONTS.body2,
                fontWeight: 'bold',
              }}>
              $150{' '}
            </Text>
          </Text>
        </View>
      </View>

      {/* Promo Code */}
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding * 2,
        }}>
        <Text style={{...FONTS.h5, color: appTheme.buttonText}}>
          SHARE YOUR INVITE CODE
        </Text>
        <View
          style={{
            marginTop: SIZES.radius,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            alignItems: 'center',
            paddingHorizontal: SIZES.padding * 2.5,
            backgroundColor: appTheme.tabBackgroundColor,
            borderRadius: SIZES.radius,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{...FONTS.h4, color: appTheme.textColor}}>
              {referralCode}
            </Text>
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={copyToClipboard}>
            <FastImage
              source={icons.copy}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* InviteFriends Button */}
      <TextButton
        label={'Invite'}
        labelStyle={{color: COLORS.white, ...FONTS.h5}}
        buttonContainerStyle={{
          height: 45,
          width: 200,
          marginTop: SIZES.height > 700 ? SIZES.padding : SIZES.margin,
          marginHorizontal: 90,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.gradient2,
        }}
        onPress={() =>
          navigation.navigate('ContactList', {
            inviteCode: referralCode,
          })
        }
      />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(InviteFriends);
