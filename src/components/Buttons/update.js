import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../context/Context'

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
    &:hover{
        display: inline-block;
        box-shadow: 2px 2px 2px black;
        
    }
`



const UpdateMovie = ({id}) => {
    
    const updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${id}`
    }

    return (
        <Update onClick={updateUser}>Update</Update>
    )



}

export default UpdateMovie

