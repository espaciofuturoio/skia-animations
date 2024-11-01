import React from 'react';
import { Text } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
export default function App() {
  return (
    <WithSkiaWeb
      getComponent={() => import("@/components/Breathe")}
      fallback={<Text>Loading Skia...</Text>}
    />
  );
}