import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1270px;
  margin: auto;
  margin-top: 160px;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    margin-top: 70px;
  }
`;

export const HeadingTitle = styled.div`
  margin-bottom: 16px;
  @media (max-width: 1224px) {
    margin-bottom: 10px;
  }
`;
export const TitleBox = styled.div`
  margin-bottom: 50px;
  max-width: 850px;
  @media (max-width: 1224px) {
    max-width: 80%;
    margin-bottom: 30px;
  }
`;
