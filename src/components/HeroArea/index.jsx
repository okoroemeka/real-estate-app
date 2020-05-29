import React from 'react';
import HeroCard from '../UI/Card';
import ContentWrapper from '../../components/UI/ContentWrapper';
import image from '../../assets/images/navImage.svg';
import apartment from '../../assets/images/apartment.svg';
import Navigation from '../Navigation';
import ContentCard from '../UI/ContentCard';
import Image from '../UI/Image';
import H1 from '../UI/H1';
import Paragraph from '../UI/Paragraph';
import Search from './Search';

const HeroArea = () => {
  return (
    <HeroCard imageLink={image} cardHeight={789}>
      <Navigation />
      <ContentWrapper marginTopAndDown={120}>
        <ContentCard height={450} backgroundColor='transparent' padding={16}>
          <H1
            textTransform='uppercase'
            fontWeight={550}
            fontSize={40}
            marginBottom={14}
          >
            the best way to
          </H1>
          <H1
            textTransform='uppercase'
            fontWeight={550}
            fontSize={40}
            marginBottom={14}
          >
            discover your home
          </H1>
          <Paragraph paddingRight={82} fontSize={20}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page{' '}
          </Paragraph>
          <Search />
        </ContentCard>
        <ContentCard
          height={450}
          backgroundColor='#8B90FF'
          borderRadius={5}
          padding={16}
        >
          <Image
            imageLink={apartment}
            imageName='apartment'
            position='absolute'
          />
        </ContentCard>
      </ContentWrapper>
    </HeroCard>
  );
};

export default HeroArea;
