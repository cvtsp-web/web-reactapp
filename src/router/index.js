
import React, { Component} from 'react'
import { asyncComponent } from '@/components'
import { HashRouter, Route } from 'react-keeper'

export default class CvRouter extends Component {
    render() {
        return (
            <HashRouter>
                <div className="router-group">
                    <Route index exact component={asyncComponent(() => import('@pages/Login'))} path="/>" />
                    <Route component={asyncComponent(() => import('./monitor.js'))} path="/monitor" />
                </div>
            </HashRouter>
        )
    }
}
