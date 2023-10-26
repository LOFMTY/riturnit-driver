import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

import {FONTS, SIZES, COLORS} from '../../constants';

const CardInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = '',
  prependComponent,
  appTheme,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  errorMsg = '',
  maxLength,
}: any) => {
  return (
    <View style={{...containerStyle}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: appTheme.textColor,
            ...FONTS.h6,
          }}>
          {label}
        </Text>
        <Text style={{color: COLORS.red, ...FONTS.h6}}>{errorMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 45,
          paddingHorizontal: 15,
          marginTop: SIZES.height > 700 ? SIZES.base : 6,
          borderRadius: SIZES.base,
          backgroundColor: appTheme.backgroundColor,
          ...inputContainerStyle,
        }}>
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            ...FONTS.body2,
            color: appTheme.textColor,
            backgroundColor: appTheme.backgroundColor,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={appTheme.buttonText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={text => onChange(text)}
        />
        {appendComponent}
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

export default connect(mapStateToProps)(CardInput);
