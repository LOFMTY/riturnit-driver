import {Control, Controller} from 'react-hook-form';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';

import {COLORS, FONTS, SIZES} from '../../constants';
import {Driver} from '../../models';

export type IEditableDriverField = 'name' | 'phone_number' | 'email' | 'image';
export type IEditableDriver = Pick<Driver, IEditableDriverField>;

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<IEditableDriver, object>;
  name: IEditableDriverField;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  rules?: object;
  appTheme: any;
  textInputStyle?: any;
}

const CustomInput = ({
  appTheme,
  label,
  editable,
  keyboardType,
  control,
  name,
  textInputStyle,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={{paddingTop: SIZES.base}}>
          <View
            style={{
              paddingHorizontal: 10,
            }}>
            <Text style={{color: appTheme.textColor, ...FONTS.h6}}>
              {label}
            </Text>
          </View>

          <View style={{paddingHorizontal: 10, paddingTop: 8}}>
            <TextInput
              value={value || ' '}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{
                borderWidth: 0.3,
                paddingLeft: 10,
                height: 45,
                ...FONTS.body3,
                borderRadius: SIZES.base,
                color: appTheme.textColor,
                backgroundColor: appTheme.inputBackgroundColor,
                borderColor: error ? COLORS.scarlet : appTheme.buttonText,
                ...textInputStyle,
              }}
              editable={editable}
              keyboardType={keyboardType}
              placeholder={label}
              multiline={multiline}
            />
          </View>
          {error && (
            <Text
              style={{
                color: COLORS.red2,
                paddingLeft: 10,
                paddingTop: 10,
                ...FONTS.h6,
              }}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      );
    }}
  />
);

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(CustomInput);
