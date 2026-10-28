import React from 'react'
import logo from '../../assets/images/logo.png.png'
import './navbar.css'



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
                        <i className="fa-solid fa-message"></i>
                    </a>
                    <a href="#" className="nav_actions_item">
                       <i className="fa-solid fa-location-arrow"></i>
                    </a>
                    <a href="#" className="nav_actions_item">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#" className="nav_actions_item">
                        <i className="fa-solid fa-plus"></i>
                    </a>
                </div>
        </div>
        </div>
     </nav>
  )
}

export default Navbar
