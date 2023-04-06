import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  outline: none;
  padding: 17px 21px;
  border-radius: 60px;
  cursor: pointer;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.9);
    outline: none;
  }
  @media (max-width: 1224px) {
    width: 100%;
  }
`;
