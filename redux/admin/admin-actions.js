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