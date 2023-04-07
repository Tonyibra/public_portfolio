import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 120px;
  padding-bottom: 100px;

  @media (max-width: 1224px) {
    width: 90%;
    margin: auto;
    padding-bottom: 50px;
    margin-top: 40px;
  }
`;

export const ListHeader = styled.div`
  margin-top: 70px;
  margin-bottom: 20px;

  @media (max-width: 1224px) {
    margin-top: 35px;
    margin-bottom: 10px;
  }
`;
