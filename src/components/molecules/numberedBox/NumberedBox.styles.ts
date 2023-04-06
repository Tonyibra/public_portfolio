import CountUp from 'react-countup';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescContainer = styled.div`
  /* max-width: 300px; */
`;

export const AboutContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const CountUpBox = styled(CountUp)`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 58px;
  line-height: 70px;
`;
