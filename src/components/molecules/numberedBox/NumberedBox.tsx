import React from 'react';
import {
  AboutContainer,
  Box,
  CountUpBox,
  DescContainer,
} from './NumberedBox.styles';
import Text from '@/components/atoms/text/Text';
import CountUp from 'react-countup';

interface IProps {
  title: string;
  about: string;
  desc: string;
  id: number;
}

const NumberedBox: React.FC<IProps> = ({ about, desc, title, id }) => {
  const prefix = React.useMemo(() => {
    switch (id) {
      case 1:
        return '$';
      default:
        return undefined;
    }
  }, [id]);

  return (
    <Box>
      <CountUpBox end={+title} suffix="+" prefix={prefix} enableScrollSpy />
      <AboutContainer>
        <Text fontSize="20" type="h4">
          {about}
        </Text>
      </AboutContainer>

      <DescContainer>
        <Text color="#676869" fontSize="18" type="p">
          {desc}
        </Text>
      </DescContainer>
    </Box>
  );
};

export default React.memo(NumberedBox);
