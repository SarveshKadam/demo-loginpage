import React,{useState} from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaUserCircle, FaEnvelope, FaLockOpen } from "react-icons/fa";

function LoginForm() {

    const [newUser, setNewUser] = useState(false)

    const newUserClick = ()=>{
        setNewUser(true)
    }

    const existingUserClick = () =>{
        setNewUser(false)
    }

    return (
        <div className="max-w-max bg-white border-white rounded-sm 	ml-auto mr-auto mt-20 overflow-hidden">
            <div className="flex ">
                <div className={`p-6  w-1/2  h-hcard ${newUser ? "overlay-signin" : ""}`}>
                    <form className={`flex flex-col justify-center items-center p-3.5 ${newUser ? "hidden" : ""}`}>
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
                                <input placeholder="Email" type="email" className="p-2.5" />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex rounded-md mb-3 shadow-md">
                                <div className="bg-white p-2.5">
                                    <span className="text-iconcolor"><FaLockOpen /></span>
                                </div>
                                <input placeholder="Password" type="password" className="p-2.5" />
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
                    <form className={`flex flex-col justify-center items-center p-3.5 ${newUser ? "" : "hidden"}`}>
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
                                <input placeholder="Name" className="p-2.5" type="text" />
                            </div>
                        </div>
                        <div>
                            <div className="flex mb-3 shadow-md">
                                <div className="bg-white  p-2.5">
                                    <span className="text-iconcolor"><FaEnvelope /></span>
                                </div>
                                <input placeholder="Email" type="email" className="p-2.5" />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex rounded-md mb-3 shadow-md">
                                <div className="bg-white  p-2.5">
                                    <span className="text-iconcolor"><FaLockOpen /></span>
                                </div>
                                <input placeholder="Password" type="password" className="p-2.5" />
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
