import React from 'react';
import '../componentStyles/Services.css'
import PricingPlan from './PricingPlan';
import g from '../images/g.jpg'
import h from '../images/h.jpg'
import i from '../images/i.jpg'
function Services(){

    return(
        <>
        <section className='what-we'>
            What we offer
        </section>
            <div className="services-box">
                <div>
                    <i className="fas fa-image"></i>
                    <h3>photography</h3>
                    <p>Lorem ipsum dolor sit amet simus molestias numquam autem, non iure libero illum maiores reiciendis quo. Aspernatur, est placeat?</p>
                </div>
                <div>
                    <i className="fas fa-video"></i>
                    <h3>video editing</h3>
                    <p>Lorem ipsum dolor sit amet consecte quam velit veniam assumenda possimus molestias numquam autem, non iure libero illum maiores reiciendis quo. Aspernatur, est placeat?</p>
                </div>
                <div>
                    <i className="fas fa-file-image"></i>
                    <h3>image processing</h3>
                    <p>Lorem ipsum dolor sitenda possimus molestias numquam autem, non iure libero illum maiores reiciendis quo. Aspernatur, est placeat?</p>
                </div>
            </div>
            <PricingPlan/>
            <header className='services-head'>

                <h2>FROM OUR JOURNAL</h2>
                <h4>Thing spirit you're good moved together above man divide seasons</h4>
            </header>
            <div className="our-journal">
                <div>
                    <div className='image-text'><img src={g} alt="asas"/>
                    <h5>Photography</h5>
                    </div>
                    <ul>
                        <li> <i className="fas fa-calendar"></i> August 10, 2019</li>
                        <li> <i className="fas fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h3>ELEIFEND TINCIDUNT EVENTS AUGUE PENATIBUS INCEPTOS FACILISIS FELIS END</h3>
                    <h4>CONTINUE READING <i className="fas fa-angle-double-right"></i> </h4>
                </div>
                <div>
                <div className='image-text'><img src={h} alt="sasas"/>
                    <h5>wedding</h5>
                    </div>
                    <ul>
                        <li> <i className="fas fa-calendar"></i> August 10, 2019</li>
                        <li> <i className="fas fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h3>ELEIFEND TINCIDUNT EVENTS AUGUE PENATIBUS INCEPTOS FACILISIS FELIS END</h3>
                    <h4>CONTINUE READING <i className="fas fa-angle-double-right"></i></h4>
                </div>
                <div>
                <div className='image-text'><img src={i} alt="sasa"/>
                    <h5>multimedia</h5>
                    </div>
                    <ul>
                        <li> <i className="fas fa-calendar"></i> August 10, 2019</li>
                        <li> <i className="fas fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h3>ELEIFEND TINCIDUNT EVENTS AUGUE PENATIBUS INCEPTOS FACILISIS FELIS END</h3>
                    <h4>CONTINUE READING <i className="fas fa-angle-double-right"></i></h4>
                </div>
            </div>
        </>
    );
}
export default Services;