import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DemoTest1 from './demos/demotest1/DemoTest1';
import DemoTest2 from './demos/demotest2/DemoTest2';
import './App.css';
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo/test1" element={<DemoTest1 />} />
          <Route path="/demo/test2" element={<DemoTest2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
