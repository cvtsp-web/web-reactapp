import React from 'react'
import reactDOM from 'react-dom'
import { Component, Icon } from "@/components"
import { NavBar } from 'antd-mobile'
import { Control } from 'react-keeper'
import './style/index.less'

export default class View extends Component {
    static defaultProps = {
        isNavBar: true
    }

    //进入的动画效果
    componentDidMount() {
        const rootEl = reactDOM.findDOMNode(this);
        rootEl.classList.add('slide-in-leave');
        rootEl.addEventListener('transitionend', _ => {
            rootEl.classList.remove('slide-in-leave');
            rootEl.classList.remove('slide-in-leave-active');
        });

        var timer = setTimeout( _ => {
            clearTimeout(timer);
            timer = null;
            rootEl.classList.add('slide-in-leave-active');
        });
    }

    render() {
        const { isNavBar } = this.props;
        return (
            <div 
            className={this.className('view-main')}>
                {
                    isNavBar &&
                    <NavBar 
                    mode="dark"
                    icon={<Icon type="jiantou" />}
                    onLeftClick={() => this.handlerLeftClick()}>
                        {Control.state.title}
                    </NavBar>
                }
                {this.props.children}
            </div>
        )
    }

    // 导航左侧的点击事件
    handlerLeftClick() {      
        Control.history.goBack();
        
    }
}