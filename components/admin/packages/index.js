import React from 'react';
import { connect } from 'react-redux';
import {
    getPackages,
    setNewPackVal,
    getAdminUser
} from '../../../redux/admin/admin-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.admin;
};

export default connect(
    mapStateToProps,
    {
        getPackages,
        setNewPackVal,
        getAdminUser

    })(App);
