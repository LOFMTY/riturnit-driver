import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {SIZES, COLORS, FONTS} from '../../constants';
import {TextButton} from '../../components';

const SuccessfulWithdrawal = ({appTheme}: any) => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const withdrawnData = route.params?.data?.amount;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Lottie Image */}
      <View
        style={{
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          style={{width: 450, alignSelf: 'center'}}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../assets/json/Successful.json')}
        />
      </View>

      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h2, textAlign: 'center'}}>
          ${withdrawnData} withdrawn successfully!
        </Text>
      </View>

      <View style={{marginHorizontal: SIZES.padding * 4, marginTop: 15}}>
        <Text
          style={{
            ...FONTS.body2,
            textAlign: 'center',
            color: appTheme.buttonText,
          }}>
          Your money should be available between 3 - 4 hours
        </Text>
      </View>

      <TextButton
        label="Done"
        buttonContainerStyle={{
          height: 45,
          width: 270,
          backgroundColor: COLORS.gradient2,
          padding: SIZES.radius,
          borderRadius: SIZES.base,
          margin: 50,
        }}
        labelStyle={{
          color: COLORS.white,
          ...FONTS.h5,
        }}
        onPress={() => {
          navigation.reset({
            index: 1,
            routes: [{name: 'HomeScreen'}],
          });
        }}
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

export default connect(mapStateToProps)(SuccessfulWithdrawal);
