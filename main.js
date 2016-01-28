require("babel-core/register");
require("normalize.css/normalize.css");

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Main from './containers/Main';

// Configure Redux store
const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Main />
    </Provider>
), document.getElementById('app'));
