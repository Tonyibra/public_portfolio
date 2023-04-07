import React from 'react';
import { Container, ListHeader } from './works.styles';
import Text from '@/components/atoms/text/Text';

import Col from '@/components/atoms/col/Col';
import SingleWork from '@/components/atoms/singleWork/SingleWork';
import { WORKS } from '@/data/works';

const WorkSections = () => {
  return (
    <Container>
      <Text type="h1" color="white" fontSize="62" fontWeight="500">
        A list of my projects.
      </Text>
      <ListHeader>
        <Text type="h5" color="#06FFF0" fontSize="18">
          Projects
        </Text>
      </ListHeader>
      <Col>
        {WORKS.map((work) => (
          <SingleWork
            key={work.id}
            name={work.name}
            stack={work.stack}
            link={work.link}
          />
        ))}
      </Col>
    </Container>
  );
};

export default WorkSections;
