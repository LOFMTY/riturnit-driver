import {View} from 'react-native';
import React, {useRef} from 'react';
import {Marker} from 'react-native-maps';
import FastImage from 'react-native-fast-image';

import {COLORS} from '../../../constants';

const CustomMarker = ({data, icon}: any) => {
  const mapRef = useRef<any>(null);

  return (
    <Marker
      ref={mapRef}
      title={data.name}
      description={data.description}
      coordinate={{
        latitude: data.latitude,
        longitude: data.longitude,
      }}>
      <View
        style={{
          backgroundColor: COLORS.powderBlue,
          padding: 6,
          borderRadius: 100 / 2,
        }}>
        <FastImage source={icon} style={{width: 25, height: 25}} />
      </View>
    </Marker>
  );
};
export default CustomMarker;
