import React from 'react';
import './gallery.css';


import galImg1 from '../../assets/images/gallery-1.jpg';
import galImg2 from '../../images/images/gallery2.jpg'; 
import galImg3 from '../../images/gallery3.jpg';
import galImg4 from '../../images/gallery4.jpg';
import galImg5 from '../../images/gallery5.jpg';
import galImg6 from '../../images/gallery6.jpg';
import galShapeImg from '../../images/galleryshape.png';


const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container">
        <div className="gal_title">
          <h2 className="sec_title">Our Gallery</h2>
          <p className="peragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        <div className="gal_wrapper">
          <div className="gal_item">
            <div className="gal_item_inner large">
              <img src={galImg1} alt="Gallery 1" />
              <div className="overlay">
                <h3>Destination 1</h3>
                <h6>View Details</h6>
              </div>
            </div>
            <div className="gal_item_inner small">
              <img src={galImg2} alt="Gallery 2" />
              <div className="overlay">
                <h3>Destination 2</h3>
                <h6>View Details</h6>
              </div>
            </div>
          </div>

          <div className="gal_item">
            <div className="gal_item_inner small">
              <img src={galImg3} alt="Gallery 3" />
              <div className="overlay">
                <h3>Destination 3</h3>
                <h6>View Details</h6>
              </div>
            </div>
            <div className="gal_item_inner large">
              <img src={galImg4} alt="Gallery 4" />
              <div className="overlay">
                <h3>Destination 4</h3>
                <h6>View Details</h6>
              </div>
            </div>
          </div>

          <div className="gal_item">
            <div className="gal_item_inner large">
              <img src={galImg5} alt="Gallery 5" />
              <div className="overlay">
                <h3>Destination 5</h3>
                <h6>View Details</h6>
              </div>
            </div>
            <div className="gal_item_inner small">
              <img src={galImg6} alt="Gallery 6" />
              <div className="overlay">
                <h3>Destination 6</h3>
                <h6>View Details</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gal_shape">
        <img src={galShapeImg} alt="Gallery Shape" />
      </div>
    </section>
  );
};

export default Gallery;
