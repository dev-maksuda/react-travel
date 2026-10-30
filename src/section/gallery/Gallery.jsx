import React from 'react'
import './gallery.css'


const gallery = () => {
  return (
    <section id="gallery">
      <div class="gal_shape">
        <img src="./images/package_shape.png" alt="" />
      </div>
      <div class="container">
        <div class="gal_title">
          <h2 class="sec_title">Most Destinations</h2>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        <div class="gal_wrapper">
          <div class="gal_item">
            <div class="gal_item_inner large">
              <img src={gal_large1} alt="img" />
              <div class="overlay">
                <h3>North America</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div class="gal_item_inner small">
              <img src={gal_small1} alt="img" />
              <div class="overlay">
                <h3>Cambodia</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
          <div class="gal_item">
            <div class="gal_item_inner small">
              <img src={gal_small2} alt="img" />
              <div class="overlay">
                <h3>South America</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div class="gal_item_inner large">
              <img src={gal_large2} alt="img" />
              <div class="overlay">
                <h3>Cape Town</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
          <div class="gal_item">
            <div class="gal_item_inner large">
              <img src={gal_large3} alt="img" />
              <div class="overlay">
                <h3>Europe</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div class="gal_item_inner small">
              <img src={gal_small3} alt="img" />
              <div class="overlay">
                <h3>South Africa</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
          <div class="gal_item">
            <div class="gal_item_inner small">
              <img src={gal_small4} alt="img" />
              <div class="overlay">
                <h3>New York</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div class="gal_item_inner large">
              <img src={gal_large4} alt="img" />
              <div class="overlay">
                <h3>Australia</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default gallery