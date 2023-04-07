import React from 'react';
import { Box, Section, StackContainer } from './SingleWork.styles';
import Text from '../text/Text';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  name: string;
  stack: string;
  link: string;
}

const SingleWork: React.FC<IProps> = ({ link, name, stack }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Box>
      <Section>
        <Text
          fontSize={isTabletOrMobile ? '10' : '18'}
          type="h1"
          fontWeight="bold"
        >
          {name}
        </Text>
      </Section>
      <Section>
        <StackContainer>{stack}</StackContainer>
      </Section>
      <Section>
        <Link href={link} target="_blank">
          <Text
            textAlign="right"
            type="h1"
            fontWeight="bold"
            isLink
            fontStyle="italic"
            fontSize={isTabletOrMobile ? '12' : '18'}
          >
            View Link
          </Text>
        </Link>
      </Section>
    </Box>
  );
};

export default SingleWork;
