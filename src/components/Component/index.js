import React from 'react'
import classnames from 'classnames'

export default class Component extends React.Component {
    className(...args) {
        return classnames.apply(this, args.concat(this.props.className));
    }

    classNames(...args) {
        return classnames.apply(this, args);
    }

    /**
     * 
     * @param {Object} args 
     */
    style(args) {
        return Object.assign({}, args, this.props.style);
    }
}