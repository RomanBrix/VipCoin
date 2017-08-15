const InitialState = {
    request: false,
    language: "",
}

const frontReducers = (state = InitialState, action) => {
    switch (action.type) {

        case 'REQUEST':
            return{
                request: true,
                language: state.language

            };
        case 'SET_LANGUAGE':
            return {
                request: false,
                language: action.lang


            };
        default: return state;
    }
};

export default frontReducers;