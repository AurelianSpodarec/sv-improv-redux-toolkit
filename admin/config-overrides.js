var path = require('path');
var fs = require('fs');
const { override, addDecoratorsLegacy, babelInclude, addWebpackAlias } = require('customize-cra');

module.exports = function (config, env) {
    return Object.assign(
        config,
        override(
            addDecoratorsLegacy(),
            addWebpackAlias({
                '@components': path.resolve(__dirname, 'src/components'),
                '@content': path.resolve(__dirname, 'src/_content'),
            }),
            babelInclude([path.resolve('src'), fs.realpathSync('node_modules/lib/src')]),
        )(config, env),
    );
};
