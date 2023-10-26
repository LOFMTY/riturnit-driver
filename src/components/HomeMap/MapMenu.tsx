import {TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {icons, SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

const MapMenu = ({appTheme, containerStyle}: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{
        position: 'absolute',
        bottom: SIZES.height > 700 ? height * 0.895 : 620,
        left: 15,
        height: 40,
        width: 40,
        padding: SIZES.base,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        opacity: 0.8,
        backgroundColor: appTheme.bottomSheet,
        ...containerStyle,
      }}>
      <Image
        source={icons.menu}
        style={{
          width: 20,
          height: 20,
          tintColor: appTheme.textColor,
        }}
      />
    </TouchableOpacity>
  );
};

function mapStateToProps(state: {themeReducer: {appTheme: any}; error: any}) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(MapMenu);
