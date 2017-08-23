const InitialState = {
    request: false,
    language: "",
    vipcoinCost: 0.15,
    bitcoinCost: 0,
}

const frontReducers = (state = InitialState, action) => {
    switch (action.type) {

        case 'REQUEST':
            return{
                request: true,
                language: state.language,
                vipcoinCost: state.vipcoinCost

            };
        case 'SET_LANGUAGE':
            return {
                request: false,
                language: action.lang,
                vipcoinCost: state.vipcoinCost,


            };
        case 'GET_COST_VIPCOIN':
            return {
                request: false,
                language: state.language,
                vipcoinCost: action.vipcoinCost,


            };
        case 'GET_COST_BITCOIN':
            return {
                request: false,
                language: state.language,
                vipcoinCost: state.vipcoinCost,
                bitcoinCost: action.bitcoinCost,
            };
        default: return state;
    }
};

export default frontReducers;