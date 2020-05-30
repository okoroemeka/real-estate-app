import React from 'react';
import styled from '@emotion/styled';
import ContentCard from '../UI/ContentCard';
import { convertFromPixelsToRem } from '../../utils/helper';
import locationIcon from '../../assets/images/locationIcon.svg';
import bedroomIcon from '../../assets/images/bedroomIcon.svg';
import bathroomIcon from '../../assets/images/bathroomIcon.svg';
import sizeIcon from '../../assets/images/sizeIcon.svg';

const PropertyCard = ({
  propertyImageLink,
  houseName,
  address,
  action,
  price,
  numberOfBedRoom,
  numberOfBathRoom,
  houseSize,
}) => {
  return (
    <ContentCard width='31.33%'>
      <PropertyCard.Container>
        <PropertyCard.Wrapper height={250}>
          <PropertyCard.Image src={propertyImageLink} alt={houseName} />
        </PropertyCard.Wrapper>
        <PropertyCard.Wrapper cardPadding={10}>
          <PropertyCard.Div>
            <PropertyCard.Text fontSize={18} fontWeight={550}>
              {houseName}
            </PropertyCard.Text>
          </PropertyCard.Div>
          <PropertyCard.Div>
            <PropertyCard.IconImage src={locationIcon} alt='location icon' />
            <PropertyCard.Text fontSize={12} color='#808080'>
              {address}
            </PropertyCard.Text>
          </PropertyCard.Div>
          <PropertyCard.Div>
            <PropertyCard.Text fontSize={12}>{action}</PropertyCard.Text>
          </PropertyCard.Div>
          <PropertyCard.Div>
            <PropertyCard.Text fontSize={12} color='#ff0000'>{`$${price.toFixed(
              2
            )}`}</PropertyCard.Text>
          </PropertyCard.Div>
          <PropertyCard.Div>
            <PropertyCard.Div>
              <PropertyCard.IconImage src={bedroomIcon} alt='bed room Icon' />
              <PropertyCard.Text
                fontSize={12}
              >{`${numberOfBedRoom} Red Room`}</PropertyCard.Text>
            </PropertyCard.Div>
            <PropertyCard.Div>
              <PropertyCard.IconImage src={bathroomIcon} alt='bath room icon' />
              <PropertyCard.Text
                fontSize={12}
              >{`${numberOfBathRoom} Bath Room`}</PropertyCard.Text>
            </PropertyCard.Div>
            <PropertyCard.Div>
              <PropertyCard.IconImage src={sizeIcon} alt='house size icon' />
              <PropertyCard.Text
                fontSize={12}
              >{`${houseSize} sft`}</PropertyCard.Text>
            </PropertyCard.Div>
          </PropertyCard.Div>
        </PropertyCard.Wrapper>
      </PropertyCard.Container>
    </ContentCard>
  );
};

PropertyCard.Container = styled.div`
  width: 100%;
  box-shadow: 1px 1px 5px #aaaaaa;
  margin-bottom: 2.5rem;
`;
PropertyCard.Wrapper = styled.div`
  width: 100%;
  height: ${(props) =>
    props.height ? convertFromPixelsToRem(props.height) : 'auto'};
  padding: ${(props) =>
    props.cardPadding ? convertFromPixelsToRem(props.cardPadding) : 0};
`;
PropertyCard.Image = styled.img`
  width: 100%;
  height: ${convertFromPixelsToRem(250)};
  object-fit: cover;
`;
PropertyCard.IconImage = styled.img`
  width: ${convertFromPixelsToRem(14)};
  margin-right: ${convertFromPixelsToRem(6)};
`;
PropertyCard.Div = styled.div`
  display: flex;
  width: 100%;
  margin: ${convertFromPixelsToRem(8)} 0;
`;
PropertyCard.Text = styled.h3`
  margin: 0;
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) =>
    props.fontSize ? convertFromPixelsToRem(props.fontSize) : '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;
export default PropertyCard;
