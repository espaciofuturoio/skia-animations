import { StatusBar, useWindowDimensions, View } from 'react-native';
import React from 'react';
import {
  Canvas,
  Circle,
  Group,
  Paint,
  vec,
} from '@shopify/react-native-skia';

const RADIUS = 30;
const SPACING = 10;

const ColorWheel: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions();

  const colors = [
    '#FF0000', // Rojo
    '#FF7F00', // Naranja
    '#FFFF00', // Amarillo
    '#7FFF00', // Verde-Amarillo
    '#00FF00', // Verde
    '#00FF7F', // Azul-Verde
    '#0000FF', // Azul
    '#7F00FF', // Violeta-Azul
    '#8B00FF', // Violeta
    '#FF00FF', // Rojo-Violeta
  ];

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: '', flex: 1 }}>
        {colors.map((color, index) => (
          <Canvas
            key={index}
            style={{
              width: RADIUS * 2,
              height: RADIUS * 2,
              margin: SPACING,
            }}
          >
            <Group>
              <Paint style="fill" color={color} />
              <Circle cx={RADIUS} cy={RADIUS} r={RADIUS} color={color} />
            </Group>
          </Canvas>
        ))}
      </View>
    </>
  );
};

export default ColorWheel;