import {View, Text, Modal} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {COLORS, SIZES, FONTS} from '../../constants';
import TextButton from '../../components/Button/TextButton';

const ModalCancelItem = ({appTheme, isVisible, onPress, onCancelTrip}: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Modal visible={isVisible} animationType="slide" transparent={true}>
        <View
          style={{
            padding: SIZES.padding,
            width: 280,
            marginTop: 300,
            alignSelf: 'center',
            backgroundColor: appTheme.tabBackgroundColor,
            borderRadius: SIZES.radius,
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: appTheme.textColor,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Are you sure you want to cancel ?
          </Text>

          <View
            style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.margin,
              flexDirection: 'row',
              justifyContent: 'space-between',
              opacity: 0.9,
            }}>
            <TextButton
              label="Yes"
              labelStyle={{fontWeight: '800', ...FONTS.h5, color: COLORS.white}}
              buttonContainerStyle={{
                height: 40,
                width: 80,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.caribbeanGreen,
              }}
              onPress={onCancelTrip}
            />
            <TextButton
              label="No"
              labelStyle={{fontWeight: '800', ...FONTS.h5, color: COLORS.white}}
              buttonContainerStyle={{
                height: 40,
                width: 80,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.red,
              }}
              onPress={onPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(ModalCancelItem);
