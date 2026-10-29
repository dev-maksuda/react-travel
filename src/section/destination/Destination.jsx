import React from 'react'
import './destination.css'
import destinationImg from '../../assets/images/destination video.png'
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const destination = () => {
  return (
     <section id="destination">
        <div className="container">
            <div className="destination_wrapper">
                <div className="destination_content">
                    <h4 className="sec_subtitle">FEATURED DESTINATION</h4>
                    <h2 className="sec_title">CHOOSE <br/>THE PERFECT <br/>ACCOMMODATION.</h2>
                    <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing 
                        elit, sed diam nonummy nibh euismod tincidunt ut 
                        laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="destination_video">
                    <img src="destinationImg" alt="img"/>
                    <a href="#" className="destination_video_icon">
                       <FaPlay />
                    </a>
                </div>
            </div>
            <div className="book_now">
                <div className="location_price">
                    <div className="location">
                        <h4>TRAVEL LOCATION</h4>
                        <div className="star_wrapper">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                    </div>
                    <div className="price">
                        <p className="peragraph">Tour Price</p>
                        <span>$125,99</span>
                    </div>
                </div>
                <a  className="book_now_btn" href="#">BOOK NOW</a>
            </div>
        </div>
     </section>
  )
}

export default destination