import React from 'react';
import '../componentStyles/Blog.css';
import k from '../images/k.jpg';
import l from '../images/l.jpg';
import m from '../images/m.jpg';


function Blog(){
    
    return(
        <>
        <section className='blog-img'>
                our journal
            </section>
            <header className='blog-head'>
                <h2>FROM OUR JOURNAL</h2>
                <h4>Thing spirit you're good moved together above man divide seasons</h4>
            </header>
            <div className="blog-journal">
                <div className='blog-card'>
                    <div className='blog-image-text'><img src={k} alt="sasa"/>
                    <h5>Photography</h5>
                    </div>
                    <ul>
                        <li> <i className="fas fa-calendar"></i> August 10, 2019</li>
                        <li> <i className="fas fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h3>ELEIFEND TINCIDUNT EVENTS AUGUE PENATIBUS INCEPTOS FACILISIS FELIS END</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, et! Officiis pariatur soluta nihil adipisci vero repudiandae ratione facilis explicabo nostrum suscipit repellat magnam quasi rem, culpa ullam impedit minima!</p>
                    <h4>CONTINUE READING <i className="fas fa-angle-double-right"></i> </h4>
                </div>
                <div className='blog-card'>
                <div className='blog-image-text'><img src={l} alt="sasa"/>
                    <h5>wedding</h5>
                    </div>
                    <ul>
                        <li> <i className="fas fa-calendar"></i> August 10, 2019</li>
                        <li> <i className="fas fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h3>ELEIFEND TINCIDUNT EVENTS AUGUE PENATIBUS INCEPTOS FACILISIS FELIS END</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe quas accusamus vel nulla, necessitatibus, ipsam ea esse, quia eligendi id fuga placeat eum atque officia voluptatum nam illum nobis?</p>
                    <h4>CONTINUE READING <i className="fas fa-angle-double-right"></i></h4>
                </div>
                <div className='blog-card'>
                <div className='blog-image-text'><img src={m} alt="sasas"/>
                    <h5>multimedia</h5>
                    </div>
                    <ul>
                        <li> <i className="fas fa-calendar"></i> August 10, 2019</li>
                        <li> <i className="fas fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h3>ELEIFEND TINCIDUNT EVENTS AUGUE PENATIBUS INCEPTOS FACILISIS FELIS END</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quas minima dolor pariatur commodi optio laborum aliquam? Quae, voluptatibus exercitationem esse assumenda dicta quam, fugit ratione nobis, est doloribus sequi.</p>
                    <h4>CONTINUE READING <i className="fas fa-angle-double-right"></i></h4>
                </div>
            </div>
        </>
    );
}
export default Blog;