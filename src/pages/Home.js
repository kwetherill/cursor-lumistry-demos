import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Topnav from '../components/Topnav';
import demosData from '../data/demos.data';



const Home = () => {

  return (
    <div>
      <Topnav />

      <div style={{ marginTop: '2rem' }}>
        <h2>TopNav Button Demo</h2>
      </div>

      <h1>Home Page</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Available Demos</h3>
        <ul>
          {demosData.map(demo => (
            <li key={demo.id} style={{ marginBottom: '1rem' }}>
              <Link to={demo.path} style={{ textDecoration: 'none', color: '#007bff' }}>
                <strong>{demo.title}</strong>
              </Link>
              <p style={{ margin: '0.25rem 0', color: '#666', fontSize: '0.9rem' }}>
                {demo.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/about">Go to About Page</Link>
        <br />
        <Button label="Click me" />
      </div>

    </div>
  );
};

export default Home;
