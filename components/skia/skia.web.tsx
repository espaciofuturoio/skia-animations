import React from 'react';
import { Text } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

const DemoComponent = () => (
  <WithSkiaWeb
    getComponent={() => import('@/components/HelloSkia')}
    fallback={<Text>Loading Skia...</Text>}
  />
);

export default DemoComponent; 
