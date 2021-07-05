import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import '../componentStyles/Slider.css'

function SimpleSlider (){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1196,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div className='slider-box'>
        <Slider {...settings}>
          <div>
            <img src={partner1} alt="asa"/>
          </div>
          <div>
            <img src={partner2} alt="sas"/>
          </div>
          <div>
            <img src={partner3} alt="sasa"/>
          </div>
          <div>
            <img src={partner2} alt="sasa"/>
          </div>
          <div>
            <img src={partner1} alt="sasa"/>
          </div>
          <div>
            <img src={partner3} alt="sasa"/>
          </div>
        </Slider>
      </div>
    );
}
export default SimpleSlider;