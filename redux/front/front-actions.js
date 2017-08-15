// import axios from 'axios';
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