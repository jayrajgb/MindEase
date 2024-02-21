import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-left">
            Comfort Counsel
        </div>
        <div className="nav-right">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Tips</a></li>
                <li><a href="">Test</a></li>
                <li><a href="">Books</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
