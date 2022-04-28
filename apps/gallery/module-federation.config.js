
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@mf-app/shared/data-store',
]);

module.exports = {
  name: 'gallery',
  exposes: {
    './Module': 'apps/gallery/src/app/remote-entry/entry.module.ts',
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  }
};
