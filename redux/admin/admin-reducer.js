import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    generallyInfo: {
        costOfOneCoin: 0,
        maxCoinsHave: 0,
        totalSold: 0,
        users: []
    },
    updated: ""
};

const adminReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: state.users

            };

        case act.GET_GEN_INFO:
            return {
                request: false,
                generallyInfo: action.info,
                updated: state.updated,
                users: state.users

            };
        case act.SET_GEN_INFO:
            return {
                request: false,
                generallyInfo: state.generallyInfo,
                updated: action.updated,
                users: state.users
            };
        case act.GET_USERS_INFO:
            return{
                request: false,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: action.users
            }

        default: return state;

    }
};

export default adminReducers;