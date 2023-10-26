import {useRef, useState, useEffect} from 'react';
import {
  Linking,
  SafeAreaView,
  useWindowDimensions,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {OpenMapDirections} from 'react-native-navigation-directions';
import {useMutation} from '@apollo/client';
import {ALERT_TYPE, Root, Toast} from 'react-native-alert-notification';

import {
  OnCenterButton,
  AvailableBalance,
  DirectionsButton,
  MapBackButton,
  CustomMarker,
} from '../../components';
import {COLORS, SIZES, FONTS, icons} from '../../constants';
import {timeConvert} from '../../utilities/service';
import {GOOGLE_MAPS_APIKEY} from '../../utilities/Utils';
import {
  MapStackNavigatorParamList,
  RideRequestRouteProp,
} from '../../type/navigation';
import {useUserLocationContext} from '../../context/UserLocationContext';
import {useTripContext} from '../../context/TripContext';
import ViewItems from './ViewItems';
import NewRequestPopUp from './NewRequestPopUp';
import AcceptedRequest from './AcceptedRequest';
import DropOff from './DropOff';
import ModalCancelItem from './ModalCancelItem';
import {UpdateDriverMutation, UpdateDriverMutationVariables} from '../../API';
import {updateDriver} from '../../queries/Profile/DriverQueries';

const RideRequest = ({appTheme}: any) => {
  const {width, height} = useWindowDimensions();

  const mapRef2 = useRef<any>(null);
  const mapRef3 = useRef<any>(null);
  const mapRef4 = useRef<any>(null);

  const navigation = useNavigation<MapStackNavigatorParamList>();
  const route = useRoute<RideRequestRouteProp>();
  const {trip}: any = route.params;

  const {driverLocation} = useUserLocationContext();
  const {
    setTotalKm,
    setTripsId,
    setTotalMinutes,
    acceptTrip,
    totalKm,
    mapRef,
    pickUp,
    deliveryStatus,
    completeTrip,
    totalMinutes,
    driverDetail,
  } = useTripContext();

  const {
    id,
    pickup_lat,
    pickup_lng,
    dropoff_lat,
    dropoff_lng,
    pickup_location_description,
    dropoff_location_description,
    trip_cost,
    duration,
    distance,
    store_name,
    store_image,
    user_name,
    user_photo,
    mobile_number,
  }: any = trip;

  const bottomSheetRef = useRef<any>(null);

  const [showItemModal, setShowItemModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // UPDATE DRIVER POSITION - LAT & LNG
  const [doUpdateDriver] = useMutation<
    UpdateDriverMutation,
    UpdateDriverMutationVariables
  >(updateDriver);

  const updateDriverPosition = async () => {
    try {
      const res = await doUpdateDriver({
        variables: {
          input: {
            id: driverDetail?.id,
            lat: driverLocation?.latitude,
            lng: driverLocation?.longitude,
            _version: driverDetail?._version,
          },
        },
      });
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  useEffect(() => {
    let unmounted = false;
    if (!driverLocation) {
      return;
    }
    updateDriverPosition();
    return () => {
      unmounted = true;
    };
  }, [driverLocation]);

  useEffect(() => {
    const controller = new AbortController();
    if (!id) {
      return;
    }
    setTripsId(id);
    setTimeout(() => {}, 3000);

    return () => controller?.abort();
  }, [id]);

  const callCustomer = () => {
    const phoneNumber = `${mobile_number}`;
    Linking.openURL(phoneNumber);
  };

  const onCenter = () => {
    mapRef.current.animateToRegion(
      {
        ...driverLocation,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      2500,
    );
  };

  // DRIVER ACCEPT TRIP ORDER REQUEST
  const acceptOrder = async () => {
    if (deliveryStatus === 'NEW') {
      bottomSheetRef.current?.collapse();
      mapRef4.current?.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      await acceptTrip();
    } else if (deliveryStatus === 'ACCEPTED') {
      bottomSheetRef.current?.collapse();
      mapRef2.current?.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      await pickUp();
    } else if (deliveryStatus === 'PICKED_UP') {
      bottomSheetRef.current?.collapse();
      mapRef3.current?.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
      await completeTrip();
      navigation.reset({
        index: 0,
        routes: [{name: 'TripDetails'}],
      });
    }
  };

  // OpenMapDirection
  const callShowDirections = () => {
    if (deliveryStatus === 'ACCEPTED') {
      const startPoint = {
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
      };
      const endPoint = {
        latitude: parseFloat(pickup_lat),
        longitude: parseFloat(pickup_lng),
      };
      const transportPlan = 'd';
      OpenMapDirections(startPoint, endPoint, transportPlan).then(
        (res: any) => {
          // console.log(res);
        },
      );
    } else {
      const startPoint = {
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
      };
      const endPoint = {
        latitude: parseFloat(dropoff_lat),
        longitude: parseFloat(dropoff_lng),
      };
      const transportPlan = 'd';
      OpenMapDirections(startPoint, endPoint, transportPlan).then(
        (res: any) => {
          // console.log(res);
        },
      );
    }
  };

  const customerLocation = {
    name: user_name,
    latitude: parseFloat(pickup_lat),
    longitude: parseFloat(pickup_lng),
    description: pickup_location_description,
  };

  const storeLocation = {
    name: store_name,
    latitude: parseFloat(dropoff_lat),
    longitude: parseFloat(dropoff_lng),
    description: dropoff_location_description,
  };

  if (!trip || !driverLocation) {
    return (
      <ActivityIndicator
        style={{flex: 1, backgroundColor: appTheme.backgroundColor}}
        size="large"
      />
    );
  }

  return (
    <Root>
      <SafeAreaView style={{flex: 1}}>
        <ViewItems
          isVisible={showItemModal}
          id={id}
          onPress={() => setShowItemModal(!showItemModal)}
        />

        <ModalCancelItem
          isVisible={showCancelModal}
          onPress={() => setShowCancelModal(!showCancelModal)}
          onCancelTrip={() => {
            setShowCancelModal(false);
            navigation.navigate('CancelTrip');
          }}
        />

        {driverLocation?.latitude ? (
          <MapView
            ref={mapRef}
            style={{width, height, ...StyleSheet.absoluteFillObject}}
            customMapStyle={appTheme.mapStyle}
            showsUserLocation={true}
            provider={PROVIDER_GOOGLE}
            followsUserLocation={true}
            userLocationPriority="high"
            initialRegion={driverLocation}
            showsMyLocationButton={false}>
            <MapViewDirections
              ref={mapRef}
              apikey={GOOGLE_MAPS_APIKEY}
              origin={driverLocation}
              destination={
                deliveryStatus === 'ACCEPTED' ? customerLocation : storeLocation
              }
              waypoints={deliveryStatus === 'NEW' ? [customerLocation] : []}
              splitWaypoints={true}
              onReady={result => {
                setTotalMinutes(result.duration);
                setTotalKm(result.distance / 1.609);
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 10,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 10,
                    top: SIZES.height / 8,
                  },
                });
              }}
              timePrecision="now"
              optimizeWaypoints={true}
              strokeWidth={5}
              strokeColor={COLORS.gradient2}
              onError={() =>
                Toast.show({
                  type: ALERT_TYPE.DANGER,
                  title: 'Error',
                  titleStyle: {...FONTS.body3},
                  textBody: 'Route unavailable',
                  autoClose: 700,
                })
              }
            />

            {/* Customer and Store Location Map Marker */}
            <CustomMarker data={customerLocation} icon={icons.placeholder} />
            <CustomMarker data={storeLocation} icon={icons.shop} />
          </MapView>
        ) : (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center'}}
            size={'large'}
            color={'#3580ff'}
          />
        )}
      </SafeAreaView>

      {/*  Directions Button */}
      {deliveryStatus === 'ACCEPTED' && (
        <DirectionsButton onPress={callShowDirections} />
      )}
      {deliveryStatus === 'PICKED_UP' && (
        <DirectionsButton onPress={callShowDirections} />
      )}

      {/* Center button */}
      {driverLocation?.latitude && (
        <OnCenterButton
          onCenter={onCenter}
          containerStyle={{bottom: SIZES.height > 700 ? height * 0.895 : 620}}
        />
      )}

      {/* go back buttons */}
      {driverLocation?.latitude && deliveryStatus === 'NEW' && (
        <MapBackButton icon={icons.back} onPress={() => navigation.goBack()} />
      )}

      {/* New Request PopUp */}
      {deliveryStatus === 'NEW' && (
        <NewRequestPopUp
          customerName={user_name}
          customerImg={user_photo}
          price={new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 4,
          }).format(trip_cost)}
          distance={distance}
          time={timeConvert(duration)}
          customerAddress={pickup_location_description}
          storeName={store_name}
          storeAddress={dropoff_location_description}
          onAccept={acceptOrder}
          onViewItems={() =>
            navigation.navigate('ViewItems', {
              tripId: trip?.id,
              userId: trip?.userID,
            })
          }
        />
      )}

      {/* Order Accepted */}
      {deliveryStatus === 'ACCEPTED' && (
        <AcceptedRequest
          customerName={user_name}
          customerImg={user_photo}
          customerAddress={pickup_location_description}
          distance={totalKm}
          time={timeConvert(totalMinutes.toFixed(1))}
          onDropOff={acceptOrder}
          onCall={callCustomer}
          onCancel={() => {
            setShowCancelModal(true);
          }}
        />
      )}

      {/* Picked up Item */}
      {deliveryStatus === 'PICKED_UP' && (
        <DropOff
          customerName={user_name}
          customerImg={user_photo}
          storeName={store_name}
          storeImg={store_image}
          storeAddress={dropoff_location_description}
          distance={totalKm}
          time={timeConvert(totalMinutes.toFixed(1))}
          onDropOff={acceptOrder}
          onCall={callCustomer}
          onCancel={() => setShowCancelModal(true)}
        />
      )}

      {/* Wallet Balance */}
      <AvailableBalance />
    </Root>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(RideRequest);
