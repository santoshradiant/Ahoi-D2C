import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface TickIconProps {
  size?: number;
}

const TickIcon: React.FC<TickIconProps> = ({ size = 21 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
      {/* Black background circle */}
      <Path
        d="M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21Z"
        fill="#000000"
      />
      {/* White checkmark */}
      <Path
        d="M6 10.5L9 13.5L15 7.5"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TickIcon;
