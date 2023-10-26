import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {COLORS, SIZES, FONTS} from '../../constants';
import {TopHeader} from '../../components';

const PrivacyPolicy = ({appTheme}: any) => {
  function renderSection() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
        }}>
        <ScrollView
          indicatorStyle={'white'}
          style={{
            marginTop: 10,
            padding: SIZES.margin,
            height: '80%',
            borderRadius: SIZES.radius,
            backgroundColor: appTheme.tabBackgroundColor,
          }}>
          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus risus
            mauris cursus donec urna tristique dictum volutpat. Metus, tempus ut
            quisque in tincidunt tristique nisi mi. Sed et vel nunc nullam
            maecenas. Nec at nunc lacus massa gravida mus et.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus risus
            mauris cursus donec urna tristique dictum volutpat. Metus, tempus ut
            quisque in tincidunt tristique nisi mi. Sed et vel nunc nullam
            maecenas. Nec at nunc lacus massa gravida mus et.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus risus
            mauris cursus donec urna tristique dictum volutpat. Metus, tempus ut
            quisque in tincidunt tristique nisi mi. Sed et vel nunc nullam
            maecenas. Nec at nunc lacus massa gravida mus et.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus risus
            mauris cursus donec urna tristique dictum volutpat. Metus, tempus ut
            quisque in tincidunt tristique nisi mi. Sed et vel nunc nullam
            maecenas. Nec at nunc lacus massa gravida mus et.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus risus
            mauris cursus donec urna tristique dictum volutpat. Metus, tempus ut
            quisque in tincidunt tristique nisi mi. Sed et vel nunc nullam
            maecenas. Nec at nunc lacus massa gravida mus et.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus risus
            mauris cursus donec urna tristique dictum volutpat. Metus, tempus ut
            quisque in tincidunt tristique nisi mi. Sed et vel nunc nullam
            maecenas. Nec at nunc lacus massa gravida mus et.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              paddingBottom: 10,
              color: appTheme.textColor,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
            suspendisse risus, turpis sed turpis urna neque. Dictumst purus diam
            venenatis pretium adipiscing turpis risus donec consectetur. Augue
            sit enim a, commodo ac tincidunt quis risus pellentesque. Fusce vel
            feugiat rhoncus malesuada.
          </Text>
          <View style={{height: 100}} />
        </ScrollView>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Security & Privacy" />
      {renderSection()}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(PrivacyPolicy);
