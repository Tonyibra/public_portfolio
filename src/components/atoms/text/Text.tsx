import { smallScreenWidth } from '@/utils';
import React from 'react';

interface IProps {
  children: string | JSX.Element | JSX.Element[];
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'li';
  color?: string;
  fontSize?: string;
  padding?: number;
  margin?: number;
  isLink?: boolean;
  fontWeight?: React.CSSProperties['fontWeight'];
  fontStyle?: React.CSSProperties['fontStyle'];
  textAlign?: React.CSSProperties['textAlign'];
  letterSpacing?: React.CSSProperties['letterSpacing'];
}

const Text: React.FC<IProps> = ({
  children,
  type: Variant,
  color = 'white',
  fontSize = 16,
  margin = 0,
  padding = 0,
  isLink,
  fontWeight = 'normal',
  fontStyle = 'normal',
  textAlign = 'left',
  letterSpacing = 0,
}) => {
  return (
    <Variant
      style={{
        color,
        fontFamily: 'Inter',
        fontSize: `${fontSize}px`,
        padding,
        margin,
        cursor: isLink ? 'pointer' : 'default',
        fontWeight,
        fontStyle,
        textAlign: textAlign,
        letterSpacing,
      }}
    >
      {children}
    </Variant>
  );
};

export default Text;
