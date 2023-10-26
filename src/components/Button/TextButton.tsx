import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text} from 'react-native';

import {FONTS, SIZES, COLORS} from '../../constants';

const TextButton = ({
  buttonContainerStyle,
  appTheme,
  disabled,
  label,
  labelStyle,
  label2 = '',
  label2Style,
  onPress,
}: any) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.gradient2,
        borderRadius: SIZES.base,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={{
          justifyContent: 'center',
          ...FONTS.h4,
          color: appTheme.textColor,
          ...labelStyle,
        }}>
        {label}
      </Text>

      {label2 != '' && (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            color: appTheme.textColor,
            ...FONTS.h3,
            ...label2Style,
          }}>
          {label2}
        </Text>
      )}
    </TouchableOpacity>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(TextButton);
