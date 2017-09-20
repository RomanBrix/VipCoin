import React from 'react';
import { connect } from 'react-redux';
import {
    getHash,
    getPackages,
    getUserInfo,
    getCrypto,
    updateSettings
} from '../../../redux/profile/profile-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.profile;
};

export default connect(
    mapStateToProps,
    {
        getHash,
        getPackages,
        getUserInfo,
        getCrypto,
        updateSettings

    })(App);
