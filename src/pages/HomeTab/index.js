import React from 'react'
import { Component, asyncComponent } from '@/components'
import { connect } from 'react-redux'
import { API_findMenusTree } from '@/store/homeTab'
import { Tabs } from 'antd-mobile'

const mapMenus = {
    "车辆监控": 'MonitorMenus',
    "传感器": 'SensorMenus',
    "报警锁车": 'AlarmLockMenus',
    "行驶记录": 'DriverRecordMenus',
    "新能源": 'NewEnergyMenus',
    "查询统计": 'SearchMenus',
    "大数据": 'BigDataMenus',
    "日志记录": 'LogRecordMenus'
}
@connect(({ homeTab }) => { return { homeTab} })
export default class HomeTab extends Component {
    componentDidMount() {
        this.props.dispatch(API_findMenusTree());
    }

    render() {
        const { menus } = this.props.homeTab;

        // 菜单标题组件
        const titles = menus.map(menu => {
            const menusName = menu.title;
            if(!mapMenus[menusName]) return false;
            return menu;
        }).filter(val => val);

        // 菜单内容组件
        const childs = menus.map(menu => {
            const menusName = menu.title;
            if(!mapMenus[menusName]) return false;
            return React.createElement(
                asyncComponent(() => import(/* webpackChunkName: `${menusName}` */ `@pages/MonitorMenus`)),
                { menus: menu.child, key: menu.index }
            )
        }).filter(val => val);

        return (
            <Tabs tabs={titles}>
                {childs}
            </Tabs>
        )
    }
}