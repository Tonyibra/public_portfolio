import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.color};
  z-index: 999;
  transition: 0.3 ease-in-out;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 0px 120px;

  @media (max-width: 1224px) {
    padding: 0px 36px;
  }
`;

export const ListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  gap: 50px;
`;

export const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const AppButtonContainer = styled.div`
  width: 160px;
`;
