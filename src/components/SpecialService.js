import React from 'react';
import '../componentStyles/SpecialService.css';
import business from '../images/Special.png'
import wedding from '../images/wedding.png'
function SpecialSevice (){
    return(
        <section className='special-service'>
            <header className='special-service-head'>
                <h4>SPECIAL SERVICE</h4>
                <h2>MULTIPLE OFFER WE PROVIDE</h2>
            </header>
            <div className="special-service-cards">
                <div className="special-service-card">
                    <div className="special-image">
                        <img src={business} alt="sasa"/>
                    </div>
                    <h3>BUSINESS PHOTOGRAPHY</h3>
                    <p>Beginning trees fifth moveth that an won every without years own upon waters female tree give evening over man green set land beginning</p>
                    <h4><span></span> Learn More <span></span></h4>
                </div>
                <div className="special-service-card">
                    <div className="special-image">
                        <img src={wedding} alt="sasa"/>
                    </div>
                    <h3>BUSINESS PHOTOGRAPHY</h3>
                    <p>Beginning trees fifth moveth that an won every without years own upon waters female tree give evening over man green set land beginning</p>
                    <h4><span></span> Learn More <span></span></h4>
                </div>
                <div className="special-service-card">
                    <div className="special-image">
                        <img src={business} alt="sasa"/>
                    </div>
                    <h3>BUSINESS PHOTOGRAPHY</h3>
                    <p>Beginning trees fifth moveth that an won every without years own upon waters female tree give evening over man green set land beginning</p>
                    <h4><span></span> Learn More <span></span></h4>
                </div>
            </div>
        </section>
    );
}
export default SpecialSevice;