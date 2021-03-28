import React from 'react'
import styled from 'styled-components'

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
    &:hover{
        display: inline-block;
        box-shadow: 2px 2px 2px black;
        
    }
`



const UpdateMovie = ({id}) => {
    
    const update = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${id}`
    }

    return (
        <Update onClick={update}>Update</Update>
    )



}

export default UpdateMovie

