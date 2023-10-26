import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {PlaceRow, TopHeader} from '../../../components';
import {SIZES, icons} from '../../../constants';

const AddressHome = ({appTheme}: any) => {
  const ref = useRef<any>();
  const navigation = useNavigation<any>();

  const [address, setAddress] = useState<any>(null);

  const storeHomeAddress = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('homeAddress', jsonValue);
    } catch (error) {
      // saving error
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'Something went wrong',
        autoClose: 1000,
      });
    }
  };

  const checKNavigation = () => {
    if (address) {
      const {lat, lng} = address?.details?.geometry?.location;
      let param = ref.current?.getAddressText();
      navigation.navigate({
        name: 'AccountDetails',
        params: {userAddress1: param},
        merge: true,
      });
      storeHomeAddress({lat: lat, lng: lng});
    }
  };

  useEffect(() => {
    let unmounted = false;
    checKNavigation();
    return () => {
      unmounted = true;
    };
  }, [address]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader
        title="Home Address"
        onPress={() => navigation.goBack()}
        titleContainerStyle={{alignItems: 'center', paddingRight: 30}}
      />
      <View
        style={{
          padding: SIZES.radius,
          height: '100%',
        }}>
        <GooglePlacesAutocomplete
          ref={ref}
          placeholder="Search for a new address"
          minLength={4}
          nearbyPlacesAPI="GooglePlacesSearch"
          listViewDisplayed="auto"
          debounce={400}
          currentLocation={true}
          currentLocationLabel="Current location"
          enablePoweredByContainer={false}
          suppressDefaultStyles
          onTimeout={() =>
            Toast.show({
              type: ALERT_TYPE.WARNING,
              title: 'Warning',
              textBody: 'Request Timeout',
              autoClose: 1000,
            })
          }
          onPress={(data, details = null) => {
            setAddress({data, details});
          }}
          onFail={() =>
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Warning',
              textBody: 'Address Failed',
              autoClose: 1000,
            })
          }
          onNotFound={() =>
            Toast.show({
              type: ALERT_TYPE.WARNING,
              title: 'Warning',
              textBody: 'Address Not Found',
              autoClose: 1000,
            })
          }
          fetchDetails={true}
          query={{
            key: 'AIzaSyDPMHmRw3LbdXZCfrLu7DxmhDgv2u_9SKU',
            language: 'en',
          }}
          renderDescription={data => data.description}
          renderRow={data => <PlaceRow data={data} />}
          textInputProps={{
            placeholderTextColor: appTheme.textColor,
            autoFocus: true,
          }}
          styles={{
            textInput: {
              marginLeft: SIZES.padding * 1.3,
              backgroundColor: appTheme.tabBackgroundColor,
              borderRadius: SIZES.radius,
              height: 50,
              padding: 10,
              color: appTheme.textColor,
              fontSize: SIZES.body2,
              marginVertical: 5,
            },
            listView: {
              backgroundColor: appTheme.backgroundColor,
              color: appTheme.textColor,
              position: 'absolute',
              top: 60,
              left: -5,
            },
            loader: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 20,
              padding: 20,
            },
            row: {
              backgroundColor: appTheme.backgroundColor,
              color: appTheme.textColor,
              padding: 20,
              height: 50,
              fontSize: SIZES.body2,
            },
            autocompleteContainer: {
              backgroundColor: appTheme.backgroundColor,
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10,
            },
          }}
        />
        {/*  Search Icon */}
        <FastImage
          source={icons.search}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            width: 23,
            height: 23,
            marginTop: SIZES.radius,
          }}
        />
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

export default connect(mapStateToProps)(AddressHome);
