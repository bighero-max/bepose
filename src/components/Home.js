import React from 'react';
import AboutUs from './AboutUs';
import Hero from './Hero';
import LifeStyle from './LifeStyle';
import PricingPlan from './PricingPlan';
import RecentProjects from './RecentProject';
import SimpleSlider from './Slider';
import SpecialSevice from './SpecialService'

function Home(){
    return(
        <div className="home">
            <Hero/>
            <AboutUs/>
            <RecentProjects/>
            <SpecialSevice/>
            <LifeStyle/> 
            <PricingPlan/>
            <SimpleSlider/>
        </div>
    );
}
export default Home;