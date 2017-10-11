import React from 'react';
import { connect } from 'react-redux';
import {
    getGenInfo,
    setGenerally,
    getAdminUser,
    setManualSell

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
        getAdminUser,
        setManualSell


    })(App);
