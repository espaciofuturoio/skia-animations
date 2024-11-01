import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { Text, View } from "react-native";

const HelloSkia = () => {
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <View style={{ width, height }}>
      <Text>Hello Skia X</Text>
      <Canvas style={{ width, height }}>
        <Group blendMode="screen">
          <Circle cx={r} cy={r} r={r} color="red" />
          <Circle cx={width - r} cy={r} r={r} color="green" />
          <Circle cx={width / 2} cy={height - r} r={r} color="blue" />
        </Group>
      </Canvas>
    </View>
  );
};

export default HelloSkia;