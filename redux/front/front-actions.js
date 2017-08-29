import axios from 'axios';
import { GLOB_URL, act } from "./actionsAndUrl";

// export function getNews () {
//     return dispatch =>{
//         dispatch({type: 'REQUEST'});
//
//         axios.get('http://localhost:8888/public/getNews.php')
//             .then((res)=>{
//                 console.log(res);
//                 dispatch({type: 'NEWS_REQUEST', payload: res.data});
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
// }

export function setLanguage (lang) {
    return dispatch => {
        dispatch({type: act.SET_LANGUAGE, lang});
    }
}

export function getBitcoinCost () {
    return dispatch => {
        // const url = "https://api.cryptonator.com/api/full/btc-usd";
        const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22BTCUSD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
        axios.get(""+url+"")
            .then(function(res) {
                let cost = +res.data.query.results.rate.Rate;
                dispatch({type: act.BITCOIN_COST,bitcoinCost: cost.toFixed(2)})
            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export function addUser (type,login, mail, pass) {
    return dispatch => {
        dispatch({type: 'REQUEST'});


        axios.post(`${GLOB_URL}registration.php`, {
            type,
            login,
            mail,
            pass,
        })
            .then(function(res) {
                    dispatch({type: act.USER_CHECK_LOGIN, userState: res.data})

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function loginUser(type, log, pass) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get(`${GLOB_URL}login.php`, {params: {type, log, pass}})
            .then((res) => {
                dispatch({type: act.USER_LOGIN, userLogin: res.data});
            })
            .catch((error) => {
                console.log(error);
            })
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