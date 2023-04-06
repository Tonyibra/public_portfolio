import React from 'react';

const HeroSVG = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={616}
    height={192}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M572.774 16.798c88.568-17.795-70.836 97.501-265.467 136.974-194.632 39.472-357.273-1.675-260.727-13.559"
        stroke="url(#b)"
        strokeWidth={3}
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={291.739}
        y1={83.985}
        x2={307.373}
        y2={153.757}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} />
        <stop offset={0.182} stopColor="#06FFF0" />
      </linearGradient>
      <filter
        id="a"
        x={0.421}
        y={0.446}
        width={614.956}
        height={190.566}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_653" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_653"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default HeroSVG;
