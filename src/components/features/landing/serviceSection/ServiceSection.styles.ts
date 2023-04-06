import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1270px;
  margin: auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const HeadingTitle = styled.div`
  margin-bottom: 16px;
`;

export const TitleBox = styled.div`
  margin-bottom: 50px;
`;

export const ServiceList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-bottom: 70px;
  @media (max-width: 1340px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const ServiceItem = styled.span`
  background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 500;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.1em;
  padding-right: 20px;
  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 45px;
  }
`;
