import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Animated,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/client';

import {SIZES, FONTS} from '../../constants';
import {TopHeader} from '../../components';
import {ViewItemsRouteProp} from '../../type/navigation';
import {ListTripCartsQuery, ListTripCartsQueryVariables} from '../../API';
import {listTripCarts} from '../../queries/Home/TripQueries';

const ITEM_SIZE = 170 / 1.85;

const ViewItems = ({appTheme}: any) => {
  const route = useRoute<ViewItemsRouteProp>();
  const {tripId, userId}: any = route?.params;

  const width = Dimensions.get('window').width - 20;
  const scrollY = useRef(new Animated.Value(0)).current;

  const {loading, data} = useQuery<
    ListTripCartsQuery,
    ListTripCartsQueryVariables
  >(listTripCarts);

  const tripItems = data?.listTripCarts?.items
    .filter(tID => tID?.tripsID?.startsWith(tripId))
    .filter(uID => uID?.userID?.startsWith(userId))
    .filter(item => !item?._deleted || []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  function renderReturnedItemsCard() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: SIZES.radius,
          paddingBottom: SIZES.padding,
        }}>
        <Animated.FlatList
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          numColumns={2}
          data={tripItems}
          keyExtractor={item => `${item?.id.toString()}`}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];

            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 0.5),
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });

            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });

            return (
              <Animated.View
                style={{
                  marginTop: SIZES.radius,
                  marginVertical: SIZES.base,
                  width: width / 2 - 18,
                  marginHorizontal: 8,
                  shadowColor: appTheme.cardShadow,
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  backgroundColor: appTheme.tabBackgroundColor,
                  opacity,
                  transform: [{scale}],
                }}>
                <View
                  style={{
                    height: 230,
                    borderRadius: SIZES.radius,
                  }}>
                  {/* Item FastImage */}
                  <FastImage
                    source={{uri: item?.image}}
                    resizeMode={FastImage.resizeMode.cover}
                    style={{
                      width: '90%',
                      height: 150,
                      top: 10,
                      alignSelf: 'center',
                      borderRadius: SIZES.base,
                    }}
                  />

                  {/* Item Name */}
                  <View
                    style={{
                      flex: 0,
                      marginTop: SIZES.margin,
                      justifyContent: 'center',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{
                        ...FONTS.body4,
                        textAlign: 'center',
                        color: appTheme.textColor,
                      }}>
                      {item?.name}
                    </Text>

                    <Text
                      numberOfLines={3}
                      style={{
                        ...FONTS.body4,
                        marginTop: SIZES.base,
                        paddingHorizontal: SIZES.radius,
                        color: appTheme.buttonText,
                      }}>
                      {item?.description}
                    </Text>
                  </View>
                </View>
              </Animated.View>
            );
          }}
          ListFooterComponent={
            <View
              style={{
                marginBottom: 200,
              }}
            />
          }
        />
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Returning Items" />
      {renderReturnedItemsCard()}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(ViewItems);
