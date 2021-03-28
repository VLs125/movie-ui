import React from 'react'
import styled from 'styled-components'


const Details = styled.div`
color: green;
cursor: pointer;
&:hover{
    display: inline-block;
    box-shadow: 2px 2px 2px black;
}
`

const DetailsMovie = ({id}) => {




    const details = event => {
        event.preventDefault();
        window.location.href = `/movies/details/${id}`
    }
   

    return <Details onClick={details}>Details</Details>
}

export default DetailsMovie

