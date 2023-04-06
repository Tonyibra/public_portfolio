import styled from 'styled-components';

export const Box = styled.div`
  margin-bottom: 70px;

  @media (max-width: 1224px) {
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 40px;
  max-height: 600px;
`;
