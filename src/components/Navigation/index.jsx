import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';
import homeIcon from '../../assets/images/homeIcon.svg';
import Link from '../UI/Link';

const Navigation = (props) => {
  return (
    <Navigation.Wrapper>
      <Navigation.Header>
        <Navigation.HeaderImage src={homeIcon} alt='home' />
        <Navigation.HeaderTitle>Home.Net</Navigation.HeaderTitle>
      </Navigation.Header>
      <Navigation.Link>
        <Link>Home</Link>
        <Link>Properties</Link>
        <Link>Our offer</Link>
        <Link>About</Link>
        <Link>Contact Us</Link>
      </Navigation.Link>
    </Navigation.Wrapper>
  );
};

Navigation.Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;
Navigation.Header = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
Navigation.Link = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
Navigation.HeaderImage = styled.img`
  width: ${convertFromPixelsToRem(32)};
  height: ${convertFromPixelsToRem(32)};
  margin-right: ${convertFromPixelsToRem(10)};
`;
Navigation.HeaderTitle = styled.div`
  font-size: ${convertFromPixelsToRem(20)};
  font-weight: 600;
`;
export default Navigation;
