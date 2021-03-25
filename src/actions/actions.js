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
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId,
    };

}
export const movieDelete = (movieId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId,
    };

}
export const movieCreate = (newMovies) => {
    return {
        type: 'BOOK_DECREASE_IN_CART',
        payload: newMovies,
    };

}

const fetchMovies = (apis, dispatch) => () => {
    dispatch(moviesRequested());
    apis.getAllMovies()
        .then((data) => {
            dispatch(moviesLoaded(data));
        })
        .catch((error) => {
            dispatch(moviesError(error));
        })
}

export {
    fetchMovies
}