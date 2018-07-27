var fs = require('fs')
var path = require('path')
var utils = require('./utils')
var endLine = require('os').EOL;
var render = require('json-templater/string')

var storeTpl = `
        {{name}}: require('./{{name}}').default`;

var template = `
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default createStore(
    combineReducers(Object.assign({ 
        {{storeLists}}
    })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
`;

var root = path.resolve(__dirname, '../src/store');
utils.readFiles(`${root}/!(index).js`).then(results => {
    const stores = utils.buildFileConfig(results, (val, next) => {
        next.push(render(storeTpl, {
            name: path.basename(val, '.js')
        }));
    });
    fs.writeFileSync(path.resolve(__dirname, '../src/store/index.js'), render(template, {
        storeLists: stores.join(',' + endLine)
    }));
})