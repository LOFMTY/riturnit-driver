import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {useQuery} from '@apollo/client';

import {SIZES, FONTS} from '../../constants';
import {TopHeader, NotificationTab} from '../../components';
import {
  ListSystemNotificationsQuery,
  ListSystemNotificationsQueryVariables,
} from '../../API';
import {listDriverSystemNotifications} from '../../queries/Notifications/NotificationsQueries';

const Notifications = ({appTheme}: any) => {
  const {loading, data, error} = useQuery<
    ListSystemNotificationsQuery,
    ListSystemNotificationsQueryVariables
  >(listDriverSystemNotifications);

  const allNotifications =
    data?.listSystemNotifications?.items.filter(item => !item?._deleted) || [];

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  function renderNoNotifications() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: SIZES.radius,
          marginHorizontal: SIZES.padding * 1.5,
        }}>
        {/* No Returns  */}
        <LottieView
          style={{width: 400, height: 400}}
          autoPlay
          speed={1.5}
          loop={true}
          source={require('../../assets/json/noNotification.json')}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              ...FONTS.h4,
              color: appTheme.textColor,
              textAlign: 'center',
            }}>
            You currently have no notifications
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Notifications" />

      {allNotifications.length > 0 ? (
        <FlatList
          data={allNotifications}
          keyExtractor={item => `${item?.id}`}
          renderItem={({item, index}) => {
            return (
              <NotificationTab
                key={index}
                title={item?.title}
                body={item?.message}
              />
            );
          }}
          ListFooterComponent={<View style={{marginBottom: 80}} />}
        />
      ) : (
        <>{renderNoNotifications()}</>
      )}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(Notifications);
