import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Storage} from 'aws-amplify';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {SIZES, FONTS} from '../../constants';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';

const DailyImage = ({appTheme, userImage, amount, name}: any) => {
  const [imageUri, setImageUri] = useState<any>(null);

  useEffect(() => {
    let unmounted = false
    if (userImage) {
      Storage.get(userImage).then(setImageUri);
    }
    return () => {
      unmounted = true;
    };
  }, [userImage]);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.base,
        borderRadius: SIZES.radius,
        backgroundColor: appTheme.tabBackgroundColor,
        padding: SIZES.radius,
      }}>
      <View style={{justifyContent: 'center'}}>
        <FastImage
          source={{uri: imageUri || DEFAULT_PROFILE_IMAGE}}
          resizeMode={FastImage.resizeMode.cover}
          style={{
            width: 30,
            height: 30,
            borderRadius: SIZES.base,
          }}
        />
      </View>

      <View style={{flex: 0.9, justifyContent: 'center'}}>
        <Text style={{...FONTS.h6, color: appTheme.textColor}}>{name}</Text>
      </View>

      {/* Amount */}
      <View style={{justifyContent: 'center'}}>
        <Text style={{...FONTS.h6, color: appTheme.textColor}}>${amount}</Text>
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

export default connect(mapStateToProps)(DailyImage);
