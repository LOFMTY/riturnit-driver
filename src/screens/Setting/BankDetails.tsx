import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {SIZES, COLORS, FONTS, icons} from '../../constants';
import {TopHeader} from '../../components';

const BankDetails = ({appTheme}: any) => {
  const navigation = useNavigation<any>();
  const routes = useRoute<any>();

  const accountDetails = routes?.params;

  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader title="Account Details" />

      <View
        style={{
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: SIZES.radius,
        }}>
        <LottieView
          style={{width: 180, alignSelf: 'center'}}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../assets/json/creditCard.json')}
        />
      </View>

      <View style={{backgroundColor: appTheme.tabBackgroundColor}}>
        {/* Bank Name */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: SIZES.margin,
            borderRadius: SIZES.radius,
          }}>
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={icons.bank}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.margin,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body4, color: appTheme.buttonText}}>
              Bank Name
            </Text>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              {accountDetails?.bankName}
            </Text>
          </View>
        </View>

        {/* Horizontal Rule */}
        <View
          style={{
            marginHorizontal: SIZES.radius,
            borderBottomWidth: 0.7,
            borderColor: COLORS.lightGray4,
          }}
        />

        {/* Account Name */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: SIZES.margin,
            borderRadius: SIZES.radius,
          }}>
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={icons.profile}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.margin,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body4, color: appTheme.buttonText}}>
              Account Name
            </Text>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              {accountDetails?.accountName}
            </Text>
          </View>
        </View>

        {/* Horizontal Rule */}
        <View
          style={{
            marginHorizontal: SIZES.radius,
            borderBottomWidth: 0.7,
            borderColor: COLORS.lightGray4,
          }}
        />

        {/* Account Number */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: SIZES.margin,
            borderRadius: SIZES.radius,
          }}>
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={icons.accountNumber}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.margin,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body4, color: appTheme.buttonText}}>
              Account Number
            </Text>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              {accountDetails?.accountNumber}
            </Text>
          </View>
        </View>

        {/* Horizontal Rule */}
        <View
          style={{
            marginHorizontal: SIZES.radius,
            borderBottomWidth: 0.7,
            borderColor: COLORS.lightGray4,
          }}
        />

        {/* Routing Number */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: SIZES.margin,
            borderRadius: SIZES.radius,
          }}>
          <View style={{justifyContent: 'center'}}>
            <FastImage
              source={icons.route}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.margin,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body4, color: appTheme.buttonText}}>
              Routing Number
            </Text>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              {accountDetails?.routingNumber}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(BankDetails);
