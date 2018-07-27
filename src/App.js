import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import CvRouter from './router'
import '@/static/css/common.less'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <CvRouter />
      </Provider>
    );
  }
}

export default App;
