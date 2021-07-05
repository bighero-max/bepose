import React from 'react';
import '../componentStyles/About.css';
import creat from '../images/creat.jpg'
import SimpleSlider from './Slider';
import TestimonialSlider from './TestimonialSlider';
import footerjpg from '../images/about-footer.jpg'
import a from '../images/a.jpg'
import b from '../images/b.jpg'
import c from '../images/c.jpg'
import d from '../images/d.jpg'
function About (){

    return(
        <>
            <section className='who-we'>
                who we are
            </section>
            <section className="creating">
                <header className='creating-head'>
                    <h2>CREATING A TIMELESS LOOK, COUPLED WITH THE MAIN FLAWLESS MOMENT</h2>
                </header>
                <div className="creating-text">
                    <img src={creat} alt=""/>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quidem voluptatem dolore quae error aliquam deserunt unde ut voluptates porro.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, distinctio recusandae dolorum ducimus harum itaque atque omnis accusamus repellendus id dolor asperiores quas, laboriosam, debitis eius enim excepturi quae voluptatum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum blanditiis, exercitationem ex voluptatum quibusdam veritatis, quia ratione sunt, consectetur eum delectus magni rem rerum totam vitae quas. Accusantium, minus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio dolorem assumenda illo quidem dolorum accusantium, tenetur quae debitis ullam explicabo ipsam eum reiciendis laborum officiis aliquam eligendi delectus dolor?
                    </p>
                </div>
                
            </section>
            <div className="testimonial">
                    <TestimonialSlider/>
            </div>
            <SimpleSlider/>
            <div className="about-footer">
                <div><img src={footerjpg} alt=""/><i className="fab fa-instagram"></i></div>
                <div><img src={a} alt=""/><i className="fab fa-instagram"></i></div>
                <div><img src={b} alt=""/><i className="fab fa-instagram"></i></div>
                <div><img src={c} alt=""/><i className="fab fa-instagram"></i></div>
                <div><img src={d} alt=""/><i className="fab fa-instagram"></i></div>
            </div>
        </>
    );
}
export default About;