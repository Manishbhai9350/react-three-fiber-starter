import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () => {
    const scene = useRef();
    useFrame(() => {
      scene.current.rotation.y += 0.04;
      scene.current.rotation.x += 0.04;
      scene.current.rotation.z += 0.04;
    });
    return (
      <group ref={scene}>
        <Box>
          <meshLambertMaterial color="white" />
        </Box>
      </group>
    );
};

export default Scene
  