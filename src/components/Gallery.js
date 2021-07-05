import React from 'react';
import '../componentStyles/Gallery.css'
import e from '../images/e.jpg';
import n from '../images/n.jpg';
import o from '../images/o.jpg';
import p from '../images/p.jpg';
import SimpleSlider from './Slider';
function Gallery (){

    return(
        <>
        <header className='gallery-head'>
            <h2>VIEW IMAGE GALLERY</h2>
            <h4>Thing spirit you're good moved together above man divide seasons</h4>
        </header>
        <div className="gallery-content">
            <div className='box1'><img src={e} alt="sas"/></div>
            <div className='box2'><img src={p} alt="sasa"/></div>
            <div className='box3'><img src={o} alt="sasa"/></div>
            <div className='box4'><img src={n} alt="sasa"/></div>
            <div className='box5'><img src={e} alt="sasa"/></div>
            <div className='box6'><img src={n} alt="sas"/></div>   
        </div>
                <SimpleSlider/> 
         </>
    );
}
export default Gallery;