import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const Card = ({ imageLink, cardHeight, children }) => {
  return (
    <Card.Wrapper
      className='hero__Card'
      imageUrl={imageLink}
      height={cardHeight}
    >
      <Card.Overlay>{children}</Card.Overlay>
    </Card.Wrapper>
  );
};
Card.Wrapper = styled.div`
  width: 100%;
  height: ${(props) => convertFromPixelsToRem(props.height)};
  background: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
Card.Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(13, 19, 215, 0.5);
  padding: ${convertFromPixelsToRem(0)} ${convertFromPixelsToRem(150)};
`;
export default Card;
