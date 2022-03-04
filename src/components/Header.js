import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import '../App.css';

const Header = () => {
  return (
    <div>
        <nav className='nav-header'>
        <Link  style={{ textDecoration: 'none'}} to="/game"> <div className='li-header' >Guess the country! </div></Link>
        <Link style={{ textDecoration: 'none'}} to="/countries"> <div className='li-header' >All Countries</div></Link>
      </nav>

    </div>
  )
}

export default Header