import { StatusBar, useWindowDimensions } from 'react-native';
import React, { useMemo } from 'react';
import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Group,
  Paint,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import Touchable, { useGestureHandler } from 'react-native-skia-gesture';
import { useSharedValue, withSpring } from 'react-native-reanimated';

const RADIUS = 80;

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const cx = useSharedValue(windowWidth / 2);
  const cy = useSharedValue(windowHeight / 2);

  const context = useSharedValue({ x: 0, y: 0 });

  const gestureHandler = useGestureHandler({
    onStart: () => {
      'worklet';
      context.value = {
        x: cx.value,
        y: cy.value,
      };
    },
    onActive: ({ translationX, translationY }) => {
      'worklet';
      cx.value = context.value.x + translationX;
      cy.value = context.value.y + translationY;
    },
    onEnd: () => {
      'worklet';
      cx.value = withSpring(windowWidth / 2);
      cy.value = withSpring(windowHeight / 2);
    },
  });

  const layer = useMemo(() => {
    return (
      <Paint>
        <Blur blur={30} />
        <ColorMatrix
          matrix={[
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 60, -30,
          ]}
        />
      </Paint>
    );
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Touchable.Canvas
        style={{
          flex: 1,
          backgroundColor: '#111',
        }}
      >
        <Group layer={layer} blendMode="screen">
          <Touchable.Circle {...gestureHandler} cx={cx} cy={cy} r={RADIUS} color="blue" data-id="primary1" />
          <Circle cx={windowWidth / 2} cy={windowHeight / 2} r={RADIUS} color="red" data-id="primary2" />
          <SweepGradient
            c={vec(0, 0)}
            colors={['red', 'green', 'blue']}
            data-id="secondary"
          />
        </Group>
      </Touchable.Canvas>
    </>
  );
}