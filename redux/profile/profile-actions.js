import axios from 'axios';
import { GLOB_URL, act } from "./actionsAndUrl";


export function getHash (hash) {
    return dispatch => {
        dispatch({type: act.GET_HASH, hash});
    }
}
