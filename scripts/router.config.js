var fs = require('fs')
var path = require('path')
var utils = require('./utils')
var endLine = require('os').EOL;
var render = require('json-templater/string')

// 默认的基础模版
const template = `
import React from 'react'
import { Component } from '@/components'
import { asyncComponent } from '@/components'
import beforeRoute from '@/router/beforeRoute'
import { Route } from 'react-keeper'
import connectComponent from '@utils/mixins/connectComponent'

export default class MainContainer extends Component {
    render() {
        return (
            <div>
                <Route cache component={asyncComponent(() => import('@pages/Home'))} path="/>" />
                {{routeLists}}
            </div>
        )
    }
}
`;

// root dirctory
const ROOT = path.resolve(__dirname, '../src/pages/Monitor');

utils.readFiles(`${ROOT}/**/index.js`).then(results => {
    const routes = utils.buildFileConfig(results, (val, next) => {
        // 获取type对应字段后面的路径
        const correspondPath = utils.getCorrespondPath(val, 'Monitor');
        // 当前的文件对应的路由名称
        const name = path.basename(path.dirname(correspondPath));

        next.push(render(returnRouteTpl('Monitor'), {
            path: `${utils.initialToLowerCase(name)}`,   //转小写
            component: name
        }))
    });
    
    fs.writeFileSync(path.resolve(__dirname, '../src/router/monitor.js'), render(template, {
        routeLists: routes.join(' ' + endLine)
    }));
});

/**
 * 返回单个路由模版
 * @param {String} type=Monitor 
 */
function returnRouteTpl(type) {
    return `
                <Route 
                enterFilter={beforeRoute}
                component={asyncComponent(() => import('@pages/${type}/{{component}}'), connectComponent)} 
                path="/{{path}}" />`;
}

