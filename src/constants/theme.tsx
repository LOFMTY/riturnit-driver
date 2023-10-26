import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  gradient1: '#6098fe',
  gradient2: '#3580ff',
  powderBlue: '#A9BCD0',

  // Primary Color
  white: '#FFFFFF',
  whiteSmoke: '#ced4da',
  whiteAsh: '#FAFAFA',
  kittenWhite: '#F8F8F8',
  silver: '#bdbdbd',
  lexicon: '#E7EAEA',
  gainsboro: '#dcdcdc',

  // Secondary Color
  caribbeanGreen: '#00bb65',
  lightGreen: '#C3FF99',
  scarlet: '#eb1701',
  mustard: '#ffca00',
  darkYellow: '#C0B236',
  lightYellow: '#FFF80A',
  yellow: '#FEB139',
  lightSlateBlue: '#9d52ff',
  lightPink: '#FFF0ED',

  // Tertiary Color
  black: '#000000',
  paua: '#232048',
  blackCurrant: '#171531',
  cornflowerBlue: '#44567C',
  ashBlue: '#31415F',
  red: '#D84035',
  red2: '#FF7363',
  gray: '#898B9A',
  grey: '#333533',
  gray2: '#757575',
  gray1: '#363636',
  gray3: '#4D4D4D',
  lightGray: '#3B3B3B',
  lightGray2: '#707070',
  lightGray3: '#f0f0f0',
  lightGray4: '#757575',
  lightGray5: '#B3B9C2',
  transparentBlack: 'rgba(0, 0, 0, 0.8)',
  transparentBlack2: 'rgba(0, 0, 0, 0.7)',
  transparentBlue: 'rgba(35, 32, 72, 0.9)',
};

export const SIZES = {
  // global sizes
  small: 12,
  font: 14,
  base: 8,
  radius: 12,
  margin: 20,
  padding: 24,

  // font sizes
  xLarge: 60,
  largeTitle: 32,
  mediumTitle: 30,
  h1: 26,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  body1: 18,
  body2: 16,
  body3: 14,
  body4: 12,
  body5: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Inter-ExtraBold', fontSize: SIZES.xLarge},
  extraBold: {fontFamily: 'Inter-ExtraBold', fontSize: SIZES.largeTitle},
  extraLarge: {fontFamily: 'Inter-Bold', fontSize: SIZES.mediumTitle},
  h1: {fontFamily: 'Inter-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Inter-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Inter-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Inter-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Inter-Medium', fontSize: SIZES.h5, lineHeight: 20},
  h6: {fontFamily: 'Inter-Medium', fontSize: SIZES.h6, lineHeight: 20},
  body1: {fontFamily: 'Inter-Regular', fontSize: SIZES.body1, lineHeight: 22},
  body2: {fontFamily: 'Inter-Regular', fontSize: SIZES.body2, lineHeight: 22},
  body3: {fontFamily: 'Inter-Regular', fontSize: SIZES.body3, lineHeight: 20},
  body4: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.body4,
    lineHeight: 18,
  },
  body5: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.body5,
    lineHeight: 18,
  },
};

export const darkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

export const mapStandardStyles = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export const darkTheme = {
  name: 'dark',
  backgroundColor: COLORS.blackCurrant,
  textColor: COLORS.white,
  statsBackgroundColor: COLORS.paua,
  subTextColor: COLORS.lightGray4,
  tabBackgroundColor: COLORS.paua,
  tabIndicatorBackgroundColor: COLORS.paua,
  directionButton: COLORS.transparentBlue,
  tabIndicator: COLORS.white,
  iconButton: COLORS.white,
  inputColor: COLORS.lightGray2,
  driverMessageBackgroundColor: COLORS.paua,
  chatImage: COLORS.gradient2,
  bottomSheet: COLORS.blackCurrant,
  buttonText: COLORS.lightGray5,
  mapStyle: darkStyle,
};

export const lightTheme = {
  name: 'light',
  backgroundColor: COLORS.lexicon,
  textColor: COLORS.black,
  statsBackgroundColor: COLORS.lexicon,
  subTextColor: COLORS.gray,
  tabBackgroundColor: COLORS.white,
  inputColor: COLORS.gray,
  tabIndicatorBackgroundColor: COLORS.lexicon,
  directionButton: COLORS.transparentBlack2,
  tabIndicator: COLORS.white,
  iconButton: COLORS.gradient2,
  chatImage: COLORS.lightPink,
  bottomSheet: COLORS.white,
  buttonText: COLORS.lightGray2,
  mapStyle: mapStandardStyles,
};

export const selectedTheme = lightTheme;

const appTheme = {COLORS, SIZES, FONTS, darkTheme, lightTheme};

export default appTheme;
