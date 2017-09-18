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
            console.log(res);
                dispatch({type: act.PACKAGES,  coin_cost: +res.data[0], coins_value: +res.data[1]});
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

export function getCrypto () {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.get("https://api.cryptonator.com/api/ticker/usd-ltc")
            .then((res) => {
            const ltc = res.data.ticker.price;

                axios.get("https://api.cryptonator.com/api/ticker/usd-btc")
                    .then((res) => {
                        const btc = res.data.ticker.price;

                        axios.get("https://api.cryptonator.com/api/ticker/usd-eth")
                            .then((res) => {
                                const eth = res.data.ticker.price;

                                dispatch({type: act.GET_CRYPTO,btc: btc, ltc: ltc, eth: eth})

                            })
                            .catch((error) => {
                                console.log(error);
                            });

                    })
                    .catch((error) => {
                        console.log(error);
                    });

            })
            .catch((error) => {
                console.log(error);
            });



    }
}

export function updateSettings (type, hash,currPassword, newItem) {
    return dispatch => {
        dispatch({type: 'REQUEST'});

        axios.post(`${GLOB_URL}settings.php`, {
            type,
            hash,
            currPassword,
            newItem
        })
            .then((res) => {
                dispatch({type: act.UPDATED, updated: res.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

