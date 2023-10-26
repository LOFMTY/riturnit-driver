import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {DataStore} from 'aws-amplify';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import {SIZES, icons, FONTS, COLORS} from '../../../constants';
import NoReturnsAvailable from './NoReturnsAvailable';
import {useTripContext} from '../../../context/TripContext';
import {Trips} from '../../../models';
import NoVehicle from './NoVehicle';
import NotRegistered from './NotRegistered';

const FindingRequest = ({appTheme}: any) => {
  const navigation = useNavigation<any>();

  const inputRef = useRef<any>();

  const isFocused = useIsFocused();

  const {newRequest, selectedVehicle, driverDetail, fetchAllTrips} =
    useTripContext();

  useEffect(() => {
    fetchAllTrips();
    const subscription = DataStore.observe(Trips, newRequest?.id).subscribe(
      msg => {
        if (msg.opType === 'UPDATE') {
          fetchAllTrips();
        }
      },
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const firstItem = newRequest[0];

    setTimeout(() => {
      if (!firstItem) {
        return;
      } else {
        inputRef.current &&
          navigation.navigate('RideRequest', {trip: firstItem});
      }
    }, 3000);
  }, [newRequest, inputRef, isFocused]);

  // console.log('request', newRequest);

  function renderFindingNewTrips() {
    return (
      <View>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: appTheme.tabIndicatorBackgroundColor,
            height: 50,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <FastImage
              source={icons.status}
              resizeMode="contain"
              style={{width: 30, height: 30}}
              tintColor={COLORS.caribbeanGreen}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: SIZES.radius,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h5, color: appTheme.textColor}}>
              Finding trips...
            </Text>
          </View>
          {/* Lottie Image */}
          <View
            style={{
              justifyContent: 'center',
            }}>
            <LottieView
              style={{width: 55, alignSelf: 'center'}}
              autoPlay
              speed={1.5}
              loop={true}
              source={require('../../../assets/json/circular.json')}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: SIZES.radius,
            marginHorizontal: SIZES.margin,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h5, color: COLORS.gradient2}}>
            Opportunities nearby
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={{justifyContent: 'center'}}
              onPress={() => navigation.navigate('InviteFriends')}>
              <Text
                style={{
                  ...FONTS.body3,
                  color: appTheme.buttonText,
                  fontWeight: 'bold',
                }}>
                Refer a friend and earn $10
              </Text>
            </Pressable>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingTop: SIZES.base,
              }}
              onPress={() => navigation.navigate('InviteFriends')}>
              <FastImage
                source={icons.right}
                style={{width: 25, height: 25, top: -5}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView ref={inputRef}>
      {driverDetail?.verificationStatus !== 'COMPLETE' ? (
        <NotRegistered />
      ) : !selectedVehicle ? (
        <NoVehicle />
      ) : newRequest.length > 0 ? (
        <>{renderFindingNewTrips()}</>
      ) : (
        <NoReturnsAvailable />
      )}
    </SafeAreaView>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(FindingRequest);
