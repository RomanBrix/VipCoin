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
    updated: "",
    reduxAdminUser: ""
};

const adminReducers = (state = InitialState, action) => {
    switch (action.type) {

        case act.REQUEST:
            return{
                request: true,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: state.users,
                packages: state.packages,
                reduxAdminUser: state.reduxAdminUser

            };

        case act.GET_GEN_INFO:
            return {
                request: false,
                generallyInfo: action.info,
                updated: state.updated,
                users: state.users,
                packages: state.packages,
                reduxAdminUser: state.reduxAdminUser

            };
        case act.SET_GEN_INFO:
            return {
                request: false,
                generallyInfo: state.generallyInfo,
                updated: action.updated,
                users: state.users,
                packages: state.packages,
                reduxAdminUser: state.reduxAdminUser

            };
        case act.GET_USERS_INFO:
            return{
                request: false,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: action.users,
                packages: state.packages,
                reduxAdminUser: state.reduxAdminUser

            };

        case act.GET_PACKAGES_INFO:
            return{
                request: false,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: state.users,
                packages: action.packages,
                reduxAdminUser: state.reduxAdminUser

            };
        case "ADMIN_USER":
            return{
                request: false,
                generallyInfo: state.generallyInfo,
                updated: state.updated,
                users: state.users,
                packages: state.packages,
                reduxAdminUser: action.reduxAdminUser

            };

        default: return state;

    }
};

export default adminReducers;