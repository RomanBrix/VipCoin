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
    maxCoins: 1000000,
    soldCoins: 1,
    tableInvest: []
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
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest
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
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest

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
                tableInvest: state.tableInvest

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
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest

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
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest

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
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest

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
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest
            };

        case act.COINS_INFO:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: state.packages,
                maxCoins: action.maxCoins,
                soldCoins: action.soldCoins,
                tableInvest: state.tableInvest
            };
        case act.COIN_COST:
            return{
                request: false,
                language: state.language,
                vipcoinCost: action.costOfOneCoin,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: state.packages,
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: state.tableInvest
            };

        case act.TABLE_INVEST:
            return{
                request: false,
                language: state.language,
                vipcoinCost: state.costOfOneCoin,
                bitcoinCost: state.bitcoinCost,
                userState: state.userState,
                userLogin: state.userLogin,
                packages: state.packages,
                maxCoins: state.maxCoins,
                soldCoins: state.soldCoins,
                tableInvest: action.tableInvest
            };

        default: return state;
    }
};

export default frontReducers;