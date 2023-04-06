import React from 'react';
import {
  Container,
  HeadingTitle,
  ServiceItem,
  ServiceList,
  TitleBox,
} from './ServiceSection.styles';
import Text from '@/components/atoms/text/Text';
import { useMediaQuery } from 'react-responsive';

const ServiceSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      <Container>
        <HeadingTitle>
          <Text type="h5" color="#06FFF0" fontSize="18">
            My Services
          </Text>
        </HeadingTitle>
        <TitleBox>
          <Text
            type="h1"
            fontWeight="500"
            fontSize={isTabletOrMobile ? '40' : '62'}
          >
            It's not about what we make, it's about how satisfied you are with
            our service
          </Text>
        </TitleBox>
      </Container>
      <ServiceList>
        <ServiceItem>ReactJS</ServiceItem>
        <ServiceItem>NextJS</ServiceItem>
        <ServiceItem>Svelete</ServiceItem>
      </ServiceList>
      <ServiceList>
        <ServiceItem>React Native</ServiceItem>
        <ServiceItem>Expo</ServiceItem>
        <ServiceItem>Flutter</ServiceItem>
        <ServiceItem>NodeJS</ServiceItem>
        <ServiceItem>OpenAI</ServiceItem>
      </ServiceList>
    </>
  );
};

export default ServiceSection;
