import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.7px solid #e5e5e570;
  padding: 30px 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;

export const StackContainer = styled.p`
  max-width: 350px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: white;
  margin: 0;
  @media (max-width: 768px) {
    font-weight: 300;
  }
`;

export const Section = styled.div`
  width: 33%;
`;
