import React,{useState} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import MovieDetails from '../pages/MovieDetails'
import LoginPage from '../pages/auth/login'
import SecretPage from '../pages/Secret'

function App() {
    const [isLoggedIn,setLoggedIn] = useState(false);

    const onLogin=()=>{
        setLoggedIn(true);
    }

    return (
        <Router>
            <NavBar />
            <Switch>

                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
                <Route 
                path="/movies/details/:id" 
                exact 
                component={MovieDetails}>

                </Route>
                <Route 
                path="/" 
                exact 
                render={()=>{
                    return <LoginPage isLoggedIn={isLoggedIn}
                    onLogin={onLogin}/>
                }}/>
                 <Route 
                 path="/movies/secret" 
                 exact 
                render={()=>{
                    return <SecretPage isLoggedIn={isLoggedIn}/>
                }} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default App