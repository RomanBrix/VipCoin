import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
};

const adminReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
            };

        case "asd":
            return {
                request: false,
            };

        default: return state;

    }
};

export default adminReducers;