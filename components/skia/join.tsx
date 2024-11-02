import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ColorWheel = () => {
  const colors = [
    "red", "orange", "yellow", "yellowgreen", "green", "bluegreen",
    "blue", "blueviolet", "violet", "redviolet"
  ];

  const createSegment = (index: number, total: number) => {
    const angle = (2 * Math.PI) / total;
    const startAngle = index * angle;
    const endAngle = startAngle + angle;

    const x1 = 100 + 80 * Math.cos(startAngle);
    const y1 = 100 + 80 * Math.sin(startAngle);
    const x2 = 100 + 80 * Math.cos(endAngle);
    const y2 = 100 + 80 * Math.sin(endAngle);

    return `M100,100 L${x1},${y1} A80,80 0 0,1 ${x2},${y2} Z`;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg height="200" width="200">
        {colors.map((color, index) => (
          <Path
            key={index}
            d={createSegment(index, colors.length)}
            fill={color}
            fillOpacity="0.8"
          />
        ))}
      </Svg>
    </View>
  );
};

export default ColorWheel;