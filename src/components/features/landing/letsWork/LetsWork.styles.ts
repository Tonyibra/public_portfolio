import styled from 'styled-components';

export const Contnainer = styled.div`
  text-align: center;
  margin-top: 150px;
  @media (max-width: 1224px) {
    margin: auto;
    margin-top: 70px;
  }
`;

export const ColoredText = styled.h1`
  background: ${(props) => props.color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 164px;
  padding: 0px;
  padding-right: 20px;
  margin: 0;
  line-height: 166px;
  @media (max-width: 1224px) {
    font-size: 75px;
    line-height: 90px;
    padding-right: 0px;
  }
`;
