import {
  View,
  PermissionsAndroid,
  Alert,
  FlatList,
  TextInput,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react';
import Contacts from 'react-native-contacts';
import FastImage from 'react-native-fast-image';
import OpenSms from '@lowkey/react-native-open-sms';

import {SIZES, COLORS, icons} from '../../constants';
import {ListItem, TopHeader} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ContactListRouteProp,
  CustomDrawerStackNavigatorParamList,
} from '../../type/navigation';

const ContactList = ({appTheme}: any) => {
  const navigation = useNavigation<CustomDrawerStackNavigatorParamList>();
  const route = useRoute<ContactListRouteProp>();
  const promoCode = route.params?.inviteCode;

  const msg = `Sign up and become a Riturnit Driver with your referral code ${promoCode} and $50 add to your wallet`;
  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    let unmounted = false
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then((contact: any[]) => {
        const trimContacts = contact
          .filter(
            (c: {phoneNumbers: string | any[]}) => c.phoneNumbers.length > 0,
          )
          .map(c => {
            return {
              hasThumbnail: c['hasThumbnail'],
              thumbnailPath: c['thumbnailPath'],
              givenName: c['givenName'],
              familyName: c['familyName'],
              phoneNumbers: c['phoneNumbers'],
              recordID: c['recordID'],
            };
          });
        setContacts(trimContacts);
      })
      .catch((e: any) => {
        Alert.alert('Permission to access contacts was denied!', e);
      });
  };

  const search = (text: string | null) => {
    const phoneNumberRegex =
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then((contacts: any) => {
        contacts.sort(
          (a: any, b: any) =>
            a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then((contacts: any) => {
        contacts.sort(
          (a: any, b: any) =>
            a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
      <TopHeader
        title="Contact list"
        onPress={() => navigation.goBack()}
        titleContainerStyle={{paddingRight: SIZES.padding * 1.2}}
      />

      {/* Search Box */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: SIZES.margin,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          marginTop: SIZES.margin,
          backgroundColor: appTheme.tabBackgroundColor,
        }}>
        <View style={{justifyContent: 'center'}}>
          <FastImage
            source={icons.search}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={appTheme.inputColor}
            style={{width: 20, height: 20}}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: SIZES.radius,
          }}>
          <TextInput
            onChangeText={search}
            placeholder="Search"
            placeholderTextColor={COLORS.gray}
            style={{
              backgroundColor: appTheme.tabBackgroundColor,
              height: 40,
              color: appTheme.textColor,
            }}
          />
        </View>
      </View>

      {/* contact list */}
      <FlatList
        ListHeaderComponent={<View style={{marginTop: SIZES.padding}} />}
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={(contact: any) => {
          const openComposer = () => {
            OpenSms.displaySMSComposerSheet({
              body: msg,
              recipients: [contact.item.phoneNumbers[0].number],
            }).then((result: string) => {
              switch (result) {
                case OpenSms.Types.Sent:
                  Alert.alert('Message was sent!');
                  break;
                case OpenSms.Types.Cancelled:
                  Alert.alert('Sending was cancelled!');
                  break;
                case OpenSms.Types.Failed:
                  Alert.alert('Sending failed');
                  break;
                case OpenSms.Types.NotSupported:
                  Alert.alert('Sending is not supported');
                  break;
                default:
                  Alert.alert('Error occupied', result);
                  break;
              }
            });
          };
          return <ListItem item={contact.item} onAdd={() => openComposer()} />;
        }}
      />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(ContactList);
