import { act } from "./actionsAndUrl";

const InitialState = {
    request: false,
    generallyInfo: {
        costOfOneCoin: 0,
        maxCoinsHave: 0,
        totalSold: 0,
    },
    packages: [],
    users: [],
    updated: ""
};

const adminReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: state.users,
                packages: state.packages

            };

        case act.GET_GEN_INFO:
            return {
                request: false,
                generallyInfo: action.info,
                updated: state.updated,
                users: state.users,
                packages: state.packages

            };
        case act.SET_GEN_INFO:
            return {
                request: false,
                generallyInfo: state.generallyInfo,
                updated: action.updated,
                users: state.users,
                packages: state.packages
            };
        case act.GET_USERS_INFO:
            return{
                request: false,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: action.users,
                packages: state.packages
            };

        case act.GET_PACKAGES_INFO:
            return{
                request: false,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: state.users,
                packages: action.packages
            };

        default: return state;

    }
};

export default adminReducers;