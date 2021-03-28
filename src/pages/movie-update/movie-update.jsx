import React, { Component } from 'react'

import styled from 'styled-components'
import apis from '../../api'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rating: '',
            time: '',
            img:'',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }
    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleChangeInputImg = async event => {
        const img = event.target.value
        this.setState({ img })
    }

    handleUpdateMovie = async () => {
        const { id, name, rating, time, img } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime, img }

        await apis.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
                img:'',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await apis.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            rating: movie.data.data.rating,
            time: movie.data.data.time.join('/'),
            img:movie.data.data.img,
        })
    }

    render() {
        const { name, rating, time , img } = this.state
        return (
            <Wrapper>
                <Title>Update Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    
                    onChange={this.handleChangeInputTime}
                />
                <Label>Image: </Label>
                <InputText
                    type="text"
                    value={img}
                    onChange={this.handleChangeInputImg}
                />

                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate