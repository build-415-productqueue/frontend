import React from 'react'
import logo from '../assets/lambdalogo.svg'
import '../styles/nav.css'

const Nav = props => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <a className="hamburger" href="">
        ≡
      </a>
    </nav>
  )
}

export default Nav
