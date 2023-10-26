import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {FONTS, icons} from '../../constants';

const PlaceRow = ({data, appTheme}: any) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{alignItems: 'center'}}>
        {data.description === 'Home' ? (
          <FastImage
            source={icons.home}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 20,
              height: 20,
              left: -8,
            }}
          />
        ) : (
          <FastImage
            source={icons.locationPin}
            resizeMode={FastImage.resizeMode.contain}
            style={{
              width: 20,
              height: 20,
              left: -8,
            }}
          />
        )}
      </View>

      <View style={{flex: 1}}>
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: 'bold',
            color: appTheme.textColor,
            left: 3,
            top: 2,
          }}>
          {data.description || data.vicinity}
        </Text>
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

export default connect(mapStateToProps)(PlaceRow);
