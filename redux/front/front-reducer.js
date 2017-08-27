import {addUser} from "./front-actions";
import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    language: "",
    vipcoinCost: 0.15,
    bitcoinCost: 0,
    userState: 'a',
    userLogin: false,
};

const frontReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin
            };
        case act.SET_LANGUAGE:
            return {
                request: false,
                language: action.lang,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin



            };
        case act.GET_VIPCOIN_COST:
            return {
                request: false,
                language: state.language,
                vipcoinCost: action.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin



            };
        case act.BITCOIN_COST:
            return {
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: action.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin

            };

        case act.USER_CHECK_LOGIN:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: action.userState,
                userLogin: state.userLogin
            };
        case act.USER_LOGIN:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: action.userLogin
            };

        default: return state;
    }
};

export default frontReducers;