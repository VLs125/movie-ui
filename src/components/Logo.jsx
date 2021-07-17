import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``
class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg' width="50" height="50" alt="" />
            </Wrapper>
        )
    }
}

export default Logo