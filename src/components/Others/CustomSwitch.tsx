import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';

const CustomSwitch = ({onChange, value}: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}>
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.caribbeanGreen : COLORS.lightGray5,
            }}
          />
        </View>

        {/* <Text
          style={{
            color: value ? COLORS.gradient2 : COLORS.gray,
            marginLeft: SIZES.base,
            ...FONTS.body2,
            fontWeight: 'bold',
            top: 5,
          }}>
          Save Me
        </Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 50,
    height: 25,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 20,
    borderColor: COLORS.caribbeanGreen,
    backgroundColor: COLORS.white,
  },
  switchOffContainer: {
    width: 50,
    height: 25,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
});

export default CustomSwitch;
