import {ActivityIndicator, FlatList, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/client';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {DocumentTabs, TopHeader} from '../../components';
import {
  InsuranceDocumentsByDriverIDQuery,
  InsuranceDocumentsByDriverIDQueryVariables,
  ListLicenseDocumentsQuery,
  ListLicenseDocumentsQueryVariables,
  RegistrationDocumentsByDriverIDQuery,
  RegistrationDocumentsByDriverIDQueryVariables,
} from '../../API';
import {
  insuranceDocumentsByDriverID,
  listLicenseDocuments,
  registrationDocumentsByDriverID,
} from '../../queries/Document/DocumentQueries';
import {useAuthContext} from '../../context/AuthContext';

const Documents = ({appTheme}: any) => {
  const {userID} = useAuthContext();

  // GET LICENSE DOC
  const {data, loading: newLoad} = useQuery<
    ListLicenseDocumentsQuery,
    ListLicenseDocumentsQueryVariables
  >(listLicenseDocuments);
  const licenseDoc =
    data?.listLicenseDocuments?.items
      .filter(item => !item?._deleted)
      .filter(driverId => driverId?.driverID === userID) || [];

  // GET REGISTRATION DOC
  const {data: onData, loading} = useQuery<
    RegistrationDocumentsByDriverIDQuery,
    RegistrationDocumentsByDriverIDQueryVariables
  >(registrationDocumentsByDriverID, {
    variables: {
      driverID: userID,
    },
  });
  const regDoc: any =
    onData?.registrationDocumentsByDriverID?.items
      .filter(item => !item?._deleted)
      .filter(driverId => driverId?.driverID === userID) || [];

  // GET INSURANCE DOC
  const {data: newData, loading: onLoad} = useQuery<
    InsuranceDocumentsByDriverIDQuery,
    InsuranceDocumentsByDriverIDQueryVariables
  >(insuranceDocumentsByDriverID, {
    variables: {
      driverID: userID,
    },  
  });
  const insuranceDoc: any =
    newData?.insuranceDocumentsByDriverID?.items
      .filter(item => !item?._deleted)
      .filter(driverId => driverId?.driverID === userID) || [];

  if (loading || onLoad || newLoad) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center'}}
        size={'large'}
        color={'#3580ff'}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}>
      <TopHeader title="Driver Documents" />

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraHeight={200}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <FlatList
          data={licenseDoc}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={item => `${item?.id.toString()}`}
          renderItem={({item, index}) => {
            return (
              <DocumentTabs
                key={index}
                document={item}
              />
            );
          }}
        />

        <FlatList
          data={regDoc}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={item => `${item?.id.toString()}`}
          renderItem={({item, index}) => {
            return (
              <DocumentTabs
                key={index}
                document={item}
              />
            );
          }}
        />

        <FlatList
          data={insuranceDoc}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={item => `${item?.id.toString()}`}
          renderItem={({item, index}) => {
            return (
              <DocumentTabs
                key={index}
                document={item}
              />
            );
          }}
          ListFooterComponent={<View style={{marginBottom: 100}} />}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(Documents);
