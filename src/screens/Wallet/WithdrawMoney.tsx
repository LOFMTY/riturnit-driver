import {View, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ALERT_TYPE, Root, Toast} from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidV4} from 'uuid';

import {SIZES, COLORS, FONTS, icons, dummyData} from '../../constants';
import {
  TopHeader,
  TextButton,
  CardTab,
  AddCardTab,
  FormInput,
  IconButton,
} from '../../components';

const userBalance = dummyData.drivers[0]?.remainBalance;
// const userBalance = 0;

const WithdrawMoney = ({appTheme}: any) => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const [amount, setAmount] = useState<any>('');
  const [isCard, setIsCard] = useState(false);
  const [cardDetails, setCardDetails] = useState<any>('');

  const onSubmit = () => {
    const withdrawalData = {
      amount: amount,
      details: route?.params?.newCardDetails,
    };
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SuccessfulWithdrawal',
          params: {
            data: withdrawalData,
          },
        },
      ],
    });
  };

  const deleteItem = (id: any) => {
    const newData = [...cardDetails];
    const prevIndex = cardDetails.findIndex((item: any) => item.id === id);
    newData.splice(prevIndex, 1);
    setCardDetails(newData);
    storePaymentMethod(newData);
  };

  const storePaymentMethod = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('key', jsonValue);
      // console.log('Payment method selected', jsonValue);
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'Something went wrong',
        autoClose: 1000,
      });
    }
  };

  const loadPayments = async () => {
    await AsyncStorage.getItem('key').then((value: any) => {
      const data = JSON.parse(value);
      if (data) {
        setCardDetails(data);
      }
    });
  };

  useEffect(() => {
    let unmounted = false;
    const details = route?.params?.cardDetails;
    if (details) {
      const newObj = {
        id: uuidV4(),
        bankName: details?.bankName,
        accountNumber: details?.accountNumber,
        cardNumber: details?.cardNumber,
        expiryDate: details?.expiryDate,
        cvv: details?.cvv,
      };
      setCardDetails([...cardDetails, newObj]);
      storePaymentMethod([...cardDetails, newObj]);
      // console.log('new payments', [...cardDetails, newObj]);
    }
    loadPayments();
    return () => {
      unmounted = true;
    };
  }, [route?.params?.cardDetails]);

  function renderWithdrawalAmount() {
    return (
      // {/* Input Amount */}
      <View
        style={{
          borderRadius: SIZES.base,
          marginHorizontal: 28,
        }}>
        <FormInput
          value={amount}
          returnKeyType={'done'}
          autoFocus={true}
          keyboardType="numeric"
          placeholder={'Enter amount to withdraw'}
          onChange={(value: React.SetStateAction<string>) => {
            setAmount(value);
          }}
          inputStyle={{
            color: appTheme.textColor,
            ...FONTS.body2,
            fontWeight: 'bold',
          }}
          inputContainerStyle={{
            backgroundColor: appTheme.backgroundColor,
            borderWidth: 0,
          }}
          prependComponent={
            <View
              style={{
                width: 25,
                justifyContent: 'center',
                top: 1.5,
              }}>
              <Text style={{...FONTS.h4, color: appTheme.buttonText}}>$</Text>
            </View>
          }
        />
      </View>
    );
  }

  function renderCardSection() {
    return (
      <View
        style={{
          marginTop: SIZES.base,
        }}>
        <SwipeListView
          data={[...(cardDetails || loadPayments)]}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          disableRightSwipe={true}
          rightOpenValue={-75}
          renderItem={({item}: any) => {
            // console.log('BANK ITEM', item);
            return (
              <CardTab
                bankDetail={item}
                isSelected={item == isCard}
                onPress={() => {
                  setIsCard(item);
                  // console.log('item selected', item);
                }}
              />
            );
          }}
          renderHiddenItem={(data: any) => (
            <IconButton
              containerStyle={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
              }}
              icon={icons.remove}
              iconStyle={{
                marginRight: 12,
                width: 20,
                height: 20,
              }}
              onPress={() => {
                deleteItem(data.item.id);
              }}
            />
          )}
        />
      </View>
    );
  }

  return (
    <Root>
      <View
        style={{
          flex: 1,
          backgroundColor: appTheme.backgroundColor,
        }}>
        <TopHeader title="Withdraw money" />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.margin,
            marginHorizontal: SIZES.margin,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{...FONTS.h5, color: appTheme.buttonText}}>
              Your available balance:
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                ...FONTS.h4,
                fontWeight: '800',
                letterSpacing: 0.7,
                color: appTheme.textColor,
              }}>
              ${userBalance?.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Withdrawal amount */}
        {renderWithdrawalAmount()}

        {cardDetails.length > 0 && (
          <View style={{paddingTop: SIZES.margin, paddingLeft: SIZES.padding}}>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              Payment Destination
            </Text>
          </View>
        )}

        {/* list of card/bank details */}
        {cardDetails && <>{renderCardSection()}</>}

        {cardDetails.length > 0 && (
          <TextButton
            disabled={!isCard}
            label={`Withdraw money`}
            labelStyle={{color: COLORS.white, ...FONTS.h6}}
            buttonContainerStyle={{
              width: 200,
              height: 45,
              alignSelf: 'center',
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding * 3.5,
              borderRadius: SIZES.base,
              backgroundColor: !isCard ? COLORS.gray : COLORS.gradient2,
            }}
            onPress={onSubmit}
          />
        )}

        {/* add card button */}
        <AddCardTab
          onPress={() => {
            if (!amount) {
              Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Insert amount',
                titleStyle: {...FONTS.body3},
                autoClose: 3000,
              });
            } else if (amount > userBalance) {
              Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'amount greater than available balance',
                titleStyle: {...FONTS.body3},
                autoClose: 1500,
              });
            } else if (userBalance === 0) {
              Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Insufficient balance available',
                titleStyle: {...FONTS.body3},
                autoClose: 1500,
              });
            } else {
              navigation.navigate('AddCard', {
                inputAmount: amount,
              });
            }
          }}
          containerStyle={{marginBottom: 60}}
        />
      </View>
    </Root>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}
export default connect(mapStateToProps)(WithdrawMoney);
