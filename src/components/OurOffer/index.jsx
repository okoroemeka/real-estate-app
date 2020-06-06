import React from 'react';
import Header from '../UI/Header';
import Card from '../UI/Card';
import ContentCard from '../UI/ContentCard';
import PropertyDescription from '../UI/PropertyDescription';
import Image from '../UI/Image';
import appartmentImage from '../../assets/images/houseImage.svg';
import './index.scss';

const OurOffer = () => {
  return (
    <React.Fragment>
      <div className='property__container'>
        <div className='col-12 sub__property__container'>
          <Header
            header='Our Offer'
            paragraphText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The'
          />
        </div>
      </div>
      <Card cardHeight={500} imageLink={appartmentImage}>
        <div className='offer__apartment'>
          <Image
            imageLink={appartmentImage}
            imageName='house'
            width='66.66%'
            topPosition='0px'
            leftPositioning='0px'
          />
          <ContentCard width='31%' borderRadius={5}>
            <div className='upper-region'>
              <span>
                <i className='fa fa-star' aria-hidden='true'>
                  <span className='discount__rate'>10%</span>
                </i>
              </span>{' '}
              <span className='label'>discount for rent!</span>
            </div>
            <div>
              <PropertyDescription
                houseName='Rain Villa'
                address='2 sandi rd'
                action='For rent'
                price={288}
                numberOfBedRoom={5}
                numberOfBathRoom={7}
                houseSize={20}
              />
            </div>
          </ContentCard>
        </div>
      </Card>
    </React.Fragment>
  );
};
export default OurOffer;
