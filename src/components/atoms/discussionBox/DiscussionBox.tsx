import React from 'react';
import { BoxCol, Container, Light } from './DiscussionBox.styles';
import Text from '../text/Text';

const DiscussionBox = () => {
  return (
    <>
      <Container>
        <BoxCol>
          <Text
            color="#000000"
            fontSize="24"
            type="h3"
            letterSpacing={'-0.1em'}
            fontStyle="500"
            textAlign="center"
          >
            Discussion
          </Text>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.5V19.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 12.5L12 19.5L4.99997 12.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </BoxCol>
        <Light />
      </Container>
    </>
  );
};

export default DiscussionBox;
