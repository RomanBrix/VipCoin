import {addUser} from "./profile-actions";
import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    hash: false,
    vipcoinCost: 0.15,
    packages: [],
    user: []
};

const profileReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                packages: state.packages,
                user: state.user

            };
        case act.GET_HASH:
            return {
                request: false,
                hash: action.hash,
                vipcoinCost: state.vipcoinCost,
                packages: state.packages,
                user: state.user

            };
        case act.PACKAGES:
            return {
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                packages: action.packages,
                user: state.user

            };
        case act.USER:
            return{
                request: false,
                hash: state.hash,
                vipcoinCost: state.vipcoinCost,
                packages: state.packages,
                user: action.user
            };
        default: return state;

    }
};

export default profileReducers;