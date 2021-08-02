import React from 'react';
import { Slide } from 'react-slideshow-image';
import dolphins from '../images/dolphins.jpg';
import bay from '../images/bayandmountain.jpg';
import lake from '../images/lake.jpg';
import bridge from '../images/bridge.jpg';
import "react-slideshow-image/dist/styles.css";
import "./Slide.css";


const proprietes = {
  duration: 3000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true,
};

function Slideshow() {
  return (
    <div className="slider-container">
      <Slide {...proprietes}>
        <div className="slide-item">
          <div>
            <img src={bay} alt="img1" />
          </div>
        </div>
        <div className="slide-item">
          <div>
            <img src={dolphins} alt="img2" />
          </div>
        </div>
        <div className="slide-item">
          <div>
            <img src={lake} alt="img3" />
          </div>
        </div>
        <div className="slide-item">
          <div>
            <img src={bridge} alt="img3" />
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Slideshow
