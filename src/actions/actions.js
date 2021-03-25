const moviesLoaded = (newMovies) => {
    return {
        type: 'FETCH_MOVIES_SUCCESS',
        payload: newMovies,
    }

}
const moviesRequested = () => {
    return {
        type: 'FETCH_MOVIES_REQUESTED'
    }

}

const moviesError = (error) => {
    return {
        type: 'FETCH_MOVIES_FAILURE',
        payload: error,
    };

}
export const movieUpdate = (movieId) => {
    return {
        type: 'MOVIE_UPDATE',
        payload: movieId,
    };

}
export const movieDelete = (movieId) => {
    return {
        type: 'MOVIE_DELETE',
        payload: movieId,
    };

}
export const movieCreate = (newMovies) => {
    return {
        type: 'MOVIE_CREATE',
        payload: newMovies,
    };

}

const fetchMovies = (apis, dispatch) => () => {
    console.log(apis);
    dispatch(moviesRequested());
    apis.getAllMovies()
        .then((data) => {
            dispatch(moviesLoaded(data.data));
        })
        .catch((error) => {
            dispatch(moviesError(error));
        })
}

export {
    fetchMovies
}