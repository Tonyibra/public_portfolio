import React from 'react';
import { Container } from './Row.styles';

interface IProps {
  children: React.ReactNode;
  justifyContent?: React.CSSProperties['justifyContent'];
  style?: React.CSSProperties;
}

const Row: React.FC<IProps> = ({ children, justifyContent, style }) => {
  return (
    <Container style={style} justifyContent={justifyContent}>
      {children}
    </Container>
  );
};

export default React.memo(Row);
