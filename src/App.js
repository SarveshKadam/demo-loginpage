import React, { useContext } from 'react'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import { Link, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Axios from 'axios';
import { AuthContext } from './context/authContext';



Axios.defaults.withCredentials = true;

function App() {
    const { loggedIn } = useContext(AuthContext)
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <LoginForm />
                </Route>

                {loggedIn === true && (
                    <>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </>
                )}
            </Switch>
        </div>
    )
}

export default App
