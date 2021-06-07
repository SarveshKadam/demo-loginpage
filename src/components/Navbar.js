import React from 'react'
import LogoImage from '../img/logo-white.png'

function Navbar() {
    return (
        <div className="mt-5 max-w-screen-lg ml-auto mr-auto">
            <nav className="flex justify-between items-center flex-wrap pr-5">
                <a href="#" >
                    <img src={LogoImage} className="h-8" />
                </a>
                <ul className="flex justify-end items-center p-1">
                    <li className="">
                        <a href="#" className="" >
                            <span className="text-white	leading-6">Elements</span>
                        </a>
                    </li>
                    <li className="ml-9">
                        <a href="#" className="" >
                            <span className="text-white	leading-6">Design Blocks</span>
                        </a>
                    </li>
                    <li className="ml-9">
                        <a href="#" className="" >
                            <span className="text-white	leading-6">Examples</span>
                        </a>
                    </li>
                    <li className="ml-9">
                        <a href="#" className="" >
                            <span className="text-white	leading-6">App Pages</span>
                        </a>
                    </li>
                    <li className="ml-9">
                        <a href="#" className="" >
                            <span className="border border-white p-3 rounded-md uppercase font-medium transform hover:bg-white transition duration-300">Online Builder</span>
                        </a>
                    </li>
                    <li className="ml-9">
                        <a href="#" className="" >
                            <span className="border border-white p-3 rounded-md uppercase font-medium bg-white transform hover:-translate-y-0.5 transition duration-300">Buy Now</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
