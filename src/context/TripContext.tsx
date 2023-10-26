import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
} from 'react';
import {useAuthContext} from './AuthContext';
import {Alert} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  UpdateTripsMutationVariables,
  UpdateTripsMutation,
  GetTripsQuery,
  GetTripsQueryVariables,
  TripStatus,
  GetDriverQuery,
  GetDriverQueryVariables,
  ListTripsQuery,
  ListTripsQueryVariables,
} from '../API';
import {getTrips, listTrips, updateTrips} from '../queries/Home/TripQueries';
import {getDriver} from '../queries/Profile/DriverQueries';
import {useUserLocationContext} from './UserLocationContext';
import {distanceCoords} from '../utilities/service';

type TripContextType = {
  selectedVehicle: any;
  setSelectedVehicle: any;
  setCarSelection: Function;
  loadSelectedCar: Function;
  clearAll: Function;
  fetchAllTrips: Function;
  pickUp: Function;
  acceptTrip: Function;
  completeTrip: Function;
  setSelectOption: any;
  selectedOption: null;
  totalMinutes: number;
  setTotalMinutes: any;
  totalKm: number;
  setTotalKm: any;
  updateLoading: any;
  updateError: any;
  setTripsId: any;
  isDriverClose: any;
  mapRef: any;
  tripsId: any;
  deliveryStatus: any;
  setDeliveryStatus: any;
  driverDetail: any;
  newRequest: any;
  setNewRequest: any;
  loading: boolean;
  error: any;
  isOnline: any;
  setIsOnline: any;
};

const TripContext = createContext<TripContextType>({
  selectedVehicle: '',
  setSelectedVehicle: null,
  setCarSelection: Function,
  loadSelectedCar: Function,
  fetchAllTrips: Function,
  clearAll: Function,
  pickUp: Function,
  acceptTrip: Function,
  completeTrip: Function,
  setSelectOption: '',
  selectedOption: null,
  totalMinutes: 0,
  setTotalMinutes: '',
  totalKm: 0,
  setTotalKm: '',
  updateLoading: '',
  updateError: '',
  setTripsId: '',
  isDriverClose: '',
  mapRef: '',
  tripsId: '',
  deliveryStatus: '',
  setDeliveryStatus: '',
  driverDetail: '',
  newRequest: '',
  setNewRequest: '',
  loading: false,
  error: '',
  isOnline: '',
  setIsOnline: '',
});

