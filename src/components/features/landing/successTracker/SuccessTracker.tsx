import React from 'react';
import { Container, SuccessList } from './SuccessTracker.styles';
import Text from '@/components/atoms/text/Text';
import { SUCCESS_TRACKER } from '@/data/successTracker';
import NumberedBox from '@/components/molecules/numberedBox/NumberedBox';
import { useMediaQuery } from 'react-responsive';

const SuccessTracker = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Container id="Service">
      <Text
        type="h2"
        fontSize={isTabletOrMobile ? '40' : '62'}
        fontWeight="500"
      >
        Recognize your successes and keep working to accomplish more.
      </Text>
      <SuccessList>
        {SUCCESS_TRACKER.map((item) => (
          <NumberedBox
            key={item.id.toString()}
            title={item.title}
            about={item.about}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </SuccessList>
    </Container>
  );
};

export default SuccessTracker;
