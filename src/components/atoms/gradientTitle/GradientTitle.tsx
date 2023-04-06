import React from 'react';
import { Title } from './GradientTitle.styles';

interface IProps {
  title: string;
}

const GradientTitle: React.FC<IProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default GradientTitle;
