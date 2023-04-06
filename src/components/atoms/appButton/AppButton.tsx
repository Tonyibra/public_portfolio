import React from 'react';
import { Button } from './AppButton.styles';
import Link from 'next/link';

interface IProps {
  children: JSX.Element | string;
}

const AppButton: React.FC<IProps> = ({ children }) => {
  return (
    <Button>
      <Link
        style={{
          color: 'white',
        }}
        href="mailto:tonyibra.ads@gmail.com?subject=Let's start a project&body=Hello Tony,"
      >
        {children}
      </Link>
    </Button>
  );
};

export default AppButton;
