import React, { useState, useEffect } from 'react'
import api from '../api'
import './movieList.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const UpdateMovie = (props) => {
    const updateUser = event => {
        console.log(event)
        event.preventDefault()

        window.location.href = `/movies/update/${props.id}`
    }

    return (
        <Update onClick={updateUser}>Update</Update>
    )



}

const DeleteMovie = (props) => {
    const { id } = props


    const deleteUser = event => {
        event.preventDefault();
        if (
            window.confirm(

                `Do tou want to delete the movie ${id} permanently?`,
            )
        ) {
            api.deleteMovieById(id)

            window.location.reload()
        }
    }

    return <Delete onClick={deleteUser}>Delete</Delete>

}

const MoviesList = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isCanceled = false
        api.getAllMovies()
            .then(movie => {
                setData(movie.data.data);
                setIsLoading(true);
            })
        return () => {
            isCanceled = true;
        }
    }, [])
    const MovieListFromState = () => {
        let count = 1;
        return data.map((item) => {
            return <tr key={item._id}>
                <th scope="row">{count++}</th>
                <td>{item.name}</td>
                <td>{item.rating}</td>
                <td><span><UpdateMovie id={item._id} /></span><span><DeleteMovie id={item._id} /></span></td>
            </tr>
        })
    }
    return (
        <Wrapper>
            <table className="table customize">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <MovieListFromState />
                </tbody>
            </table>
        </Wrapper>
    )
}

export default MoviesList