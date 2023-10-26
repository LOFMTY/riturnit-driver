import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Storage} from 'aws-amplify';
import {AirbnbRating} from 'react-native-ratings';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {SIZES, COLORS, FONTS} from '../../constants';
import {DEFAULT_PROFILE_IMAGE} from '../../utilities/Utils';

const RatingItem = ({
  userImage,
  appTheme,
  name,
  dateOfComment,
  comment,
  rating,
}: any) => {
  const [userImg, setUserImg] = useState<any>(null);

  useEffect(() => {
    let unmounted = false;
    if (userImage) {
      Storage.get(userImage).then(setUserImg);
    }
    return () => {
      unmounted = true;
    };
  }, [userImage]);

  return (
    <View
      style={{
        padding: SIZES.radius,
        marginTop: SIZES.radius,
        backgroundColor: appTheme.tabBackgroundColor,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={{uri: userImg || DEFAULT_PROFILE_IMAGE}}
            resizeMode={FastImage.resizeMode.cover}
            style={{width: 30, height: 30, borderRadius: 100 / 2}}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: SIZES.base,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: appTheme.textColor,
              ...FONTS.body3,
              paddingTop: 2,
            }}>
            {name}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <AirbnbRating
            count={5}
            defaultRating={rating}
            size={15}
            showRating={false}
            isDisabled={true}
            selectedColor={COLORS.gradient2}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 4,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: appTheme.textColor,
              ...FONTS.body3,
              paddingTop: 2,
            }}>
            {comment}
          </Text>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            color: appTheme.textColor,
            ...FONTS.body4,
            fontWeight: 'bold',
            paddingTop: 3,
          }}>
          {dateOfComment}
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

export default connect(mapStateToProps)(RatingItem);
