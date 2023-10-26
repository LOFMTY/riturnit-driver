import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  useWindowDimensions,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ALERT_TYPE, Root, Toast} from 'react-native-alert-notification';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SIZES, COLORS, FONTS, images, constants} from '../../constants';
import {NextButton} from '../../components';
import {AuthStackNavigatorParamList} from '../../type/navigation';

const OnBoarding = () => {
  const navigation = useNavigation<AuthStackNavigatorParamList>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<any>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < constants.onboarding.length - 1) {
      slidesRef?.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.replace('SignIn');
      onPressFinish();
    }
  };

  // ASYNC STORAGE FOR SET ITEM ONBOARDING
  const onPressFinish = async () => {
    try {
      await AsyncStorage.setItem('ONBOARDED', 'true');
      navigation.replace('Welcome');
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        textBody: 'Error while loading screen',
        autoClose: 1000,
      });
    }
  };

  function renderHeaderSection() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          alignItems: 'flex-start',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={onPressFinish}>
          <Text
            style={{
              ...FONTS.h4,
              fontWeight: 'bold',
              letterSpacing: 0.4,
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderContent() {
    const {width} = useWindowDimensions();

    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.height > 700 ? SIZES.padding * 1.8 : SIZES.margin,
        }}>
        <FlatList
          data={constants.onboarding}
          horizontal
          keyExtractor={item => `${item?.id.toString()}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          showsHorizontalScrollIndicator={false}
          ref={slidesRef}
          pagingEnabled
          bounces={false}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  width,
                  marginTop: SIZES.height > 700 ? 80 : 50,
                }}>
                <FastImage
                  source={item.image}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width,
                    height: SIZES.height > 700 ? 180 : 150,
                  }}
                />

                <View
                  style={{
                    marginTop: SIZES.padding * 2,
                    paddingVertical: SIZES.radius,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: COLORS.black,
                      marginHorizontal: SIZES.padding,
                      ...FONTS.h2,
                    }}>
                    {item.title}
                  </Text>

                  <View style={{paddingTop: SIZES.radius}}>
                    <Text
                      style={{
                        ...FONTS.body2,
                        textAlign: 'center',
                        color: COLORS.gray,
                        marginHorizontal: 30,
                      }}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }

  function renderNextButton() {
    return (
      <View
        style={{
          marginTop: SIZES.height > 700 ? 20 : 0,
        }}>
        <NextButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / constants.onboarding.length)}
        />
      </View>
    );
  }

  return (
    <Root>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <ImageBackground
          source={images.authBackgroundImage}
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}
          resizeMode="cover">
          <SafeAreaView style={{flex: 1}}>
            {renderHeaderSection()}
            {renderContent()}

            {renderNextButton()}
          </SafeAreaView>
        </ImageBackground>
      </View>
    </Root>
  );
};

export default OnBoarding;
