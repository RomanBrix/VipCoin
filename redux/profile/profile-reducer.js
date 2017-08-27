import {addUser} from "./profile-actions";
import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    hash: false
};

const profileReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                hash: state.hash
            };
        case act.GET_HASH:
            return {
                request: false,
                hash: action.hash
            };
        default: return state;
    }
};

export default profileReducers;