import React, { useState, useEffect } from 'react'
import './movieList.css'
import styled from 'styled-components'
import ItemList from './Item-list/item-list'
import apis from '../api'
import { Context } from '../context/Context'
import { fetchMovies } from '../actions/actions'
import { connect } from 'react-redux'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const MoviesList = () => {


const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    let isCanceled = false
    apis.getAllMovies()
        .then(movie => {
            setData(movie.data.data);
            setIsLoading(true);
        })
    return () => {
        isCanceled = true;
    }
}, [])


    return (
        <Wrapper>
            <table className="table customize">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th  scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemList/>
                </tbody>
            </table>
        </Wrapper>
    )
}
const mapStateToProps = ({data} ) => {
    return { 
        data:data
     }
}
const mapDispatchToProps = (dispatch) => {
    const api = apis
    return {
        fetchMovies: fetchMovies(api, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)