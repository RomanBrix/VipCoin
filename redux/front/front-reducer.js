import {addUser} from "./front-actions";
import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    language: "",
    vipcoinCost: 0.15,
    bitcoinCost: 0,
    userState: 'a',
    userLogin: false,
    packages: [],
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
                userLogin: state.userLogin,
                packages: state.packages,

            };

        case act.SET_LANGUAGE:
            return {
                request: false,
                language: action.lang,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: state.packages,
            };

        case act.GET_VIPCOIN_COST:
            return {
                request: false,
                language: state.language,
                vipcoinCost: action.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: state.packages,

            };
        case act.BITCOIN_COST:
            return {
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: action.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: state.packages,

            };

        case act.USER_CHECK_LOGIN:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: action.userState,
                userLogin: state.userLogin,
                packages: state.packages,

            };
        case act.USER_LOGIN:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: action.userLogin,
                packages: state.packages,

            };
        case act.PACKAGES:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: action.packages,
            };

        default: return state;
    }
};

export default frontReducers;