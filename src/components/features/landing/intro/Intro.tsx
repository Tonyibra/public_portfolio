import React from 'react';
import {
  Container,
  Heading,
  HeroContainer,
  LightContainer,
  SpanSpacing,
} from './Intro.styles';
import Text from '@/components/atoms/text/Text';
import HeroSVG from '@/assets/svg/hero';
import Light from '@/components/atoms/light/Light';
import { useMediaQuery } from 'react-responsive';
import HeroMobileSVG from '@/assets/svg/heroMobile';

const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Container>
      <Heading>
        <Text
          fontSize={isTabletOrMobile ? '50' : '120'}
          type="h1"
          fontWeight="bold"
        >
          <React.Fragment>
            Tony Ibrahim <br />
            Building Digital
            <br />
            <SpanSpacing>Solutions</SpanSpacing>
          </React.Fragment>
        </Text>
        <HeroContainer>
          {isTabletOrMobile ? <HeroMobileSVG /> : <HeroSVG />}
        </HeroContainer>
        <LightContainer>
          <Light />
        </LightContainer>
      </Heading>
    </Container>
  );
};

export default Intro;
