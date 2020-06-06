import React from 'react';
import Header from '../UI/Header';
import PropertyCard from '../UI/PropertyCard';
import apartment from '../../assets/images/apartment.svg';
import './index.scss';

const RecentProperties = (props) => {
  return (
    <div className='recent__properties__container'>
      <div className='col-12 sub__property__container'>
        <Header
          header='Recently Added Properties'
          paragraphText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The'
        />
      </div>
      <div className='row property__card__container'>
        <PropertyCard
          propertyImageLink={apartment}
          houseName='1001 villa'
          address='7 mista rd'
          action='For sale'
          price={120}
          numberOfBedRoom={4}
          numberOfBathRoom={4}
          houseSize={320}
        />
        <PropertyCard
          propertyImageLink={apartment}
          houseName='1001 villa'
          address='7 mista rd'
          action='For sale'
          price={120}
          numberOfBedRoom={4}
          numberOfBathRoom={4}
          houseSize={320}
        />
        <PropertyCard
          propertyImageLink={apartment}
          houseName='1001 villa'
          address='7 mista rd'
          action='For sale'
          price={120}
          numberOfBedRoom={4}
          numberOfBathRoom={4}
          houseSize={320}
        />
      </div>
    </div>
  );
};

export default RecentProperties;
