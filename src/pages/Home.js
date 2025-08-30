import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About Page</Link>
      <Button label="Click me" />
      
      <div style={{ marginTop: '2rem' }}>
        <h2>TopNav Button Demo</h2>
      </div>
    </div>
  );
};

export default Home;