const TripContextProvider = ({children}: {children: ReactNode}) => {
  const {userID} = useAuthContext();
  const {driverLocation} = useUserLocationContext();
  const {latitude, longitude} = driverLocation;

  const mapRef = useRef<any>(null);

  const [isOnline, setIsOnline] = useState(false);
  const [newRequest, setNewRequest] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [totalMinutes, setTotalMinutes] = useState<number | any>(0);
  const [totalKm, setTotalKm] = useState<number | any>(0);
  const [selectedOption, setSelectOption] = useState<any>(null);
  const [tripsId, setTripsId] = useState<any>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<TripStatus>(
    TripStatus.NEW,
  );

  const isDriverClose = totalKm <= 0.05; // decrease km for higher accuracy

  // GET DRIVER DETAILS
  const {data: driverData} = useQuery<GetDriverQuery, GetDriverQueryVariables>(
    getDriver,
    {
      variables: {
        id: userID,
      },
    },
  );
  const driverDetail: any = driverData?.getDriver;

  // SAVE SELECTED CAR
  const setCarSelection = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('key', jsonValue);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  // LOAD SELECTED CAR
  const loadSelectedCar = async () => {
    await AsyncStorage.getItem('key').then((value: any) => {
      const data = JSON.parse(value);
      if (data) {
        setSelectedVehicle(data);
      }
    });
  };

  // CLEAR CACHE DATA
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      // clear error
      Alert.alert((error as Error).message);
    }
  };

  // GET TRIP INFO TO UPDATE
  const {
    loading: updateLoading,
    data: updateData,
    error: updateError,
  } = useQuery<GetTripsQuery, GetTripsQueryVariables>(getTrips, {
    variables: {id: tripsId},
  });
  const tripsIdInfo = updateData?.getTrips;

  // UPDATE RETURN TRIP - ACCEPT TRIP
  const [doUpdateTrips] = useMutation<
    UpdateTripsMutation,
    UpdateTripsMutationVariables
  >(updateTrips);

  const acceptTrip = async () => {
    if (!tripsIdInfo) {
      return;
    }
    try {
      const res = await doUpdateTrips({
        variables: {
          input: {
            id: tripsIdInfo?.id,
            trip_status: TripStatus.ACCEPTED,
            driver_name: driverDetail?.name,
            driver_photo: driverDetail?.image,
            driver_rating: driverDetail?.rating,
            driver_mobile_number: driverDetail?.phone_number,
            driver_car_model: selectedVehicle?.model,
            driver_car_make: selectedVehicle?.make,
            driver_car_color: selectedVehicle?.color,
            driver_car_plate_number: selectedVehicle?.plate_number,
            tripsDriverId: userID,
            _version: tripsIdInfo?._version,
          },
        },
      });
      // console.log('RETURN ACCEPTED CREATED ', res);
      setDeliveryStatus(TripStatus.ACCEPTED);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  // UPDATE RETURN TRIP - PICKUP
  const pickUp = async () => {
    if (!tripsIdInfo) {
      return;
    }
    try {
      const res = await doUpdateTrips({
        variables: {
          input: {
            id: tripsIdInfo?.id,
            trip_status: TripStatus.PICKED_UP,
            driver_name: driverDetail?.name,
            driver_photo: driverDetail?.image,
            driver_rating: driverDetail?.rating,
            driver_mobile_number: driverDetail?.phone_number,
            driver_car_model: selectedVehicle?.model,
            driver_car_make: selectedVehicle?.make,
            driver_car_color: selectedVehicle?.color,
            driver_car_plate_number: selectedVehicle?.plate_number,
            tripsDriverId: userID,
            _version: tripsIdInfo?._version,
          },
        },
      });
      // console.log('PICKUP CREATED ', res);
      setDeliveryStatus(TripStatus.PICKED_UP);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  // UPDATE RETURN TRIP - COMPLETE TRIP
  const completeTrip = async () => {
    if (!tripsIdInfo) {
      return;
    }
    try {
      const res = await doUpdateTrips({
        variables: {
          input: {
            id: tripsIdInfo?.id,
            trip_status: TripStatus.COMPLETED,
            driver_name: driverDetail?.name,
            driver_photo: driverDetail?.image,
            driver_rating: driverDetail?.rating,
            driver_mobile_number: driverDetail?.phone_number,
            driver_car_model: selectedVehicle?.model,
            driver_car_make: selectedVehicle?.make,
            driver_car_color: selectedVehicle?.color,
            driver_car_plate_number: selectedVehicle?.plate_number,
            tripsDriverId: userID,
            _version: tripsIdInfo?._version,
          },
        },
      });
      // console.log('COMPLETE TRIP CREATED ', res);
      setDeliveryStatus(TripStatus.COMPLETED);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  // LIST ALL TRIPS
  const {loading, data, error} = useQuery<
    ListTripsQuery,
    ListTripsQueryVariables
  >(listTrips, {pollInterval: 300});

  const fetchAllTrips = () => {
    const onTrips: any =
      data?.listTrips?.items
        .filter(tripStatus => tripStatus?.trip_status?.startsWith('NEW'))
        .filter(trips => !trips?._deleted) || [];
    try {
      const userTrips = onTrips.filter(
        (item: {pickup_lat: number; pickup_lng: number}, index: any) => {
          return (
            distanceCoords(
              latitude,
              longitude,
              item.pickup_lat,
              item.pickup_lng,
              'K',
            ) <= 25 // remember to change this to 0.1KM
          );
        },
      );
      setNewRequest(userTrips);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  return (
    <TripContext.Provider
      value={{
        isOnline,
        setIsOnline,
        newRequest,
        setNewRequest,
        clearAll,
        selectedVehicle,
        setSelectedVehicle,
        loadSelectedCar,
        setCarSelection,
        setSelectOption,
        fetchAllTrips,
        selectedOption,
        totalMinutes,
        setTotalMinutes,
        totalKm,
        setTotalKm,
        acceptTrip,
        loading,
        error,
        updateLoading,
        updateError,
        setTripsId,
        pickUp,
        completeTrip,
        isDriverClose,
        mapRef,
        tripsId,
        deliveryStatus,
        setDeliveryStatus,
        driverDetail,
      }}>
      {children}
    </TripContext.Provider>
  );
};

export default TripContextProvider;

export const useTripContext = () => useContext(TripContext);
