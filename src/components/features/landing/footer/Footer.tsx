import React from 'react';
import {
  ButtonContainer,
  CopyrightSection,
  FooterContainer,
  FooterSection,
  TextContainer,
} from './Footer.styles';
import Text from '@/components/atoms/text/Text';
import AppButton from '@/components/atoms/appButton/AppButton';
import Link from 'next/link';
import { FOOTER_DATA } from '@/data/footer';
import Col from '@/components/atoms/col/Col';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Col>
      <FooterContainer id="Contact">
        <FooterSection>
          <Text type="h1" fontSize="50" fontWeight="500">
            Would you like to work with me? Let&apos;s! work
          </Text>
          <Text type="h1" fontSize="50" fontWeight="500">
            together
          </Text>
          <ButtonContainer>
            <AppButton>Start a Project?</AppButton>
          </ButtonContainer>
        </FooterSection>
        <FooterSection>
          <TextContainer>
            <Text type="h6" fontSize="18">
              Address: Lebanon, Beirut
            </Text>
          </TextContainer>
          <Link href="tel:+96176940499">
            <TextContainer>
              <Text isLink type="h6" fontSize="18">
                Contact : +961 76 940 499
              </Text>
            </TextContainer>
          </Link>
          <Link href="mailto:tonyibra.ads@gmail.com">
            <TextContainer>
              <Text isLink type="h6" fontSize="18">
                Email : tonyibra.ads@gmail.com
              </Text>
            </TextContainer>
          </Link>
        </FooterSection>
        <FooterSection>
          {FOOTER_DATA.map((item) => (
            <Link key={item.id.toString()} href={item.link} target="_blank">
              <TextContainer>
                <Text isLink textAlign="center" type="h6" fontSize="18">
                  {item.title}
                </Text>
              </TextContainer>
            </Link>
          ))}
        </FooterSection>
      </FooterContainer>
      <TextContainer>
        <CopyrightSection>
          <Text
            type="h6"
            color="#676869"
            textAlign="center"
            fontSize={isTabletOrMobile ? '12' : '18'}
          >
            © 2022 Tony ibrahim - All Right Reserved
          </Text>
        </CopyrightSection>
      </TextContainer>
    </Col>
  );
};

export default Footer;
