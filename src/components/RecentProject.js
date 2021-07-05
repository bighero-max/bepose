import React from 'react';
import boy from '../images/rasm_files/boy.jpg';
import boy2 from '../images/rasm_files/boy2.jpg'
import boy3 from '../images/rasm_files/boy3.jpg'
import boy4 from '../images/rasm_files/boy4.jpg'
import boy5 from '../images/rasm_files/boy5.jpg'
import boy6 from '../images/rasm_files/boy6.jpg'
import boy7 from '../images/rasm_files/boy7.jpg'
import boy8 from '../images/rasm_files/boy8.jpg'
import '../componentStyles/RecentProjects.css'
function RecentProjects() {
    
    return(
        <section className='recent-projects'>
            <header className='recent-projects-head'>
                <h4>Recent Projects</h4>
                <h2>BEST PHOTOGRAPHY SHOWCASE</h2>
            </header>
            <div className="recent-projects-galery">
                <div className='galery-image-box'><img src={boy} alt=""/>
                    <div className='hover-img'>
                        <h3>MAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy3} alt=""/>
                    <div className='hover-img'>
                        <h3>WOMAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy8} alt=""/>
                    <div className='hover-img'>
                        <h3>MAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy4} alt=""/>
                    <div className='hover-img'>
                        <h3>WOMAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy5} alt=""/>
                    <div className='hover-img'>
                        <h3>WOMAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy6} alt=""/>
                    <div className='hover-img'>
                        <h3>MAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy7} alt=""/>
                    <div className='hover-img'>
                        <h3>WOMAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                <div className='galery-image-box'><img src={boy2} alt=""/>
                    <div className='hover-img'>
                        <h3>MAN PHOTOGRAPHY</h3>
                        <span></span>
                        <h5>artist</h5>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
export default RecentProjects;