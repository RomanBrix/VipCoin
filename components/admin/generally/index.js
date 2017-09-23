import React from 'react';
import { connect } from 'react-redux';
import {
    getGenInfo,
    setGenerally,
    getAdminUser

} from '../../../redux/admin/admin-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.admin;
};

export default connect(
    mapStateToProps,
    {
        getGenInfo,
        setGenerally,
        getAdminUser


    })(App);
