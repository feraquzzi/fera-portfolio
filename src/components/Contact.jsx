import React from 'react';
import './styles/contact.css';
import { Telephone } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <form>
        <div className="contactform">
          
          <input type="text" className='name' placeholder='Full name' required/>
          <br />
          <div className='one'>
            <input type="email" className='nametwo' placeholder='Email address' required/>
            <input type="text" className='nametwo' placeholder='Phone number' required/>
          </div>
          <br />
          <textarea className='name spec' placeholder='Message' required></textarea><br />
          <div className='two'>
            <button>Send</button>
            <a href="tel:+234-703-693-2051" ><Telephone size={50} color='#10f7d8'/></a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
