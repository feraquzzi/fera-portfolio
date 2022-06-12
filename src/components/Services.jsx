import React from 'react';
import { Link } from 'react-router-dom';
import './styles/services.css';
import { Telephone, CalendarEvent, ThreeDots } from 'react-bootstrap-icons';

const Projects = () => {
  return (
    <div className="services">
      <h1>Service provide for my clients</h1>
      <div className='allservice'>
        <div className='service1'>
          <div className="service1a">
            <img src="front2.png" alt='shopify'/>
          </div>

          <div className="service1b">
            <div className='front'>
              <div className='fronthead'>
                <h3>Frontend Developer</h3>
                <ThreeDots size={30} color='#2b6d63'/>
              </div>
              <p>I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire you can get in touch with me.</p>
              <div className='touch'>
                <Link to="/contact"><button><CalendarEvent size={12}/> Get in Touch</button></Link>
                <a href="tel:+234-703-693-2051" ><Telephone size={30} color='#2b6d63'/></a>
              </div>
            </div>

            
          </div>
        </div>

        <div className='service2'>
          <div className="service2a">
            <img src="shopify.png" alt='shopify'/>
          </div>

          <div className="service2b">
            <div className='front'>
              <div className='fronthead'>
                <h3>Shopify Expert</h3>
                <ThreeDots size={30} color='#2b6d63'/>
              </div>
              <p>Designs and marketing powress focused on making your business e-commerce store a success, and grow your business with shopify. Connect with and discover more customers online.</p>
              <div className='touch'>
                <Link to="/contact"><button><CalendarEvent size={12}/> Get in Touch</button></Link>
                <a href="tel:+234-703-693-2051" ><Telephone size={30} color='#2b6d63'/></a>
              </div>
            </div>
          </div>
        </div>

        <div className='service3'>
          <div className="service3a">
            <img src="design.png" alt='design'/>
          </div>

          <div className="service3b">
            <div className='front'>
              <div className='fronthead'>
                <h3>UI/UX & Graphics design</h3>
                <ThreeDots size={30} color='#2b6d63'/>
              </div>
              <p>I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire you can get in touch with me.</p>
              <div className='touch'>
                <Link to="/contact"><button><CalendarEvent size={12}/> Get in Touch</button></Link>
                <a href="tel:+234-703-693-2051" ><Telephone size={30} color='#2b6d63'/></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;
