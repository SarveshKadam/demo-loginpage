import React, {useState,useEffect} from "react"
const AuthContext = React.createContext()
const Axios = require('axios')

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState(undefined)

    async function getLoggedIn() {
        const loggedInRes = await Axios.get('http://localhost:3001/auth/loggedIn')
        setloggedIn(loggedInRes.data)
    }

    useEffect(()=> getLoggedIn(),[])
    return (
        <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext}
