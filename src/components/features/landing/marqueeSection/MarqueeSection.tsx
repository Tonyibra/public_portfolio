import React from 'react';
import { MarqueeBox, MarqueeDecorator, MarqueeItem } from './Marquee.styles';
import Text from '@/components/atoms/text/Text';

const EMPTY_LIST = Array.from({ length: 3 }, (_, i) => i);

const MarqueeSection = () => {
  return (
    <MarqueeBox speed={80}>
      {EMPTY_LIST.map((index) => (
        <MarqueeItem key={index.toString()}>
          <Text type="h6" fontSize="50" fontWeight={'500'}>
            Let's build your project
          </Text>
          <MarqueeDecorator>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7054 3.83337L5.0387 23.8334H20.0387L18.372 37.1667L35.0387 17.1667H20.0387L21.7054 3.83337Z"
                fill="#FAFF00"
              />
            </svg>
          </MarqueeDecorator>
        </MarqueeItem>
      ))}
    </MarqueeBox>
  );
};

export default MarqueeSection;
