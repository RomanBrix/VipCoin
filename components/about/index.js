import React from 'react';
import { connect } from 'react-redux';
import {
    setLanguage,
    addUser,
    loginUser,
    getCoinsInfo
} from '../../redux/front/front-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.front;
};

export default connect(
    mapStateToProps,
    {
        setLanguage,
        addUser,
        loginUser,
        getCoinsInfo
    })(App);
