import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {SIZES, icons, FONTS} from '../../constants';

const AddPaymentTab = ({
  cardNumber,
  bankName,
  onPress,
  appTheme,
  bankLogo,
}: any) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: SIZES.base,
        marginHorizontal: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: appTheme.backgroundColor,
        padding: SIZES.base,
        borderRadius: SIZES.radius,
      }}>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={bankLogo}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.margin,
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h5, color: appTheme.textColor, lineHeight: 22}}>
          {bankName}
        </Text>
        <Text style={{...FONTS.h6, color: appTheme.buttonText}}>
          ---- {cardNumber}
        </Text>
      </View>

      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => navigation.navigate('BankDetails')}>
        <FastImage
          source={icons.right}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AddPaymentTab);
