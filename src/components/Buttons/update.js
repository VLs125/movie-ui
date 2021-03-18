import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../context/Context'

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`



const UpdateMovie = () => {
    const{id} = useContext(Context);
    const updateUser = event => {
        console.log(event)
        event.preventDefault()

        window.location.href = `/movies/update/${id}`
    }

    return (
        <Update onClick={updateUser}>Update</Update>
    )



}

export default UpdateMovie

