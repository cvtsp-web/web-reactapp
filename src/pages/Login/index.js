import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import { Control } from 'react-keeper'
import LoginFrame from './LoginFrame'
import { API_login } from '@/store/login'
import { connect } from 'react-redux'
import './style/index.css'

@connect()
export default class Login extends Component {
    render() {
        return (
            <div className="login-bg">
                <WingBlank>
                    <WhiteSpace />
                    <LoginFrame onChange={(val) => this.loginConfirmCallback(val)} />
                </WingBlank>
            </div>
        )
    }
    
    async loginConfirmCallback(val) {
        const flag = await this.props.dispatch(API_login());
        flag && Control.go('/monitor');
    }
}
