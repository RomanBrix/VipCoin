import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';

import  App from '../../components/admin/users';
import MainCSS from '../../css/scss/admin/main.scss';
import css from '../../css/scss/admin/users/index.scss';
import bsThemeCss from 'bootstrap/dist/css/bootstrap-theme.min.css';
import bsCss from 'bootstrap/dist/css/bootstrap.min.css';

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
