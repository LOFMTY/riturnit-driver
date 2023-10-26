import {View, Animated, ScrollView, TouchableOpacity} from 'react-native';
import React, {memo, useState, useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import Daily from './Daily';
import Weekly from './Weekly';
import {TopHeader} from '../../components';
import {COLORS, SIZES, constants, FONTS} from '../../constants';

const scheduleTabs = constants.scheduleTabs.map(bottom_tab => ({
  ...bottom_tab,
  ref: React.createRef(),
}));

const TabIndicator = ({measureLayout, scrollX}: any) => {
  const inputRange = scheduleTabs.map((_, i) => i * SIZES.width - 20);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure: {width: any}) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure: {x: any}) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: 3,
        top: 30,
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gradient2,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = ({scrollX, onTabPress}: any) => {
  const [measureLayout, setMeasureLayout] = useState<any>([]);
  const containerRef = useRef<any>();

  const tabPosition = Animated.divide(scrollX, SIZES.width);

  React.useEffect(() => {
    let unmounted = false
    let ml: any = [];

    scheduleTabs.forEach((home_tab: any) => {
      home_tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x: any, y: any, width: any, height: any) => {
          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === scheduleTabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
    return () => {
      unmounted = true;
    };
  }, [containerRef.current]);

  return (
    <View
      ref={containerRef}
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {/* Tab Indicator */}
      {measureLayout.length > 0 ? (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      ) : (
        <View />
      )}

      {/* Tabs */}
      {scheduleTabs.map((item, index) => {
        const textColor = tabPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightGray4, COLORS.gradient2, COLORS.lightGray4],
          extrapolate: 'clamp',
        });

        return (
          <TouchableOpacity
            key={`HomeTabs-${index}`}
            style={{
              paddingHorizontal: SIZES.padding * 2,
              justifyContent: 'center',
              height: 30,
            }}
            onPress={() => onTabPress(index)}>
            <Animated.Text
              style={{
                color: textColor,
                ...FONTS.h5,
                textTransform: 'uppercase',
              }}>
              {item.label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Earnings = ({appTheme}: any) => {
  const navigation = useNavigation();

  const flatListRef = useRef<any>();
  const scrollX = useRef<any>(new Animated.Value(0)).current;

  const onTabPress = useCallback((tabIndex: number) => {
    flatListRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  }, []);

  function renderTopTabBar() {
    return (
      <View
        style={{
          flex: 0.02,
          alignItems: 'center',
          padding: SIZES.radius,
          backgroundColor: appTheme.backgroundColor,
        }}>
        <Tabs scrollX={scrollX} onTabPress={onTabPress} />
      </View>
    );
  }

  function renderScheduleTabContent() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <Animated.FlatList
          horizontal
          ref={flatListRef}
          scrollEnabled={false}
          pagingEnabled
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
          }}
          snapToAlignment="center"
          decelerationRate="fast"
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          data={constants.scheduleTabs}
          keyExtractor={item => `HomeTabs-${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: SIZES.width,
                }}>
                {item?.id == 0 ? <Daily /> : <View />}
                {item?.id == 1 ? <Weekly /> : <View />}
              </View>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader
        title="Earnings"
        containerStyle={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
      />
      {renderTopTabBar()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToAlignment={'center'}
        contentContainerStyle={{flex: 1}}>
        {renderScheduleTabContent()}
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(memo(Earnings));
