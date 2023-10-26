import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

import {FONTS} from '../../constants';

const TripDetailsHeader = ({appTheme, title, containerStyle}: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: appTheme.tabBackgroundColor,
        height: '12.5%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        ...containerStyle,
      }}>
      {/* Header Store Title */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color: appTheme.textColor,
            textAlign: 'center',
          }}>
          {title}
        </Text>
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

export default connect(mapStateToProps)(TripDetailsHeader);
