import axios from 'axios';
import translate from "../../data/translate.json";


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
        dispatch({type: 'SET_LANGUAGE', lang});
    }
}
export function getBitcoinCost () {
    return dispatch => {
        // const url = "https://api.cryptonator.com/api/full/btc-usd";
        const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22BTCUSD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
        axios.get(""+url+"")
            .then(function(res) {
                let cost = +res.data.query.results.rate.Rate;
                dispatch({type: 'GET_COST_BITCOIN',bitcoinCost: cost.toFixed(2)})
            })
            .catch((error) => {
                console.log(error);
            });
    }
}