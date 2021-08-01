import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../resources/movie-icon.png';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``
class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src={logo}  width="128" height="128" alt="logo" />
            </Wrapper>
        )
    }
}

export default Logo