import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {SIZES, FONTS} from '../../constants';

const DailyDetail = ({
  title,
  subTitle,
  containerStyle,
  titleStyle,
  appTheme,
}: any) => {
  return (
    <View style={{marginHorizontal: SIZES.radius}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: SIZES.base,
          ...containerStyle,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.buttonText,
              ...titleStyle,
            }}>
            {title}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{...FONTS.h5, color: appTheme.textColor}}>
            {subTitle}
          </Text>
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

export default connect(mapStateToProps)(DailyDetail);
