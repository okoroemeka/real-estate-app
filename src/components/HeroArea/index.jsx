import React from 'react';
import HeroCard from '../UI/Card';
import image from '../../assets/images/navImage.svg';
import Navigation from '../Navigation';

const HeroArea = () => {
  return (
    <HeroCard imageLink={image} cardHeight={789}>
      <Navigation />
    </HeroCard>
  );
};

export default HeroArea;
