const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@mf-app/shared/data-store',
]);


module.exports = {
  name: 'shell',
  remotes: ['gallery'],
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  }
};
