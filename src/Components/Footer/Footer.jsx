import React from 'react'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <img src={logo} alt="" />
        <ul>
          <li>
            <h1>Links</h1>
          </li>
          <li>
            <NavLink to="/">HEIM</NavLink>
          </li>
          <li>
            <NavLink to="/uber-uns">ÜBER UNS</NavLink>
          </li>
          <li>
            <NavLink to="/architecture">ARCHITECTURE</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">KONTAKT</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Info</h1>
          </li>
          <li>
            <p># Adresse :
            <br />TÄFERNSTRASSE 2A 5405 DÄTTWIL</p>
          </li>
          <li>
            <p># Tel :
            <br />079 586 00 92</p>
          </li>
          <li>
            <p># Tel :
            <br />044 593 54 11</p>
          </li>
          <li>
            <p># Email :
            <br />EDMA@GMX.CH</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer