import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testi from '../images/testi.png';
import '../componentStyles/TestimonialSlider.css'

function TestimonialSlider (){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className='testimonial-box'>
        <Slider {...settings}>
            <div>
                <div className='testimonial-slide'>
                    <img src={testi} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elalias recusandae asperiores quibusdam fugiat sint nisi, consectetur laboriosam tempore ipsum soluta at iste nemo corrupti ratione.</p>
                    <h3>by elena</h3>
                </div>
            </div>
            <div>
                <div className='testimonial-slide'>
                    <img src={testi} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing recusandae asperiores quibusdam fugiat sint nisi, consectetur laboriosam tempore ipsum soluta at iste nemo corrupti ratione.</p>
                    <h3>by elena</h3>
                </div>
            </div>
            <div>
                <div className='testimonial-slide'>
                    <img src={testi} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing edae asperiores quibusdam fugiat sint nisi, consectetur laboriosam tempore ipsum soluta at iste nemo corrupti ratione.</p>
                    <h3>by elena</h3>
                </div>
            </div>
         
        </Slider>
      </div>
    );
}
export default TestimonialSlider;