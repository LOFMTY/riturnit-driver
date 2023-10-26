import {
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {toggleTheme} from '../../redux/theme/themeActions';
import {icons, SIZES, COLORS} from '../../constants';

const {width, height} = Dimensions.get('window');

const ToggleTheme = ({containerStyle, toggleTheme, appTheme}: any) => {
  function toggleThemeHandler() {
    if (appTheme.name == 'light') {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  }

  return (
    <TouchableOpacity
      onPress={() => toggleThemeHandler()}
      style={{
        position: 'absolute',
        bottom: SIZES.height > 700 ? height * 0.895 : 620,
        flexDirection: 'row',
        right: 12,
        height: 40,
        width: 75,
        borderRadius: SIZES.margin,
        alignItems: 'center',
        opacity: 0.8,
        justifyContent: 'center',
        backgroundColor: appTheme.bottomSheet,
        ...containerStyle,
      }}>
      {/* Sun */}
      <View
        style={{
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          ...(appTheme.name == 'light' ? styles.selectedLightModeStyle : {}),
        }}>
        <Image
          source={icons.sun}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.white,
          }}
        />
      </View>

      {/* Moon  */}
      <View
        style={{
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          ...(appTheme.name == 'dark' ? styles.selectedNightModeStyle : {}),
        }}>
        <FastImage
          source={icons.moon}
          style={{
            height: 30,
            width: 30,
            // tintColor: COLORS.silver,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.cornflowerBlue,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.mustard,
  },
});

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    toggleTheme: (themeType: any) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);
