'use strict';
const PackageBuilder = require('render-package-build');
const builder = new PackageBuilder();
module.exports = builder.getReactWebpackConfig({
  entry: {
    react: 'src/page/home/index.jsx'
  }
});