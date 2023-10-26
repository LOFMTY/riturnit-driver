import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {SIZES, FONTS} from '../../constants';
import {
  InsuranceDocument,
  LicenseDocument,
  RegistrationDocument,
} from '../../API';

interface IDocumentProps {
  appTheme: any;
  document: LicenseDocument | RegistrationDocument | InsuranceDocument | any;
}

const DocumentTabs = ({document, appTheme}: IDocumentProps) => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.margin,
        marginTop: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: appTheme.tabBackgroundColor,
      }}>
      <FastImage
        source={{uri: document.image}}
        style={{
          width: 330,
          height: 250,
          borderTopLeftRadius: SIZES.base,
          borderTopRightRadius: SIZES.base,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={{marginTop: SIZES.radius}}>
        <Text style={{...FONTS.h5, color: appTheme.textColor}}>
          {document?.name}
        </Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{...FONTS.h6, color: appTheme.textColor}}>
          Expiry Date:{' '}
          <Text style={{...FONTS.h6, color: appTheme.buttonText}}>
            {document?.expiry_date}
          </Text>
        </Text>
      </View>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    appTheme: state.themeReducer.appTheme,
    error: state.error,
  };
}

export default connect(mapStateToProps)(DocumentTabs);
