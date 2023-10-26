const walletAmount = [
  {
    id: '1',
    value: 50,
    isSelected: false,
  },
  {
    id: '2',
    value: 100,
    isSelected: false,
  },
  {
    id: '3',
    value: 200,
    isSelected: false,
  },
  {
    id: '4',
    value: 500,
    isSelected: false,
  },
  {
    id: '5',
    value: 1000,
    isSelected: false,
  },
];

const myPayments = [
  {
    id: 1,
    name: 'Riturnit Wallet',
    icon: require('../assets/icons/riturnitCash.png'),
  },
];

const allCards = [
  {
    id: 1,
    name: 'PayPal',
    icon: require('../assets/icons/paypal.png'),
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: require('../assets/icons/google.png'),
  },
  {
    id: 3,
    name: 'Master Card',
    icon: require('../assets/icons/mastercard.png'),
  },
  {
    id: 4,
    name: 'VISA',
    icon: require('../assets/icons/visa.png'),
  },
];

const transactionHistory = [
  {
    id: 0,
    title: 'Added to wallet',
    transactionType: 'CREDIT',
    body: 'You deposited money',
    amount: 145.23,
    transactionID: '10CS1203',
    time: 'May 05, 2022 09:23 PM',
  },
  {
    id: 1,
    title: 'Trip deduction',
    body: 'Money was deducted',
    transactionType: 'DEBIT',
    amount: 9.5,
    transactionID: '019SJL843',
    time: 'June 20, 2022 7:11 AM',
  },
  {
    id: 2,
    title: 'Withdraw from wallet',
    transactionType: 'DEBIT',
    body: 'You withdrew money',
    amount: 100.0,
    transactionID: 'AB1293KS',
    time: 'July 17, 2022 09:41 AM',
  },
  {
    id: 3,
    title: 'Added to wallet',
    transactionType: 'CREDIT',
    body: 'You deposited money',
    amount: 25.0,
    transactionID: '203NV270',
    time: 'August 05, 2022 6:03 PM',
  },
];

const drivers = [
  {
    id: 1,
    username: 'user1',
    firstName: 'Adam',
    lastName: 'Wright',
    profile_image: require('../assets/images/driverImage.png'),
    plateNumber: 'ABC123XY',
    color: 'Silver',
    vehicleBrand: 'Toyota',
    vehicleType: 'Corolla',
    vehicleYear: '2014',
    email: 'a_wrigth@gmail.com',
    address: '2231 Hamond Ave, Cheiking, Bronx, 842023',
    phone: '5409231123',
    YOD: 'June, 2020',
    rating: 4.3,
    remainBalance: 749.5,
    label: 'Riturnit Go',
    multiplier: 2.5,
  },
  {
    id: 2,
    username: 'user2',
    firstName: 'Abaz',
    lastName: 'Udosen',
    profile_image: require('../assets/images/abaz.png'),
    plateNumber: 'XUJ172E',
    color: 'Black',
    vehicleBrand: 'Honda',
    vehicleType: 'Civic',
    vehicleYear: '2017',
    email: 'audosen@gmail.com',
    address: '1217 Peace Road, Reidport, CA, 129301',
    phone: '8024390131',
    YOD: 'May, 20212',
    rating: 4.7,
    remainBalance: 120.0,
    label: 'Riturnit Van',
    multiplier: 4,
  },
];

export default {
  walletAmount,
  myPayments,
  allCards,
  transactionHistory,
  drivers,
};
