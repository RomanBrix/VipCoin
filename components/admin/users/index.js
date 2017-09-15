import React from 'react';
import { connect } from 'react-redux';
import {
    getUsers,
    setCoinsToUser
} from '../../../redux/admin/admin-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.admin;
};

export default connect(
    mapStateToProps,
    {
        getUsers,
        setCoinsToUser

    })(App);
