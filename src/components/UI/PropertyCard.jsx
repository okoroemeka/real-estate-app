import React from 'react';
import styled from '@emotion/styled';
import ContentCard from '../UI/ContentCard';
import { convertFromPixelsToRem } from '../../utils/helper';
import PropertyDescription from '../UI/PropertyDescription';

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
        <PropertyDescription
          houseName={houseName}
          address={address}
          action={action}
          price={price}
          numberOfBedRoom={numberOfBedRoom}
          numberOfBathRoom={numberOfBathRoom}
          houseSize={houseSize}
        />
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
