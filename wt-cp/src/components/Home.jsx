import React from 'react'
import "./Home.css"
import testlogo from './assets/test.svg'
import peace from './assets/peace.jpeg'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-left">
            <div className='heading'>COMFORT COUNSEL</div>
            <div className='sub-heading'>Mental Health Support Platform</div>
            <div className='para'>Hello there, Comfort Consol is a</div>
            <div className='para'>Mental Health Support Platform</div>
            <button className='test'>Take a Test <img className='testlogo' src={testlogo} alt="testlink" /></button>
        </div>
        <div className="home-right">
            <img className='image' src={peace} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
