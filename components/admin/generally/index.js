import React from 'react';
import { connect } from 'react-redux';
import {

} from '../../../redux/admin/admin-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.front;
};

export default connect(
    mapStateToProps,
    {

    })(App);
