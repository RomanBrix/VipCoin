import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';

import  App from '../components/packages'
import MainCSS from '../css/scss/main.scss';
import css from '../css/scss/packages/index.scss';


const init = document.getElementById('mountNode');
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>, init
);
