import React from 'react'
import './banner.css'
import bannerImg from '../../assets/images/banner.jpg.jpg'
import { IoSearchSharp } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const Banner = () => {
  return (
    <section id="banner" style={{backgroundImage: `url(${bannerImg})`}}>
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
                <IoSearchSharp />
            </div>
            <div className="map_circle">
                <LuMapPin />
                {/* <img src="./svg/map.svg"/> */}
            </div>
            </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default Banner