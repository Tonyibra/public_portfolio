import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
export const MarqueeBox = styled(Marquee)`
  .overlay::after {
    background: transparent;
  }
  .overlay::before {
    background: transparent;
  }
  .marquee {
    margin-top: 20px;
    margin-bottom: 150px;
  }
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MarqueeDecorator = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
`;
