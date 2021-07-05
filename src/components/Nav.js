import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../componentStyles/Nav.css';

function Nav(){
    const[isOpen,setOpen]=useState(false);

    const open=()=>{
        setOpen(!isOpen)
    }
    const[text,setText]=useState('fas fa-times searchIcon toggleSearch')

    const[isTrue,setTrue]=useState(false);
    const[searchText,setSearchText]=useState('');
    const updateSearch=(e)=>{
        setSearchText(e.target.value);
        console.log(text);
    }
    const cancel=()=>{
        setTrue(!isTrue);
        setText(isTrue?'fas fa-times searchIcon toggleSearch':'fas fa-times searchIcon')
    }
    return(
        <header className='main-head'>
            <nav>
                <h1 id='logo'> <a href="/home">be<span>p</span>ose</a></h1>
                <div className='nav-menus'>
                    <ul className={isOpen?'nav-links responsive':'nav-links'}>
                        <li onClick={open}><Link to='/'>Home</Link></li>
                        <li onClick={open}><Link to='/about'>About</Link></li>
                        <li onClick={open}><Link to='/gallery'>Gallery</Link></li>
                        <li onClick={open}><Link to='/services'>Services</Link></li>
                        <li onClick={open}><Link to='/blog'>Blog</Link></li>
                        <li onClick={open}><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <button onClick={open}  className={isOpen?'bar opened':'bar'}>
                    <svg width="25" height="25" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
                    </button>
                    <div className='nav-tools'>
                    <input type="text" placeholder='Search' className={isTrue?'':'toggleSearch'} onChange={updateSearch} value={searchText}/>
                    <i className={searchText?'fas fa-search searchIcon':'toggleSearch'}></i>
                    <i onClick={cancel} className={searchText?'toggleSearch':text}></i>
                        <i onClick={cancel} className="fas fa-search"></i>
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Nav;