import * as React from 'react';
const HeroMobileSVG = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={306}
    height={95}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        stroke="url(#b)"
        strokeWidth={1.482}
        d="M284.772 8.36c44.012-8.783-35.2 48.12-131.918 67.6-96.719 19.48-177.54-.827-129.563-6.692"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={145.118}
        x2={152.785}
        y1={41.519}
        y2={75.975}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} />
        <stop offset={0.182} stopColor="#06FFF0" />
      </linearGradient>
      <filter
        id="a"
        width={305.486}
        height={94.064}
        x={0.405}
        y={0.283}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.482} />
        <feGaussianBlur stdDeviation={3.952} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_778" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_778"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default HeroMobileSVG;
