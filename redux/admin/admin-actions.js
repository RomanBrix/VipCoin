import axios from 'axios';
import { GLOB_URL, act } from "./actionsAndUrl";

export function getGenInfo (type) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get(`${GLOB_URL}getGenerally.php`, {params: {type}})
            .then((res) => {
                dispatch({
                    type: act.GET_GEN_INFO,
                    info: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


export function setGenerally (type, newValue) {
    return dispatch => {
        dispatch({type: 'REQUEST'});


        axios.post(`${GLOB_URL}setGenerally.php`, {
            type,
            newValue
        })
            .then(function(res) {
                dispatch({type: act.SET_GEN_INFO, updated: res.data})

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getUsers (type) {
    return dispatch => {
        dispatch({type: 'REQUEST'});


        axios.get(`${GLOB_URL}getUsers.php`, {params: {type}})
            .then(function(res) {
                // console.log(res);
                dispatch({type: act.GET_USERS_INFO, users: res.data})

            })
            .catch((error) => {
                console.log(error);
            });
    }
}
export function setCoinsToUser (type, hash, coins,) {
    return dispatch => {
        dispatch({type: 'REQUEST'});


        axios.post(`${GLOB_URL}setCoinsToUser.php`, {
            type,
            hash,
            coins,
        })
            .then(function(res) {
                console.log(res);
                dispatch({type: act.SET_GEN_INFO, updated: res.data})

            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export function getPackages (type) {
    return dispatch => {
        dispatch({type: 'REQUEST'});


        axios.get(`${GLOB_URL}getPack.php`, {params: {type}})
            .then(function(res) {
                // console.log(res);
                dispatch({type: act.GET_PACKAGES_INFO, packages: res.data})

            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export function setNewPackVal (type, id, name, cost, status) {
    return dispatch => {
        dispatch({type: 'REQUEST'});


        axios.post(`${GLOB_URL}setNewPackValue.php`, {
            type,
            id,
            name,
            cost,
            status
        })
            .then(function(res) {
                // console.log(res);
                dispatch({type: act.SET_GEN_INFO, updated: res.data})

            })
            .catch((error) => {
                console.log(error);
            });
    }
}