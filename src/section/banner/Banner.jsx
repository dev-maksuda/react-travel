import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section id="banner">
    <div className="container">
        <div className="banner_wrapper">
            <h1> CHOOSE <br/>THE PERFECT <br/>DESTINATIONS.</h1>
            <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
            enim ad minim veniam, quis nostrud exerci tation.</p>
            <form>
                <div className="form_inner">
            <div className="banner_search">
                <input type="text" placeholder="Enter Your Location"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="map_circle">
                <img src="./svg/map.svg"/>
            </div>
            </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default Banner