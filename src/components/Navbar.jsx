import React from 'react'
import { NavLink } from 'react-router-dom';
import Social from './Social';
import './styles/navbar.css';
import { House, Person, Eye, Envelope, Briefcase } from 'react-bootstrap-icons';


const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navlink">
          <li><NavLink to="/" exact activeStyle={  {color:'green'} }  > <House size={25}/> </NavLink> </li>
          <li><NavLink to="/profile" exact activeStyle={  {color:'green'} }> <Person size={25}/> </NavLink></li>
          <li><NavLink to="/insight" exact activeStyle={  {color:'green'} }> <Eye size={25}/>  </NavLink></li>
          <li><NavLink to="/services" exact activeStyle={  {color:'green'} }> <Briefcase size={25}/>  </NavLink></li>
          <li><NavLink to="/contact" exact activeStyle={  {color:'green'} }> <Envelope size={25}/>  </NavLink></li>
      </ul>
      <div className="mysocial">
        <Social />
      </div>
      
    </div>
  )
}

export default Navbar
