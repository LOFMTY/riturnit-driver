import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import relativeTime from 'dayjs/plugin/relativeTime';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as dayjs from 'dayjs';
dayjs.extend(relativeTime);

import reducers from './src/redux/rootReducer';
import './src/utilities/ignoreWarnings';
import config from './src/aws-exports';
import AppNav from './src/navigation/AppNav';
import AuthContextProvider from './src/context/AuthContext';
import Client from './src/apollo/Client';
import TripContextProvider from './src/context/TripContext';
import UserLocationContextProvider from './src/context/UserLocationContext';
const store = createStore(reducers, applyMiddleware(thunk));

const updateConfig = {
  ...config,
  oauth: {
    ...config.oauth,
  },
};
Amplify.configure(updateConfig);

const App = () => {
  const [onBoard, setOnboard] = useState(null);

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      RNBootSplash.hide();
      Orientation.lockToPortrait();
    }, 1500);
    return () => {
      unmounted = true;
    };
  }, []);

  const getStorage = async () => {
    try {
      const onBoardItem = await AsyncStorage.getItem('ONBOARDED');
      setOnboard(onBoardItem ? JSON.parse(onBoardItem) : null);
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  useEffect(() => {
    let unmounted = false;
    getStorage();
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Client>
          <UserLocationContextProvider>
            <TripContextProvider>
              <SafeAreaProvider>
                <BottomSheetModalProvider>
                  <AppNav onBoarded={onBoard} />
                </BottomSheetModalProvider>
              </SafeAreaProvider>
            </TripContextProvider>
          </UserLocationContextProvider>
        </Client>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
