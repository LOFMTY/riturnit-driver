import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {SIZES, FONTS} from './../../constants';
import {TopHeader} from '../../components';

const TermsConditions = ({appTheme}: any) => {
  function renderIntroduction() {
    return (
      <View
        style={{
          padding: 20,
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: appTheme.tabBackgroundColor,
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: appTheme.textColor,
          }}>
          1. Introduction
        </Text>

        <Text
          style={{
            marginTop: SIZES.radius,
            ...FONTS.body4,
            color: appTheme.textColor,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          lacus malesuada, tempus ipsum vel, efficitur urna. Maecenas lacinia
          tellus sem, non suscipit elit semper eget. In hac habitasse platea
          dictumst. Aliquam ultricies volutpat enim quis sodales. Maecenas
          accumsan congue laoreet. Morbi ac nunc eget ex viverra dapibus nec ut
          nisi. Nulla facilisi. Etiam eget imperdiet nulla. Fusce mollis a
          tortor ac ornare. Aliquam erat volutpat. Phasellus scelerisque quis
          sem id ornare. Nunc suscipit purus consequat sapien pharetra, a
          consectetur neque cursus.
        </Text>
      </View>
    );
  }

  function renderCancelOrder() {
    return (
      <View
        style={{
          padding: 20,
          marginTop: SIZES.padding,
          backgroundColor: appTheme.tabBackgroundColor,
          borderRadius: SIZES.radius,
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: appTheme.textColor,
          }}>
          2. Cancel Order
        </Text>

        <Text
          style={{
            marginTop: SIZES.radius,
            ...FONTS.body4,
            color: appTheme.textColor,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          lacus malesuada, tempus ipsum vel, efficitur urna. Maecenas lacinia
          tellus sem, non suscipit elit semper eget. In hac habitasse platea
          dictumst. Aliquam ultricies volutpat enim quis sodales. Maecenas
          accumsan congue laoreet. Morbi ac nunc eget ex viverra dapibus nec ut
          nisi. Nulla facilisi. Etiam eget imperdiet nulla. Fusce mollis a
          tortor ac ornare. Aliquam erat volutpat. Phasellus scelerisque quis
          sem id ornare. Nunc suscipit purus consequat sapien pharetra, a
          consectetur neque cursus.
        </Text>
      </View>
    );
  }

  function renderRefunds() {
    return (
      <View
        style={{
          padding: 20,
          marginTop: SIZES.padding,
          backgroundColor: appTheme.tabBackgroundColor,
          borderRadius: SIZES.radius,
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: appTheme.textColor,
          }}>
          3. Refunds
        </Text>

        <Text
          style={{
            marginTop: SIZES.radius,
            ...FONTS.body4,
            color: appTheme.textColor,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          lacus malesuada, tempus ipsum vel, efficitur urna. Maecenas lacinia
          tellus sem, non suscipit elit semper eget. In hac habitasse platea
          dictumst. Aliquam ultricies volutpat enim quis sodales. Maecenas
          accumsan congue laoreet. Morbi ac nunc eget ex viverra dapibus nec ut
          nisi. Nulla facilisi. Etiam eget imperdiet nulla. Fusce mollis a
          tortor ac ornare. Aliquam erat volutpat. Phasellus scelerisque quis
          sem id ornare. Nunc suscipit purus consequat sapien pharetra, a
          consectetur neque cursus.
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Terms and Conditions" titleStyle={{...FONTS.h4}} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}>
        {renderIntroduction()}
        {renderCancelOrder()}
        {renderRefunds()}
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(TermsConditions);
