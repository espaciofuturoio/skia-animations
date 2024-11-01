import React from 'react';
import { Text } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export const DemoSkia = () => (
  <WithSkiaWeb
    getComponent={() => import('@/components/skia/HelloSkia')}
    fallback={<Text>Loading Skia...</Text>}
  />
);

