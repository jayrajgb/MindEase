import React from 'react'
import "./Home.css"
import testlogo from './assets/test.svg'
import peace from './assets/peace.jpeg'
import home from './assets/home.jpg'
import { NavLink } from 'react-router-dom'

const Home = ({name}) => {
  return (
    <div>
      <img src={home} alt="home" className='bg'/>
      <div className="mock"></div>
      <div className="home">
        <div className="home-left">
            <div className='header'>MINDEASE</div>
            <div className='sub-header'>Mental Health Support Platform</div>
            <div className='home-para'>Hello {name.split(" ")[0]}, MindEase is a</div> 
            <div className='home-para'>Mental Health Support Platform</div> 
            <NavLink to="/test"><button className='test'>Take a Test <img className='testlogo' src={testlogo} alt="testlink" /></button></NavLink>
        </div>
        <div className="home-right">
            {/* <img className='image' src={peace} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
