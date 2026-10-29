import React from 'react'
import logo from '../../assets/images/logo.png.png'
import './navbar.css'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa"



const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo" />

                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">pages</a>
                        </li>
                        <li>
                            <a href="#">travel</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li>
                            <a href="#">shop</a>
                        </li>
                        <li>
                            <a href="#">lements</a>
                        </li>
                    </ul>
                </div>
                <div className="nav_actions">
                    <a href="#" className="nav_actions_item">
                        <FaMessage />
                    </a>
                    <a href="#" className="nav_actions_item">
                     <FaLocationArrow />
                    </a>
                    <a href="#" className="nav_actions_item">
                    <FaHeart />
                    </a>
                    <a href="#" className="nav_actions_item">
                        <FaPlus />
                    </a>
                </div>
        </div>
        </div>
     </nav>
  )
}

export default Navbar
