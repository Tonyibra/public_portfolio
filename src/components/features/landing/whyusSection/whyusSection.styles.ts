import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -120px;
  width: 100%;
  display: flex;
`;
