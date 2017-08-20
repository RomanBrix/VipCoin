import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    setLanguage,
    getBitcoinCost
} from '../../redux/front/front-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.front;
};

export default connect(
    mapStateToProps,
    {
        setLanguage,
        getBitcoinCost

    })(App);
