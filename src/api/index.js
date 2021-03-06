const url = 'http://localhost:3001/api/v1';

export const insertMovie =async (payload) => await fetch(`${url}/movie`, {
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method:"POST",
    body:JSON.stringify(payload)
    
})

export const getAllMovies = async() => {
    const response = await fetch(`${url}/movie`)
    const data = await response.json().then(data=>data)
    return data;
};
export const updateMovieById = async (id, payload) => await fetch(`${url}/movie/${id}`, {
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method:"PUT",
    body:JSON.stringify(payload)
    
});
export const deleteMovieById = async (id) => await fetch(`${url}/movie/${id}`, {
    method:"DELETE",
});

export const getMovieById = async(id) =>  {
    const response = await fetch(`${url}/movie/${id}`);
    const data = await response.json()
   return data
};

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis