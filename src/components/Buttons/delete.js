import React from 'react'
import styled from 'styled-components'

import apis from '../../api/index'

const Delete = styled.div`
color: #ff0000;
cursor: pointer;
&:hover{
    display: inline-block;
    box-shadow: 2px 2px 2px black;
}
`

const DeleteMovie = ({id}) => {


    const deleteUser = event => {
        event.preventDefault();
        if (
            window.confirm(

                `Do tou want to delete the movie ${id} permanently?`,
            )
        ) {
            apis.deleteMovieById(id)

            window.location.reload()
        }
    }

    return <Delete onClick={deleteUser}>Delete</Delete>

}

export default DeleteMovie