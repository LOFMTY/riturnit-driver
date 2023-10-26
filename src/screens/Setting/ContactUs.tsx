import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Platform, Linking} from 'react-native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';

import {COLORS, SIZES, FONTS, icons} from '../../constants';
import {TopHeader, ContactUsHorizontalTabs} from '../../components';

const AboutUs = ({navigation, appTheme}: any) => {
  const dialCall = () => {
    const phoneNumber = `tel:+1(650)-300-4335`;
    Linking.openURL(phoneNumber);
  };

  function renderContactUsList() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          padding: SIZES.margin,
          borderRadius: SIZES.base,
          marginHorizontal: SIZES.radius,
          // backgroundColor: appTheme.tabBackgroundColor,
        }}>
        <LottieView
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginBottom: 5,
          }}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../assets/json/contact.json')}
        />

        {/* header text */}
        <View style={{paddingTop: SIZES.base}}>
          <Text
            style={{
              ...FONTS.h5,
              color: appTheme.textColor,
            }}>
            We are available to support you all the way, Reach out to us today.
          </Text>
        </View>

        {/* Contact Us Header */}
        <View
          style={{
            paddingTop: SIZES.padding,
          }}>
          <Text
            style={{
              ...FONTS.body2,
              fontWeight: 'bold',
              color: appTheme.textColor,
            }}>
            Office
          </Text>

          {/* Office Address */}
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.buttonText,
              fontWeight: '500',
              paddingTop: 5,
            }}>
            20, Dean Washington Street,
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.buttonText,
              fontWeight: '500',
            }}>
            New Hampton, Florida,
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.buttonText,
              fontWeight: '500',
            }}>
            20039, USA
          </Text>
        </View>

        {/* Office Contact */}
        <View
          style={{
            flexDirection: 'row',
            paddingTop: SIZES.margin,
            justifyContent: 'space-between',
          }}>
          <FastImage
            source={icons.call}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />

          <TouchableOpacity
            onPress={dialCall}
            style={{flex: 1, paddingLeft: 10}}>
            <Text
              style={{
                ...FONTS.body3,
                fontWeight: 'bold',
                letterSpacing: 0.5,
                color: COLORS.gradient1,
              }}>
              +1 650 300 4335
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingTop: 6,
            justifyContent: 'space-between',
          }}>
          <FastImage
            source={icons.mail}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />

          <TouchableOpacity
            style={{flex: 1, paddingLeft: 10}}
            onPress={() =>
              Linking.openURL(
                'mailto:support@riturnint.com?subject=sendmail&body=details',
              )
            }>
            <Text
              style={{
                ...FONTS.body3,
                letterSpacing: 0.5,
                color: appTheme.textColor,
                fontStyle: 'italic',
              }}>
              support@riturnit.com
            </Text>
          </TouchableOpacity>
        </View>

        {/* Website */}
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 6,
            justifyContent: 'space-between',
          }}>
          <FastImage
            source={icons.worldwide}
            resizeMode="contain"
            style={{
              height: 17,
              width: 17,
              top: 3,
            }}
          />
          <TouchableOpacity
            style={{flex: 1, paddingLeft: 10}}
            onPress={() => Linking.openURL('https://www.riturnit.com')}>
            <Text
              style={{
                ...FONTS.body3,
                letterSpacing: 0.5,
                color: COLORS.gradient1,
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              www.riturnit.com
            </Text>
          </TouchableOpacity>
        </View>

        {/* Connect on Social */}
        <View style={{paddingTop: SIZES.padding * 1.5}}>
          <Text
            style={{
              ...FONTS.body2,
              fontWeight: 'bold',
              color: appTheme.textColor,
            }}>
            Connect with us on our social platforms.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingTop: SIZES.radius,
            justifyContent: 'space-between',
            marginRight: 100,
          }}>
          <ContactUsHorizontalTabs
            imageIcon={icons.facebook}
            onPress={() => navigation.navigate('Help')}
          />
          <ContactUsHorizontalTabs
            imageIcon={icons.twitter}
            onPress={() => navigation.navigate('Wallet')}
            containerStyle={{paddingLeft: SIZES.padding}}
          />
          <ContactUsHorizontalTabs
            imageIcon={icons.instagram}
            onPress={() => navigation.navigate('TripList')}
            containerStyle={{flex: 1, paddingRight: 20}}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Contact Us" />
      {renderContactUsList()}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AboutUs);
