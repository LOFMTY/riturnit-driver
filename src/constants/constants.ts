const scheduleTabs = [
  {
    id: 0,
    label: 'Daily',
  },
  {
    id: 1,
    label: 'Weekly',
  },
];

const cancelTrips = [
  {
    id: '1',
    label: "Rider isn't here",
  },
  {
    id: '2',
    label: 'Wrong address shown',
  },
  {
    id: '3',
    label: "Rider didn't respond",
  },
  {
    id: '4',
    label: 'Rider asked to cancel ride',
  },
  {
    id: '5',
    label: 'Other reasons',
  },
];

const onboarding = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
      'Integer at elementum ex, sed tristique nisl. Integer ullamcorper blandit aliquam. Nunc lorem odio, ',
    image: require('./../assets/images/image1.png'),
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
      'Integer at elementum ex, sed tristique nisl. Integer ullamcorper blandit aliquam. Nunc lorem odio, ',
    image: require('./../assets/images/image2.png'),
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
      'Integer at elementum ex, sed tristique nisl. Integer ullamcorper blandit aliquam. Nunc lorem odio, ',
    image: require('./../assets/images/image3.png'),
  },
];

export default {
  scheduleTabs,
  cancelTrips,
  onboarding,
};
