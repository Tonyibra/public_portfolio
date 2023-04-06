import React from 'react';
import { Box, Image } from './WorkBox.styles';
import Row from '@/components/atoms/row/Row';
import Text from '@/components/atoms/text/Text';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  type: string;
  projectName: string;
  link: string;
  image: string;
}

const WorkBox: React.FC<IProps> = ({ image, link, projectName, type }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Box>
      <Row justifyContent="space-between">
        <Text
          color="#676869"
          type="h6"
          fontSize={isTabletOrMobile ? '12' : '18'}
        >
          <>
            {type} / {projectName}
          </>
        </Text>
        <Link href={`https:${link}`} target="_blank">
          <Text
            isLink
            color="#fff"
            type="h6"
            fontSize={isTabletOrMobile ? '12' : '18'}
            fontStyle="italic"
          >
            View Link
          </Text>
        </Link>
      </Row>
      <Image src={image} />
    </Box>
  );
};

export default WorkBox;
