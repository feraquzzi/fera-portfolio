import React from 'react';
import './styles/profile.css';
import { Download, Facebook, Instagram, Twitter, Linkedin, Github, ChevronDoubleRight } from 'react-bootstrap-icons';
import ScrollAnimation from 'react-animate-on-scroll';


const Profile = () => {

  const myStyle = {
    backgroundImage: "url('myimage.png')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="profile">
      <div className='firstall' style={myStyle} >
        <div className='first1'>
          <div className="first1a">
            
            <h2>Hello! I'm</h2>
            <h1>Femi Olaleye</h1>
            
          </div>

          <div className='first1b'>
            <p>Front-end developer / Shopify Expert / Graphics designer / UI/UX designer</p>
          </div>

          <div className='first1c'>
            <button>Get Resume <Download /></button>
          </div>

          <div className='first1d'>
            <p>Watch video</p>
          </div>
          
        </div>

        <div className='first2'>
          <div className='round1'>
            <div className='roundsocial'>
              <Facebook size={30} color="whitesmoke" style={{
                border: '1px solid lightgrey',
                padding: '15px',
                borderRadius: '50px',
                margin: 'auto'
              }}/>
              <br />
              <Twitter size={30} color="whitesmoke" style={{
                border: '1px solid lightgrey',
                padding: '15px',
                borderRadius: '50px',
                margin: 'auto'
              }}/>
              <br />
              <Instagram size={30} color="whitesmoke" style={{
                border: '1px solid lightgrey',
                padding: '15px',
                borderRadius: '50px',
                margin: 'auto'
              }}/>
              <br />
              <Github size={30} color="whitesmoke" style={{
                border: '1px solid lightgrey',
                padding: '15px',
                borderRadius: '50px',
                margin: 'auto'
              }}/> 
              <br />
              <Linkedin size={30} color="whitesmoke" style={{
                border: '1px solid lightgrey',
                padding: '15px',
                borderRadius: '50px',
                margin: 'auto'
              }}/>
            </div>
          </div>
        </div>
      </div>

      <div className='another1'>
        <div className='another1a'>
          <h3>|| My Services</h3>
          <h1>Service Provide For My Clients</h1>
        </div>

        <div className='another1b'>
            <div className='provide1'>
              <div className='provideicon'>
                <img src='frontending.png' alt="frontend" />
              </div>

              <div className='providehead'>
                <h2>Frontend Developer</h2>
              </div>

              <div className='providelist'>
                <ul>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                </ul>
              </div>

            </div>

            <div className='provide2'>
              <div className='provideicon'>
                <img src='shopifyicon.png' alt="shopify" style={{width: '70px;', height:'70px'}}/>
              </div>

              <div className='providehead'>
                <h2>Shopify Expert</h2>
              </div>

              <div className='providelist'>
                <ul>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                </ul>
              </div>
            </div>

            <div className='provide3'>
              <div className='provideicon'>
                <img src='ui.png' alt="UI/UX" />
              </div>

              <div className='providehead'>
                <h2>UI/UX Design</h2>
              </div>

              <div className='providelist'>
                <ul>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                  <li><p><ChevronDoubleRight size={10}/> <span className="tot">Lorem ipsum dolor </span></p></li>
                </ul>
              </div>
            </div>
        </div>
      </div>

      <div className='another2'>
        <div className='another2a'>
            <div className='another2ahead1'>
              <p>|| Special Skills</p>
            </div>

            <div className='another2ahead2'>
              <h1>My Special Skills</h1>
              <h2>Field Here.</h2>
            </div>

            <div className='another2abutton'>
              <button>Get Resume <Download /></button>
            </div>
        </div>

        <div className='another2b'>
          <div className='another2b1'>
            <div className="container">
              <p>Communication 75%</p>
              <div className="Loading"></div>
            </div>
              
          </div>

          <div className='another2b2'>
            <div className="container">
              <p>Leadership 90%</p>
              <div className="Loading"></div>
            </div>
          </div>

          <div className='another2b3'>
            <div className="container">
              <p>Teamwork 85%</p>
              <div className="Loading"></div>
            </div>
          </div>

          <div className='another2b4'>
            <div className="container">
              <p>Flexibility 80%</p>
              <div className="Loading"></div>
            </div>
          </div>
        </div>

        
      </div>

      <div className='exp'>

      </div>
      
    </div>
  )
    
}

export default Profile;
