import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {COLORS, SIZES, icons, images} from '../../constants';

const ReceiptModal = ({onCancel, receiptImage, appTheme}: any) => {
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
        }}
        onPress={onCancel}>
        <FastImage
          source={icons.close}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={COLORS.red}
          style={{
            width: 17,
            height: 17,
          }}
        />
      </TouchableOpacity>

      {/* Smiley Faces */}
      <View
        style={{
          marginTop: SIZES.radius,
        }}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={{uri: receiptImage}}
            resizeMode={FastImage.resizeMode.contain}
            style={{width: 300, height: 300, alignSelf: 'center'}}
          />
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

export default connect(mapStateToProps)(ReceiptModal);
