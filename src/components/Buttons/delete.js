import React, { useContext } from 'react'
import styled from 'styled-components'

import apis from '../../api/index'
import { Context } from '../../context/Context'

const Delete = styled.div`
color: #ff0000;
cursor: pointer;
`

const DeleteMovie = () => {

    const{id} = useContext(Context);



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