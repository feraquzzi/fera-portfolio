import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';
import Social from './Social';
import { House, Person, Eye, Envelope, Briefcase, XLg, List } from 'react-bootstrap-icons';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div className="navbar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
        <XLg size={25}/>
        ) : (
          <List size={30}/>
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <NavLink to="/" 
              exact activeStyle={  {color:'green'} } 
              activeClassName="active-link"
              onClick={() => closeMenu()} title="Home"> 
              <div className='allhide'><House size={25} title={'Home'}/> <p className='navhide'>Home</p></div>
            </NavLink> 
          </li>

          <li>
            <NavLink to="/profile" 
              exact activeStyle={  {color:'green'} }
              activeClassName="active-link"
              onClick={() => closeMenu()} title="Profile">   
              <div className='allhide'><Person size={25}/> <p className='navhide'>Profile</p></div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/insight" 
              exact activeStyle={  {color:'green'} }
              activeClassName="active-link"
              onClick={() => closeMenu()} title="Insight"> 
              <div className='allhide'><Eye size={25}/>  <p className='navhide'>Insight</p></div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" 
              exact activeStyle={  {color:'green'} }
              activeClassName="active-link"
              onClick={() => closeMenu()} title="Services"> 
              <div className='allhide'><Briefcase size={25}/>   <p className='navhide'>Services</p></div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" 
              exact activeStyle={  {color:'green'} }
              activeClassName="active-link"
              onClick={() => closeMenu()} title="Contact">  
              <div className='allhide'><Envelope size={25}/>  <p className='navhide'>Contact</p></div>
            </NavLink>
          </li>

          <li>
            <Social />
          </li>
          
      </ul>
      
      
    </div>
  )
}

export default Navbar
