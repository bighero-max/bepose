import React from 'react';
import '../componentStyles/PricingPlan.css';
import pricing1 from '../images/pricing1.png'
function PricingPlan (){

    return(
        <section className='pricing-plan'>
             <header className='pricing-plan-head'>
                <h4>Pricing Plan</h4>
                <h2>REASONABLE PRICING PLAN</h2>
            </header>
            <div className="pricing-plan-cards">
                <div className="pricing-plan-card">
                    <div className="pricing-icon">
                        <img src={pricing1} alt="pricing1"/>
                        <h3>Business</h3>
                    </div>
                    <div className="pricing-details">
                        <h3>$32.00</h3>
                        <ul>
                            <li>8 hour sessions</li>
                            <li>free editing</li>
                            <li>80 images</li>
                            <li>Free 24/7 support</li>
                            <li>Online galley</li>
                        </ul>
                        <button>book now</button>
                    </div>
                </div>
                <div className="pricing-plan-card">
                    <div className="pricing-icon specialicon">
                        <img src={pricing1} alt="pricing1"/>
                        <h3>Business</h3>
                    </div>
                    <div className="pricing-details specialdetail">
                        <h3>$32.00</h3>
                        <ul>
                            <li>8 hour sessions</li>
                            <li>free editing</li>
                            <li>80 images</li>
                            <li>Free 24/7 support</li>
                            <li>Online galley</li>
                        </ul>
                        <button>book now</button>
                    </div>
                </div>
                <div className="pricing-plan-card">
                    <div className="pricing-icon">
                        <img src={pricing1} alt="pricing1"/>
                        <h3>Business</h3>
                    </div>
                    <div className="pricing-details">
                        <h3>$32.00</h3>
                        <ul>
                            <li>8 hour sessions</li>
                            <li>free editing</li>
                            <li>80 images</li>
                            <li>Free 24/7 support</li>
                            <li>Online galley</li>
                        </ul>
                        <button>book now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PricingPlan;