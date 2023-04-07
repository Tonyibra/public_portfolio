import React from 'react';
import { Box, Section, StackContainer } from './SingleWork.styles';
import Text from '../text/Text';
import Row from '../row/Row';
import Link from 'next/link';

interface IProps {
  name: string;
  stack: string;
  link: string;
}

const SingleWork: React.FC<IProps> = ({ link, name, stack }) => {
  return (
    <Box>
      <Section>
        <Text type="h1" fontWeight="bold">
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
          >
            View Link
          </Text>
        </Link>
      </Section>
    </Box>
  );
};

export default SingleWork;
