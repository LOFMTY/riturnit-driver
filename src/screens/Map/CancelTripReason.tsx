import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {TopHeader, TextButton} from '../../components';
import {SIZES, COLORS, FONTS} from '../../constants';
import { useTripContext } from '../../context/TripContext';
import {TripStatus} from '../../models';

const CancelTripReason = ({appTheme}: any) => {
  const navigation = useNavigation<any>();
  const {setDeliveryStatus} = useTripContext();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      reason: '',
    },
  });

  let storeData = (data: any) => {
    setDeliveryStatus(TripStatus.NEW);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'HomeScreen',
            params: {data: data},
          },
        ],
      }),
    );
  };

  function renderInputArea() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
        }}>
        <View style={{paddingHorizontal: 1, paddingTop: SIZES.radius}}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                multiline={true}
                numberOfLines={10}
                maxLength={100}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                returnKeyType={'done'}
                placeholder={'e.g. Please describe your reason'}
                placeholderTextColor={COLORS.gray}
                selectTextOnFocus={true}
                style={{
                  borderWidth: 0.3,
                  padding: 15,
                  height: 200,
                  ...FONTS.body3,
                  color: appTheme.textColor,
                  borderRadius: SIZES.base,
                  borderColor: COLORS.lightGray4,
                  backgroundColor: appTheme.backgroundColor,
                }}
              />
            )}
            name="reason"
          />
        </View>
        {errors.reason ? (
          <Text
            style={{
              color: COLORS.red,
              paddingLeft: 10,
              paddingTop: 3,
              ...FONTS.body4,
            }}>
            This field is required.
          </Text>
        ) : (
          <View />
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader
        title="Reason for cancellation"
        contentStyle={{paddingTop: SIZES.margin}}
        containerStyle={{
          height: '8%',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraHeight={200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {renderInputArea()}

        <TextButton
          label="Done"
          labelStyle={{...FONTS.h4, color: COLORS.white}}
          buttonContainerStyle={{
            height: 50,
            width: 270,
            alignSelf: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.gradient2,
          }}
          onPress={handleSubmit(storeData)}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(CancelTripReason);
