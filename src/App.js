import React from 'react';
import HeroArea from './components/HeroArea';
import OurProperty from './components/OurProperty';
import OurOffer from './components/OurOffer';
import RecentProperties from './components/RecentProperties';
import './style/App.css';

function App() {
  return (
    <div className='container'>
      <HeroArea />
      <OurProperty />
      <OurOffer />
      <RecentProperties />
    </div>
  );
}

export default App;
