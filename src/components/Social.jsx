import React from 'react';
import './styles/social.css';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'react-bootstrap-icons';


const Social = () => {

  return (
    <div className="social">
      <ul>
          <li>
            <NavLink to="https://www.instagram.com/fera" 
              exact activeStyle={  {color:'green'} }  > 
              <Instagram size={17}/> 
            </NavLink>
          </li>
          <li><NavLink to="https://www.facebook.com/fera" exact activeStyle={  {color:'green'} } > <Facebook size={17}/> </NavLink></li>
          <li><NavLink to="https://www.twitter.com/fera" exact activeStyle={  {color:'green'} } > <Twitter size={17}/> </NavLink></li>
          <li><NavLink to="https://www.linkedin.com/fera" exact activeStyle={  {color:'green'} } > <Linkedin size={17}/> </NavLink></li>
      </ul>
    </div>
  )
}

export default Social;
