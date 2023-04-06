import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 120px;

  @media (max-width: 1224px) {
    margin: 0px 20px;
  }
`;

export const SuccessList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 88px;
  margin-bottom: 200px;

  @media only screen and (max-width: 1224px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* show two columns on screens smaller than 768px */
  }
  /* media queries for mobile */
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr; /* show one column on screens smaller than 480px */
  }
`;
