import React from 'react';
import '../componentStyles/Footer.css';
function Footer (){

    return(
        <>
        <footer>
            <h1 id='logo'> <a href="/home">be<span>p</span>ose</a></h1>
            <ul className='footer-links'>
                        <li><a href="/home">About</a></li>
                        <li><a href="/home">Gallery</a></li>
                        <li><a href="/home">Services</a></li>
                        <li><a href="/home">Blog</a></li>
                      <li><a href="/home">Contact</a></li>
            </ul>
            <ul className="social-media">
                <li><i className="fab fa-facebook"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-skype"></i></li>
                <li><i className="fab fa-instagram"></i></li>
            </ul>
        </footer>
        <div className="copy-right">
        <p>© 2021 All rights reserved by <span>Arabboy</span></p>
        </div>
        </>
    );
}
export default Footer;