import React from 'react';
import { Column } from './Col.styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Col: React.FC<IProps> = ({ children }) => {
  return <Column>{children}</Column>;
};

export default React.memo(Col);
