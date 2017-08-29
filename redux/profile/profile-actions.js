import axios from 'axios';
import { GLOB_URL, act } from "./actionsAndUrl";


export function getHash (hash) {
    return dispatch => {
        dispatch({type: act.GET_HASH, hash});
    }
}

export function getPackages (type) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get(`${GLOB_URL}packages.php`, {params: {type}})
            .then((res) => {
                dispatch({type: act.PACKAGES, packages: res.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function getUserInfo (type, hash) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get(`${GLOB_URL}userInfo.php`, {params: {type, hash}})
            .then((res) => {
                dispatch({type: act.USER, user: res.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}