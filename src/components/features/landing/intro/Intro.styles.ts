import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 150px;
  @media (max-width: 1224px) {
    margin-top: 40px;
    height: 60vh;
    justify-content: center;
  }
`;

export const Heading = styled.div`
  position: relative;
`;

export const HeroContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: -20px;
  overflow: hidden;
  @media (max-width: 1224px) {
    visibility: hidden;
  }
`;

export const LightContainer = styled.div`
  position: absolute; /* Position the child element absolutely */
  top: 50%; /* Move the top edge of the element to the vertical center */
  left: 50%; /* Move the left edge of the element to the horizontal center */
  transform: translate(-50%, -50%);
`;

export const SpanSpacing = styled.span`
  margin-left: 140px;

  @media (max-width: 1224px) {
    margin-left: 0px;
  }
`;
