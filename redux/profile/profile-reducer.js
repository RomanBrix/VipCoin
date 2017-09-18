import {addUser} from "./profile-actions";
import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    hash: false,
    vipcoinCost: 0.15,
    coin_cost: 0,
    coins_value: 0,
    global_coin_cost: 0,
    user: [],
    crypto:[],
    updated: "",

};

const profileReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: state.coin_cost,
                coins_value: state.coins_value,
                global_coin_cost: state.global_coin_cost,
                user: state.user,
                crypto: state.crypto,
                updated: state.updated


            };
        case act.GET_HASH:
            return {
                request: false,
                hash: action.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: state.coin_cost,
                coins_value: state.coins_value,
                global_coin_cost: state.global_coin_cost,
                user: state.user,
                crypto: state.crypto,
                updated: state.updated


            };
        case act.COINCOST:
            return {
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: state.coin_cost,
                coins_value: state.coins_value,
                global_coin_cost: action.global_coin_cost,
                user: state.user,
                crypto: state.crypto,
                updated: state.updated
            };
        case act.PACKAGES:
            return {
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: action.coin_cost,
                coins_value: action.coins_value,
                global_coin_cost: state.global_coin_cost,
                user: state.user,
                crypto: state.crypto,
                updated: state.updated


            };
        case act.USER:
            return{
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: state.coin_cost,
                coins_value: state.coins_value,
                global_coin_cost: state.global_coin_cost,
                user: action.user,
                crypto: state.crypto,
                updated: state.updated

            };
        case act.GET_CRYPTO:
            return{
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: state.coin_cost,
                coins_value: state.coins_value,
                global_coin_cost: state.global_coin_cost,
                user: state.user,
                crypto: [action.btc, action.ltc, action.eth],
                updated: state.updated

            };
        case act.UPDATED:
            return{
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                coin_cost: state.coin_cost,
                coins_value: state.coins_value,
                global_coin_cost: state.global_coin_cost,
                user: state.user,
                crypto: state.crypto,
                updated: action.updated
            };
        default: return state;

    }
};

export default profileReducers;