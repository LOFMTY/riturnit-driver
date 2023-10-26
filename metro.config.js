const {getDefaultConfig} = require('metro-config');
const {resolver: defaultResolver} = getDefaultConfig.getDefaultValues();
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    blacklistRE: exclusionList([/#current-cloud-backend\/.*/]),
    sourceExts: [...defaultResolver.sourceExts, 'cjs'], 
  },
};
