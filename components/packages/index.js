import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    setLanguage,
    getBitcoinCost,
    addUser,
    loginUser,
    getPackages,
    getCoinCost
} from '../../redux/front/front-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.front;
};

export default connect(
    mapStateToProps,
    {
        setLanguage,
        getBitcoinCost,
        addUser,
        loginUser,
        getPackages,
        getCoinCost

    })(App);
