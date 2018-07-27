import React, { Component } from 'react'
import { Button, InputItem, List, Icon, WhiteSpace } from 'antd-mobile'
import { createForm } from 'rc-form'
import { errorTips } from '@utils/error'

class LoginFrame extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <List>
                    {/* 企业编码输入框 */}
                    {
                        getFieldDecorator('enterpriseCode', {
                            rules: [
                                {required: true, message: '企业编码不能为空!'}
                            ]
                        })(
                            <InputItem placeholder="企业编码">
                                <Icon type="check-circle" />
                            </InputItem>
                        )
                    }

                    {/* 用户名输入框 */}
                    {
                        getFieldDecorator('userName', {
                            rules: [
                                {required: true, message: '内容不能为空!'}
                            ]
                        })(
                            <InputItem placeholder="用户名">
                                <Icon type="check-circle" />
                            </InputItem>
                        )
                    }

                    {/* 密码输入框 */}
                    {
                        getFieldDecorator('password', {
                            rules: [
                                {required: true, message: '密码不能为空!'}
                            ]
                        })(
                            <InputItem placeholder="密码">
                                <Icon type="check-circle" />
                            </InputItem>
                        )
                    }
                </List>
                <WhiteSpace />
                <Button 
                    type="primary" 
                    onClick={() => this.enterHomePage()}>
                    login
                </Button>
            </div>
        )
    }

    /**
     * @fileOverview: 验证是否通过的回调
     */
    enterHomePage() {
        this.props.form.validateFields(async (err, values) => {
            if(!err && this.props.onChange) {
                this.props.onChange(values);
            }else {
                errorTips(err);
            }
        });
    }
}

export default createForm()(LoginFrame);