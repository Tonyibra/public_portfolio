import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 0px 120px;
  margin-top: 170px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1224px) {
    flex-direction: column;
    margin: 0px 0px;
    margin-top: 70px;
  }
`;

export const FooterSection = styled.div`
  width: 50%;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1224px) {
    width: 90%;
    margin: auto;
    padding-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  @media (max-width: 1224px) {
    margin-top: 40px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 1224px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const CopyrightSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
