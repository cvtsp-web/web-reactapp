import React from 'react'
import { Component, Icon } from '@/components'
import { Grid } from 'antd-mobile'
import { Control } from 'react-keeper'
import '@static/css/mixins/common.less'

export default class MonitorMenus extends Component {
    render() {
        const gridChilds = this.props.menus.map((menu, index) => {
            const title = menu.title;
            const data = menu.child.map(child => ({
                title: child.title,
                power: child.power,
                url: child.url,
                icon: <Icon type={child.icon}  />,
                text: <div className="ellipsis">{child.title}</div>
            }));    
            return (
                <div key={index}>
                    <div>{title}</div>
                    <Grid data={data} onClick={(el) => this.handlerGridClick(el)}></Grid>
                </div>
            )
        });
        return (
            <div>{gridChilds}</div>
        )
    }

    /**
     * 点击表格的事件回调
     * @param {Object} el 
     */
    handlerGridClick(el) {
        Control.go(el.url, {
            title: el.title,
            power: el.power
        });
    }
}