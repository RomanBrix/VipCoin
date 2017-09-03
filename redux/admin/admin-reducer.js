import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    generallyInfo: {
        costOfOneCoin: 0,
        maxCoinsHave: 0,
        totalSold: 0
    },
    updated: ""
};

const adminReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                generallyInfo: state.generallyInfo,
                updated: state.updated
            };

        case act.GET_GEN_INFO:
            return {
                request: false,
                generallyInfo: action.info,
                updated: state.updated

            };
        case act.SET_GEN_INFO:
            return {
                request: false,
                generallyInfo: state.generallyInfo,
                updated: action.updated
            };

        default: return state;

    }
};

export default adminReducers;