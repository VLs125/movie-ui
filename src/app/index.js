import React, {useState} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {NavBar} from '../components'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieDetails from '../pages/movie-details/movie-details'
import MoviesUpdate from '../pages/movie-update/movie-update'
import MovieListContainer from '../pages/movie-list/movies-list'
import MoviesInsert from '../pages/movie-insert/movie-insert'
import Login from "../pages/signin/login.page";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onLogin = () => {
        setLoggedIn(true);
    }

    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return <Login isLoggedIn={isLoggedIn}
                                          onLogin={onLogin}/>
                    }}/>
                <Route path="/movies/list" exact component={MovieListContainer}/>
                <Route path="/movies/create" exact component={MoviesInsert}/>
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
                <Route
                    path="/movies/details/:id"
                    exact
                    component={MovieDetails}/>
                <Route
                    path="auth/sign-in"
                    exact
                    component={Login}
                />

            </Switch>
        </Router>
    )
}

export default App