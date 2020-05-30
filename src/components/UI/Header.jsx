import React from 'react';
import H1 from './H1';
import Paragraph from './Paragraph';
import arrow from '../../assets/images/arrow.svg';
import '../../style/header.scss';

const OurProperty = ({ paragraphText, header }) => {
  return (
    <div className='row'>
      <div className='col-6 header'>
        <H1 color='black' fontSize={32} fontWeight={500}>
          {header}
        </H1>
        <Paragraph color='gray'>{paragraphText}</Paragraph>
      </div>
      <div className='col-6 button__container'>
        <button>
          <div className='text'>Read more </div>
          <div className='image'>
            <img src={arrow} alt='arrow' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurProperty;
