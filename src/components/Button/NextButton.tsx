import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import FastImage from 'react-native-fast-image';

import {COLORS, SIZES, FONTS, images} from '../../constants';

const NextButton = ({percentage, scrollTo}: any) => {
  const size = 100;
  const strokeWidth = 7;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<any>(null);

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    let unmounted = false;
    animation(percentage);
    return () => {
      unmounted = true;
    };
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef?.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.padding,
      }}>
      <Svg width={size} height={size}>
        <G rotation="180" origin={center}>
          <Circle
            stroke={COLORS.gainsboro}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={4}
          />
          <Circle
            ref={progressRef}
            stroke={COLORS.gradient2}
            cx={center}
            cy={center}
            r={radius}
            fill={'#fff'}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      <TouchableOpacity
        style={{
          position: 'absolute',
          borderRadius: 100,
        }}
        activeOpacity={0.6}
        onPress={scrollTo}>
        <FastImage
          source={images.play}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: 100, height: 100, top: 18}}
        />

        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.gradient2,
            fontWeight: 'bold',
            textAlign: 'center',
            top: 30,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
