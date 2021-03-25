const initialState = {
    data: [],
    loading:false,
    error:null,

}

const reducer = (state, action) => {


    switch (action.type) {
        case 'FETCH_MOVIES_REQUESTED':
            return {
                data: [],
                loading: true,
                error: null,
            };
        case 'FETCH_MOVIES_SUCCESS':
            return {
                data: action.payload,
                loading: false,
                error: null,

            };

        case 'FETCH_MOVIES_FAILURE':
            return {
                data: [],
                loading: false,
                error: action.payload,

            };
        default:
            return state;

    }


}





