import React, { useEffect } from 'react'
import './movie-list.css'
import styled from 'styled-components'
import ItemList from '../Item-list/item-list'
import apis from '../../api'
import { fetchMovies } from '../../actions/actions'
import { connect } from 'react-redux'
import Loader from '../../components/loader/loader'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const MoviesList = (data) => {
    return (
        <Wrapper>
            <table className="table customize">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemList data={data} />
                </tbody>
            </table>
        </Wrapper>
    )
}


const MovieListContainer = (props) => {
    const { fetchMovies,data,loading,error} = props

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);


    if (loading) {

        return <Loader />
    }

    return (<MoviesList data={data} />)
}


const mapStateToProps = (data) => {
    return {
        data:data['data'],
        loading:data['loading'],
        error:data['error']

       
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        fetchMovies: fetchMovies(apis, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)