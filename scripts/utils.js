var fs = require('fs')
var path = require('path')
var glob = require('glob')
var render = require('json-templater/string')

/**
 * 首字母小写处理
 * @param {String} str 
 */
exports.initialToLowerCase = function(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
}

exports.getCorrespondPath = function(_path, type) {
    if(!type) return _path;

    var len = _path.indexOf(type);
    var router =`${_path.substring(len)}`;
    return router.replace(/\\/g, '/');
}

exports.fsExistsSync = function(_path) {
    try {
        fs.accessSync(_path);
    } catch (error) {
        return false;
    }
    return true;
}

exports.readFiles = function(pattern) {
    try {
        return new Promise((resolve, reject) => {
            glob(pattern, (err, files) => {
                resolve(files);
            });
        });
    } catch (error) {
        throw Error(error);
    }
}

/**
 * 
 * @param {Array} data 
 * @param {Function} callback 
 */
exports.buildFileConfig = function(data, callback) {
    if(!Array.isArray(data)) throw new Error('data is not Array!');

    const results = [];
    data.forEach(val => {
        callback(val, results);
    });
    return results;
}

