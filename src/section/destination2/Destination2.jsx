import React from 'react'
import './destination2.css'

const Destination2 = () => {
  return (
     <section id="destination2">
      <div class="container">
        <div class="destination2_wrapper">
          <div class="destination2_img">
            <img src={destination2} alt="" />
          </div>
          <div class="destination2_content">
            <h4 class="sec_subtitle">FEATURED DESTINATION</h4>
            <h2 class="sec_title">
              TAKE ONLY <br />
              MEMORIES, LEAVE ONLY FOOTPRINTS.
            </h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>
      <div class="destination2_shape">
        <img src="" alt="" />
      </div>
    </section>
  )
}

export default Destination2