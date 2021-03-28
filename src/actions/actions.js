const moviesLoaded = (newMovies) => {
    return {
        type:'FETCH_MOVIES_SUCCESS',
        payload: newMovies,
    }

}
const moviesRequested = () => {
    return {
        type:'FETCH_MOVIES_REQUESTED'
    }

}

const moviesError = (error) => {
    return {
        type:'FETCH_MOVIES_FAILURE',
        payload: error,
    };

}

const fetchMovies = (apis, dispatch) => () => {
    dispatch(moviesRequested());
    apis.getAllMovies()
        .then((data) => {
            dispatch(moviesLoaded(data.data.data));
        })
        .catch((error) => {
            dispatch(moviesError(error));
        })
}

export {
    fetchMovies
}