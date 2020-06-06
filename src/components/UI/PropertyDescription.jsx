import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';
import locationIcon from '../../assets/images/locationIcon.svg';
import bedroomIcon from '../../assets/images/bedroomIcon.svg';
import bathroomIcon from '../../assets/images/bathroomIcon.svg';
import sizeIcon from '../../assets/images/sizeIcon.svg';

const PropertyDescription = ({
  houseName,
  address,
  action,
  price,
  numberOfBedRoom,
  numberOfBathRoom,
  houseSize,
}) => {
  return (
    <PropertyDescription.Wrapper cardPadding={10}>
      <PropertyDescription.Div>
        <PropertyDescription.Text fontSize={18} fontWeight={550}>
          {houseName}
        </PropertyDescription.Text>
      </PropertyDescription.Div>
      <PropertyDescription.Div>
        <PropertyDescription.IconImage src={locationIcon} alt='location icon' />
        <PropertyDescription.Text fontSize={12} color='#808080'>
          {address}
        </PropertyDescription.Text>
      </PropertyDescription.Div>
      <PropertyDescription.Div>
        <PropertyDescription.Text fontSize={12}>
          {action}
        </PropertyDescription.Text>
      </PropertyDescription.Div>
      <PropertyDescription.Div>
        <PropertyDescription.Text
          fontSize={12}
          color='#ff0000'
        >{`$${price.toFixed(2)}`}</PropertyDescription.Text>
      </PropertyDescription.Div>
      <PropertyDescription.Div>
        <PropertyDescription.Div>
          <PropertyDescription.IconImage
            src={bedroomIcon}
            alt='bed room Icon'
          />
          <PropertyDescription.Text
            fontSize={12}
          >{`${numberOfBedRoom} Red Room`}</PropertyDescription.Text>
        </PropertyDescription.Div>
        <PropertyDescription.Div>
          <PropertyDescription.IconImage
            src={bathroomIcon}
            alt='bath room icon'
          />
          <PropertyDescription.Text
            fontSize={12}
          >{`${numberOfBathRoom} Bath Room`}</PropertyDescription.Text>
        </PropertyDescription.Div>
        <PropertyDescription.Div>
          <PropertyDescription.IconImage src={sizeIcon} alt='house size icon' />
          <PropertyDescription.Text
            fontSize={12}
          >{`${houseSize} sft`}</PropertyDescription.Text>
        </PropertyDescription.Div>
      </PropertyDescription.Div>
    </PropertyDescription.Wrapper>
  );
};

PropertyDescription.Wrapper = styled.div`
  width: 100%;
  height: ${(props) =>
    props.height ? convertFromPixelsToRem(props.height) : 'auto'};
  padding: ${(props) =>
    props.cardPadding ? convertFromPixelsToRem(props.cardPadding) : 0};
`;
PropertyDescription.Image = styled.img`
  width: 100%;
  height: ${convertFromPixelsToRem(250)};
  object-fit: cover;
`;
PropertyDescription.IconImage = styled.img`
  width: ${convertFromPixelsToRem(14)};
  margin-right: ${convertFromPixelsToRem(6)};
`;
PropertyDescription.Div = styled.div`
  display: flex;
  width: 100%;
  margin: ${convertFromPixelsToRem(8)} 0;
`;
PropertyDescription.Text = styled.h3`
  margin: 0;
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) =>
    props.fontSize ? convertFromPixelsToRem(props.fontSize) : '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;
export default PropertyDescription;
