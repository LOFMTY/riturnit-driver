import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {COLORS, FONTS, SIZES, icons} from '../../../constants';

interface IUploadProfilePhotoOptionsModal {
  isVisible: boolean;
  onClose: Function;
  library: Function;
  camera: Function;
  appTheme: any;
}

const UploadProfilePhotoOptionsModal = ({
  isVisible,
  onClose,
  appTheme,
  library,
  camera,
}: IUploadProfilePhotoOptionsModal) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(isVisible);

  useEffect(() => {
    let unmounted = false
    if (showProfilePhotoModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
    return () => {
      unmounted = true;
    };
  }, [showProfilePhotoModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      SIZES.height,
      SIZES.height > 700 ? SIZES.height - 130 : SIZES.height - 580,
    ],
  });

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack2,
        }}>
        {/* transparent background */}
        <TouchableWithoutFeedback
          onPress={() => setShowProfilePhotoModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: 18,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: appTheme.backgroundColor,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: SIZES.padding,
            }}>
            {/* FastImage Gallery */}
            <View style={{alignItems: 'center', paddingVertical: SIZES.base}}>
              <TouchableOpacity onPress={() => library()}>
                <FastImage
                  source={icons.gallery}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>

              <View style={{paddingTop: SIZES.radius}}>
                <Text
                  style={{
                    textAlign: 'center',
                    ...FONTS.body2,
                    letterSpacing: 0.3,
                    color: appTheme.textColor,
                  }}>
                  Library
                </Text>
              </View>
            </View>

            {/* Camera */}
            <View style={{alignItems: 'center', paddingVertical: SIZES.base}}>
              <TouchableOpacity onPress={() => camera()}>
                <FastImage
                  source={icons.camera}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <View style={{paddingTop: SIZES.radius}}>
                <Text
                  style={{
                    textAlign: 'center',
                    ...FONTS.body2,
                    letterSpacing: 0.3,
                    color: appTheme.textColor,
                  }}>
                  Camera
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(UploadProfilePhotoOptionsModal);
