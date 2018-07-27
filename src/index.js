import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FastClick from 'fastclick'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
FastClick.attach(document.body);
registerServiceWorker();
