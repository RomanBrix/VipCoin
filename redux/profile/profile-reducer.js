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
        case "first":
            return {
                request: false,
                hash: action.hash
            };
        default: return state;
    }
};

export default profileReducers;