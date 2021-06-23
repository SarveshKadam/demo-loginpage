import React,{useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/authContext'
import {Redirect, useHistory} from 'react-router-dom'
import Axios from 'axios'

function Home() {
    const {loggedIn,getLoggedIn} = useContext(AuthContext)
    const [user, setUser] = useState('')

    let history = useHistory();


    if(loggedIn == false){
         <Redirect to="/" />
    }

    async function logout(){
        await Axios.post('http://localhost:3001/auth/logout');
        await getLoggedIn();
        history.push('/')
    }

    async function fetchName(){
        const response = await Axios.get('http://localhost:3001')
        setUser(response.data)
    }

    useEffect(()=> fetchName(),[])


    return (
        <div>
            <h1 className="text-white ml-96 mt-36">Hello, {user}</h1>
            <button onClick={logout} className="border-blue-600 p-2 rounded-md uppercase ml-96 mt-16 font-medium bg-blue-600 text-white text-sm tracking-wide transform hover:-translate-y-0.5 hover:bg-blue-700 transition duration-300">Log out</button>
        </div>
    )
}

export default Home
