import React from 'react';
import { connect } from 'react-redux';
import {
    getHash,
    getUserInfo,
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
        getUserInfo,
        updateSettings

    })(App);
