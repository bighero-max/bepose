import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Gallery from './components/Gallery';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    const[isLoad,setLoad]=useState(false)

    useEffect(()=>{
      loader()
    },[])

    const loader=()=>{
      setLoad(true)
    }
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/' exact component={Home}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/services' component={Services}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
          <div className={isLoad? 'loadernone':'loader'}>
            <div className="red"></div>
          </div>
      </div>
    </Router>
  );
}

export default App;
