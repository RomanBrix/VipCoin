const InitialState = {
    request: false,
    language: "",
    // translate: [[]]
}

const frontReducers = (state = InitialState, action) => {
    switch (action.type) {

        case 'REQUEST':
            return{
                request: true,
                language: state.language,
                // translate: state.translate

            };
        case 'SET_LANGUAGE':
            return {
                request: false,
                language: action.lang,
                // translate: action.translates


            };
        default: return state;
    }
};

export default frontReducers;