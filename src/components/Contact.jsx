import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
import './styles/contact.css';
import { Telephone } from 'react-bootstrap-icons';

const Contact = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-your-app-name.cloudfunctions.net/submit',
      formData
    )
    .then(res => {
      db.collection('emails').add({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: new Date(),
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <form onSubmit={handleSubmit}>
        <div className="contactform">
          
          <input 
          type="text" 
          className='name' 
          placeholder='Full name' 
          required
          onChange={updateInput}
          value={formData.name}
          />

          <br />

          <div className='one'>
            <input 
            type="email" 
            className='nametwo' 
            placeholder='Email address' 
            required
            onChange={updateInput}
            value={formData.email}
            />

            <input 
            type="text" 
            className='nametwo' 
            placeholder='Phone number' 
            required
            onChange={updateInput}
            value={formData.phone }
            />

          </div>

          <br />

          <textarea 
          className='name spec' 
          placeholder='Message' 
          required
          onChange={updateInput}
          value={formData.message}
          ></textarea>
          <br />

          <div className='two'>
            <button type="submit" >Send</button>
            <a href="tel:+234-703-693-2051" ><Telephone size={50} color='#10f7d8'/></a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact;
