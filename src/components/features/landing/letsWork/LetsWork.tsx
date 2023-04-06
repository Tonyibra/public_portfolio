import React from 'react';
import { ColoredText, Contnainer } from './LetsWork.styles';
import Text from '@/components/atoms/text/Text';
import Row from '@/components/atoms/row/Row';
import { useMediaQuery } from 'react-responsive';
import Col from '@/components/atoms/col/Col';
import DiscussionBox from '@/components/atoms/discussionBox/DiscussionBox';

const LetsWork = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Contnainer>
      <Row justifyContent="center">
        <Text
          textAlign="center"
          fontStyle="italic"
          type="h1"
          fontWeight="600"
          fontSize={isTabletOrMobile ? '85' : '164'}
        >
          Let&apos;s
        </Text>
        <ColoredText color="linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)">
          Work
        </ColoredText>
      </Row>
      <Row justifyContent="center">
        <Text
          textAlign="center"
          fontStyle="italic"
          type="h1"
          fontWeight="600"
          fontSize={isTabletOrMobile ? '85' : '164'}
        >
          Together
        </Text>
        {!isTabletOrMobile && <DiscussionBox />}
      </Row>
      {isTabletOrMobile ? (
        <Col>
          <Text
            textAlign="center"
            fontStyle="italic"
            type="h1"
            fontWeight="600"
            fontSize={isTabletOrMobile ? '85' : '164'}
          >
            Let’s be
          </Text>
          <ColoredText color="linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)">
            Creative.
          </ColoredText>
        </Col>
      ) : (
        <Row justifyContent="center">
          <Text
            textAlign="center"
            fontStyle="italic"
            type="h1"
            fontWeight="600"
            fontSize={isTabletOrMobile ? '85' : '164'}
          >
            Let’s be
          </Text>
          <ColoredText color="linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)">
            Creative.
          </ColoredText>
        </Row>
      )}
    </Contnainer>
  );
};

export default LetsWork;
