import React from 'react';
import HeroArea from './components/HeroArea';
import OurProperty from './components/OurProperty';
import OurOffer from './components/OurOffer';
import './style/App.css';

function App() {
  return (
    <div className='container'>
      <HeroArea />
      <OurProperty />
      <OurOffer />
    </div>
  );
}

export default App;
