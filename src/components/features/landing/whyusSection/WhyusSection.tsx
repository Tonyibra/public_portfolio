import React from 'react';
import { Container } from './whyusSection.styles';
import Text from '@/components/atoms/text/Text';
import { useMediaQuery } from 'react-responsive';
// import BgImage from '@/assets/images/bg.png';

const WhyusSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Container>
      <Text
        textAlign="center"
        fontSize={isTabletOrMobile ? '75' : '200'}
        type="h1"
        fontWeight="800"
      >
        Why me?
      </Text>
      {/* <ImageContainer>
        <Image src={BgImage.src} />
      </ImageContainer> */}
    </Container>
  );
};

export default WhyusSection;
