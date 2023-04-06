import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  width: 160px;
  height: 160px;
  border-radius: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 50px;
`;

export const Light = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 245, 160, 0.7) 0%,
    rgba(0, 217, 245, 0.7) 100%
  );
  filter: blur(62px);
  position: absolute;
  min-width: 118.53px;
  min-height: 118.53px;
`;

export const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
