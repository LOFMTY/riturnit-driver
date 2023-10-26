import React, {memo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import PropTypes from 'prop-types';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const ListItem = ({item, onAdd, appTheme}: any) => {
  return (
    <TouchableOpacity onPress={onAdd}>
      <View style={{minHeight: 60, height: 80}}>
        <View
          style={{
            marginHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: COLORS.lightGray2,
          }}>
          <View style={{justifyContent: 'center', paddingRight: SIZES.base}}>
            <FastImage
              source={
                item.hasThumbnail ? {uri: item.thumbnailPath} : icons.avatar
              }
              resizeMode={FastImage.resizeMode.contain}
              style={{width: 50, height: 50, borderRadius: 100 / 2}}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              flex: 1,
              marginLeft: SIZES.base,
            }}>
            <Text
              style={{
                ...FONTS.h5,
                color: appTheme.textColor,
              }}>{`${item['givenName']} ${item['familyName']}`}</Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            marginHorizontal: SIZES.padding,
            marginVertical: 3,
            borderBottomWidth: 0.3,
            borderRadius: SIZES.padding,
            borderColor: appTheme.buttonText,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(memo(ListItem));

ListItem.propTypes = {
  item: PropTypes.object,
  onAdd: PropTypes.func,
};
