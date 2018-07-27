import React, { Component } from 'react'

export default function (loadComponent, connectComponent) {
    return class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null
            }
        }

        componentWillMount() {   
            if(this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
            .then(module => module.default)
            .then(Component => {
                this.setState({ 
                    Component: connectComponent ? connectComponent(Component) : Component
                });
            })
            .catch(err => {
                console.log(err)
            })
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            const { Component } = this.state;
            return (Component) ? <Component {...this.props} /> : null;
        }
    }
}