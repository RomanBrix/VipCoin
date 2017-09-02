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
        const url = "https://api.cryptonator.com/api/full/btc-usd";
        axios.get(""+url+"")
            .then(function(res) {
                // let cost = +res.data.query.results.rate.Rate;
                let cost = +res.data.ticker.price;
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

export function getCoinsInfo (type) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get(`${GLOB_URL}generally.php`, {params: {type}})
            .then((res) => {
                dispatch({
                    type: act.COINS_INFO,
                    maxCoins: res.data.maxCoinsHave,
                    soldCoins: res.data.totalSold
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
export function getCoinCost (type) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get(`${GLOB_URL}generally.php`, {params: {type}})
            .then((res) => {
                dispatch({
                    type: act.COIN_COST,
                    costOfOneCoin: res.data.costOfOneCoin,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}