import React from 'react'
import PropTypes from 'prop-types'
import { Component } from "@/components"
import '../../static/css/iconfont.css'

export default class Icon extends Component {
    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string
    }

    static defaultProps = {
        size: 16
    }

    render() {
        const { type, size, color } = this.props;
        return (
            <i 
                onClick={() => this.handlerClick()}
                style={this.style({'fontSize': size +'px', 'color': color})}
                className={this.className('el-icon-tsp-' + type)}
            ></i>
        )
    }

    handlerClick() {
        this.props.onClick && this.props.onClick();
    }
}