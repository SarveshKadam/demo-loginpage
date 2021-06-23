import React,{useState, useContext} from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaUserCircle, FaEnvelope, FaLockOpen } from "react-icons/fa";
import {useHistory, Redirect} from 'react-router-dom';
import Axios from "axios"
import { AuthContext } from '../context/authContext';
function LoginForm() {

    const [newUser, setNewUser] = useState(false)
    const [nameReg, setNameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {loggedIn,getLoggedIn} = useContext(AuthContext)

    const newUserClick = ()=>{
        setNewUser(true)
    }

    const existingUserClick = () =>{
        setNewUser(false)
    }

    let history = useHistory();

    const register = async (e)=>{
        e.preventDefault();

        try {
           const response = await Axios.post('http://localhost:3001/auth',{
            name: nameReg,
            email:emailReg,
            password: passwordReg
        });
        await getLoggedIn();
        history.push('/home')
            
        } catch (error) {
            console.log(error);
        }
        
    }

    const login = async (e)=>{
        e.preventDefault();

        try {
           const response = await Axios.post('http://localhost:3001/auth/login',{
            email,
            password
        });
        await getLoggedIn();
        history.push('/home')    
        } catch (error) {
            console.log(error);
        }
        
    }

    console.log(nameReg, emailReg,passwordReg);

    return (
        <div className="max-w-max bg-white border-white rounded-sm 	ml-auto mr-auto mt-20 overflow-hidden">
            <div className="flex ">
                <div className={`p-6  w-1/2  h-hcard ${newUser ? "overlay-signin" : ""}`}>
                    <form onSubmit={login} className={`flex flex-col justify-center items-center p-3.5 ${newUser ? "hidden" : ""}`}>
                        <h2 className="text-2xl text-signText mb-5">Sign in</h2>
                        <div className="mb-3">
                            <button type="button" className="bg-blue-800 mr-2 rounded-sm transform hover:-translate-y-0.5 hover:bg-blue-900 transition duration-300" >
                                <span className="text-white text-xl"><AiOutlineFacebook /></span>
                            </button>
                            <button type="button" className="bg-red-500 mr-2 rounded-sm transform hover:-translate-y-0.5 hover:bg-red-700 transition duration-300" >
                                <span className="text-white text-xl"><AiOutlineInstagram /></span>
                            </button>
                            <button type="button" className="bg-blue-400 rounded-sm transform hover:-translate-y-0.5 hover:bg-blue-600 transition duration-300">
                                <span className="text-white text-xl"><AiOutlineTwitter /></span>
                            </button>
                        </div>
                        <span className="mb-4">or use your account</span>
                        <div>
                            <div className="flex mb-3 shadow-md">
                                <div className="bg-white  p-2.5">
                                    <span className="text-iconcolor"><FaEnvelope /></span>
                                </div>
                                <input placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="p-2.5" />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex rounded-md mb-3 shadow-md">
                                <div className="bg-white p-2.5">
                                    <span className="text-iconcolor"><FaLockOpen /></span>
                                </div>
                                <input placeholder="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="p-2.5" />
                            </div>
                        </div>
                        <a href="#" className="mb-4 text-gray-700 text-md">Forgot your password?</a> <br />
                        <button className="border-blue-600 p-2 rounded-md uppercase font-medium bg-blue-600 text-white text-sm tracking-wide transform hover:-translate-y-0.5 hover:bg-blue-700 transition duration-300">Sign in</button>
                    </form>
                    <div className={`flex flex-col justify-center items-center p-3.5 mt-11 ${newUser ? "" : "hidden"}`}>
                        <h1 className="text-white font-bold text-3xl tracking-wider leading-9 mb-5">Welcome Back!</h1>
                        <p className="text-sm text-white font-thin	leading-5 tracking-wide mb-5">
                            To keep connected with us please login with your personal info
                        </p>
                        <button onClick={existingUserClick} className="border border-white p-2 rounded-md text-blue-800 bg-white font-semibold uppercase text-sm transform hover:text-black hover:-translate-y-0.5 transition duration-300" id="signIn">Sign In</button>
                    </div>
                </div>
                {/* Sign up form */}
                <div className={`p-6 w-1/2 ${newUser ? "" : "overlay-signin"} h-hcard`}>
                    <form onSubmit={register} className={`flex flex-col justify-center items-center p-3.5 ${newUser ? "" : "hidden"}`}>
                        <h2 className="text-2xl text-signText mb-5">Create Account</h2>
                        <div className="mb-3">
                            <button type="button" className="bg-blue-800 mr-2 rounded-sm transform hover:-translate-y-0.5 hover:bg-blue-900 transition duration-300" >
                                <span className="text-white text-xl"><AiOutlineFacebook /></span>
                            </button>
                            <button type="button" className="bg-red-500 mr-2 rounded-sm transform hover:-translate-y-0.5 hover:bg-red-700 transition duration-300" >
                                <span className="text-white text-xl"><AiOutlineInstagram /></span>
                            </button>
                            <button type="button" className="bg-blue-400 rounded-sm transform hover:-translate-y-0.5 hover:bg-blue-600 transition duration-300">
                                <span className="text-white text-xl"><AiOutlineTwitter /></span>
                            </button>
                        </div>
                        <span className="mb-4">or use your email for registration</span>
                        <div className="mt-2">
                            <div className="flex mb-3 shadow-md">
                                <div className="bg-white  p-2.5">
                                    <span className="text-iconcolor pt-auto"><FaUserCircle /></span>
                                </div>
                                <input placeholder="Name" className="p-2.5" type="text" value={nameReg} onChange={(e)=>setNameReg(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <div className="flex mb-3 shadow-md">
                                <div className="bg-white  p-2.5">
                                    <span className="text-iconcolor"><FaEnvelope /></span>
                                </div>
                                <input placeholder="Email" type="email" className="p-2.5" value={emailReg} onChange={(e)=>setEmailReg(e.target.value)} />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex rounded-md mb-3 shadow-md">
                                <div className="bg-white  p-2.5">
                                    <span className="text-iconcolor"><FaLockOpen /></span>
                                </div>
                                <input placeholder="Password" type="password" className="p-2.5" value={passwordReg} onChange={(e)=>setPasswordReg(e.target.value)} />
                            </div>
                        </div>
                        <button className="border-blue-600 p-2 rounded-md uppercase font-medium bg-blue-600 text-white text-sm tracking-wide transform hover:-translate-y-0.5 hover:bg-blue-700 transition duration-300">Sign Up</button>
                    </form>
                    <div className={`flex flex-col justify-center items-center p-3.5 mt-11 ${newUser ? "hidden" : ""} translate-x-3.5`}>
                        <h1 className="text-white font-bold text-3xl tracking-wider leading-9 mb-5">Hello, Friend!</h1>
                        <p className="text-sm text-white font-thin	leading-5 tracking-wide mb-5">
                        Enter your personal details and start journey with us
                        </p>
                        <button onClick={newUserClick} className="border border-white p-2 rounded-md text-blue-800 bg-white font-semibold uppercase text-sm transform hover:text-black hover:-translate-y-0.5 transition duration-300" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
