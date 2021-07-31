import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``
class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src='file:../../public/movie-icon.png' width="50" height="50" alt="logo" />
            </Wrapper>
        )
    }
}

export default Logo