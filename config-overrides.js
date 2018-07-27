const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function overrides(config, dev) {
    config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
    config = injectBabelPlugin('transform-decorators-legacy', config);
    config = rewireLess.withLoaderOptions({
        modifyVars: {"@primary-color": "red"},
    })(config, dev);

    // 路径简写
    Object.assign(config.resolve.alias, {
        '@': resolve('src'),
        '@components': resolve('src/components'),
        '@utils': resolve('src/utils'),
        '@pages': resolve('src/pages'),
        '@router': resolve('src/router'),
        '@store': resolve('src/store'),
        '@static': resolve('src/static')
    });
    return config;
}

function resolve(_path) {
    return path.resolve(__dirname, _path);
}