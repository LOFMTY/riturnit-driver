import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Controller} from 'react-hook-form';

import {SIZES, COLORS, FONTS} from '../../constants';

function FormInput({
  containerStyle,
  label,
  name,
  rules,
  placeholder = '',
  control,
  inputStyle,
  prependComponent,
  appendComponent,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  errorMsg = '',
  editable,
  autoFocus,
  didTouch,
  appTheme,
  inputContainerStyle,
  maxLength,
}: any) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={{...containerStyle}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>{label}</Text>
              <Text style={{color: COLORS.scarlet, ...FONTS.body4}}>
                {errorMsg}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: 50,
                paddingHorizontal: 15,
                borderRadius: SIZES.base,
                borderWidth: 0.4,
                borderColor: appTheme.buttonText,
                backgroundColor: COLORS.white,
                ...inputContainerStyle,
              }}>
              {prependComponent}
              <TextInput
                style={{flex: 1, ...FONTS.body3, ...inputStyle, }}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                editable={editable}
                autoFocus={autoFocus}
                onTouchStart={didTouch}
                placeholderTextColor={appTheme.buttonText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                onChangeText={onChange}
              />
              {appendComponent}
            </View>
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
}

function mapStateToProps(state: {themeReducer: {appTheme: any}; error: any}) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(FormInput);
