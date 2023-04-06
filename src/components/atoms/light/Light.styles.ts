import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 209, 255, 0.4);
  filter: blur(174px);
  min-height: 370px;
  min-width: 370px;

  @media (max-width: 1224px) {
    min-height: 180px;
    min-width: 180px;
  }
`;
