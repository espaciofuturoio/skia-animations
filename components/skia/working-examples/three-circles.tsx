import { StatusBar, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import {
  Canvas,
  Group,
  vec,
} from '@shopify/react-native-skia';
import Touchable, { useGestureHandler } from 'react-native-skia-gesture';
import { useSharedValue, withSpring } from 'react-native-reanimated';

const RADIUS = 80;

const App = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const cx1 = useSharedValue(windowWidth / 2 - 3 * RADIUS);
  const cx2 = useSharedValue(windowWidth / 2 + 3 * RADIUS);
  const cx3 = useSharedValue(windowWidth / 2);
  const cy = useSharedValue(windowHeight / 2);

  const context1 = useSharedValue({ x: 0, y: 0 });
  const context2 = useSharedValue({ x: 0, y: 0 });
  const context3 = useSharedValue({ x: 0, y: 0 });

  const gestureHandler1 = useGestureHandler({
    onStart: () => {
      'worklet';
      context1.value = {
        x: cx1.value,
        y: cy.value,
      };
    },
    onActive: ({ translationX, translationY }) => {
      'worklet';
      cx1.value = context1.value.x + translationX;
      cy.value = context1.value.y + translationY;
    },
    onEnd: () => {
      'worklet';
      cx1.value = withSpring(windowWidth / 2 - 3 * RADIUS);
      cy.value = withSpring(windowHeight / 2);
    },
  });

  const gestureHandler2 = useGestureHandler({
    onStart: () => {
      'worklet';
      context2.value = {
        x: cx2.value,
        y: cy.value,
      };
    },
    onActive: ({ translationX, translationY }) => {
      'worklet';
      cx2.value = context2.value.x + translationX;
      cy.value = context2.value.y + translationY;
    },
    onEnd: () => {
      'worklet';
      cx2.value = withSpring(windowWidth / 2 + 3 * RADIUS);
      cy.value = withSpring(windowHeight / 2);
    },
  });

  const gestureHandler3 = useGestureHandler({
    onStart: () => {
      'worklet';
      context3.value = {
        x: cx3.value,
        y: cy.value,
      };
    },
    onActive: ({ translationX, translationY }) => {
      'worklet';
      cx3.value = context3.value.x + translationX;
      cy.value = context3.value.y + translationY;
    },
    onEnd: () => {
      'worklet';
      cx3.value = withSpring(windowWidth / 2);
      cy.value = withSpring(windowHeight / 2);
    },
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ padding: 10, backgroundColor: '#222' }} />
      <Touchable.Canvas
        style={{
          flex: 1,
          backgroundColor: '#111',
        }}
      >
        <Group blendMode="screen">
          <Touchable.Circle
            {...gestureHandler1}
            cx={cx1}
            cy={cy}
            r={RADIUS}
            color="yellow"
          />
          <Touchable.Circle
            {...gestureHandler2}
            cx={cx2}
            cy={cy}
            r={RADIUS}
            color="blue"
          />
          <Touchable.Circle
            {...gestureHandler3}
            cx={cx3}
            cy={cy}
            r={RADIUS}
            color="cyan"
          />
        </Group>
      </Touchable.Canvas>
    </>
  );
};

export default App;