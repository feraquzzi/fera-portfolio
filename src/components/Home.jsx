import React from 'react';
import { CodeSlash } from 'react-bootstrap-icons';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <CodeSlash color="grey" size={20}/>
      <div className="homehead">
        <h1>Hi,</h1>
        <h1>I'm Femi,</h1>
        <h1>Web developer. <CodeSlash color="grey" size={20}/></h1>
      </div>
      <p>Front-end developer / Shopify Expert / Graphics designer / UI/UX designer</p>
      <button>Let's talk</button>
    </div>
  )
}

export default Home;
