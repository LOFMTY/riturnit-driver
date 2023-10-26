import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import {v4 as uuidV4} from 'uuid';

import {SIZES, COLORS, FONTS} from '../../constants';
import {
  TopHeader,
  TextButton,
  CardInput,
  CardInputCheck,
  FormInput,
} from '../../components';
import {utilities} from '../../utilities';

const AddCard = ({appTheme}: any) => {
  const navigation = useNavigation<any>();

  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');

  function isEnableAddCard() {
    return (
      bankName != '' &&
      accountNumber != '' &&
      cardNumber != '' &&
      expiryDate != '' &&
      cvv != '' &&
      cardNumberError == '' &&
      expiryDateError == '' &&
      cvvError == ''
    );
  }

  const cardDetails = () => {
    const newCardDetails = {
      id: uuidV4(),
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      bankName: bankName,
      accountNumber: accountNumber,
    };
    // console.log('card value', newCardDetails);
    navigation.navigate({
      name: 'WithdrawMoney',
      params: {cardDetails: newCardDetails},
      merge: true,
    });
  };

  function renderBankDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
        }}>
        <View style={{}}>
          <Text
            style={{
              color: appTheme.textColor,
              ...FONTS.h6,
              fontWeight: 'bold',
            }}>
            Bank Name{' '}
          </Text>

          <FormInput
            value={bankName}
            onChange={setBankName}
            containerStyle={{marginTop: -5}}
            inputStyle={{...FONTS.body2, color: appTheme.textColor}}
            inputContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
              borderWidth: 0,
              height: 45,
              borderRadius: SIZES.base,
            }}
          />
        </View>

        <View style={{paddingTop: SIZES.radius}}>
          <Text
            style={{
              color: appTheme.textColor,
              ...FONTS.h6,
              fontWeight: 'bold',
            }}>
            Account Number{' '}
          </Text>

          <FormInput
            keyboardType="numeric"
            value={accountNumber}
            onChange={setAccountNumber}
            containerStyle={{marginTop: -5}}
            inputStyle={{...FONTS.body2, color: appTheme.textColor}}
            inputContainerStyle={{
              backgroundColor: appTheme.tabBackgroundColor,
              borderWidth: 0,
              height: 45,
              borderRadius: SIZES.base,
            }}
          />
        </View>
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
        }}>
        {/* Card Number */}
        <CardInput
          label="Card Number"
          keyboardType="number-pad"
          maxLength={19}
          value={cardNumber}
          onChange={(value: any) => {
            setCardNumber(
              value
                .replace(/\s/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim(),
            );
            utilities.validateInput(value, 19, setCardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <CardInputCheck value={cardNumber} error={cardNumberError} />
          }
        />

        {/* Expiry Date */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <CardInput
            label="Expiry Date"
            value={expiryDate}
            keyboardType="numbers-and-punctuation"
            placeholder="MM/YY"
            maxLength={5}
            containerStyle={{
              flex: 1,
            }}
            onChange={(value: any) => {
              utilities.validateInput(value, 5, setExpiryDateError);
              setExpiryDate(value);
            }}
            appendComponent={
              <CardInputCheck value={expiryDate} error={expiryDateError} />
            }
          />

          {/* / CVV * */}
          <CardInput
            label="CVV"
            value={cvv}
            maxLength={3}
            keyboardType="number-pad"
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            onChange={(value: any) => {
              utilities.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            appendComponent={<CardInputCheck value={cvv} error={cvvError} />}
          />
        </View>
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
        title="New Card"
        contentStyle={{paddingTop: SIZES.margin}}
        containerStyle={{
          height: '9%',
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
        {renderBankDetails()}
        {renderForm()}

        <TextButton
          disabled={!isEnableAddCard()}
          label="Add card"
          labelStyle={{...FONTS.h5, color: COLORS.white}}
          buttonContainerStyle={{
            height: 50,
            padding: SIZES.radius,
            marginTop: SIZES.padding * 3,
            borderRadius: SIZES.base,
            backgroundColor: isEnableAddCard() ? COLORS.gradient2 : COLORS.gray,
            marginHorizontal: SIZES.padding * 2,
          }}
          onPress={cardDetails}
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

export default connect(mapStateToProps)(AddCard);
