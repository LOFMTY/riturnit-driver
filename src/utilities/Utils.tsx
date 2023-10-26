function NumToTime(num: number) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  if (minutes + ''.length < 2) {
    minutes = 0 + minutes;
  }
  return hours + ':' + minutes;
}

const utilities = {
  NumToTime,
};

export const GOOGLE_MAPS_APIKEY = 'AIzaSyDPMHmRw3LbdXZCfrLu7DxmhDgv2u_9SKU';
export const DEFAULT_IMAGE =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1674481755/Riturnit/Customer/assets/images/noImage.png';

export const DEFAULT_PROFILE_IMAGE =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1674481850/Riturnit/Customer/assets/icons/avatar.png';
export const ErrorJSON =
  'https://res.cloudinary.com/dy6v7jqqk/raw/upload/v1674748539/Riturnit/Customer/assets/json/error.json';
export const RITURNIT_SM =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1674481750/Riturnit/Customer/assets/images/RiturnitGo.png';
export const RITURNIT_MD =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1674481750/Riturnit/Customer/assets/images/RiturnitLarge.png';
export const RITURNIT_XL =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1674481715/Riturnit/Customer/assets/images/RiturnitXtraLarge.png';
export const LICENSE_IMG =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1689006365/Riturnit/Driver/images/driverLicense.jpg';
export const VEH_REG_IMG =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1689006363/Riturnit/Driver/images/vehicleReg.png';
export const INSURANCE_IMG =
  'https://res.cloudinary.com/dy6v7jqqk/image/upload/v1689006362/Riturnit/Driver/images/vehicleInsurance.png';

export default utilities;
