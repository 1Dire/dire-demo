import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Lights from "./Lights.jsx";

export default function Experience() {
  const { BoxSettings, GroundSettings } = useControls({
    BoxSettings: {
      boxColor: "#ffa500", // 오렌지색 (박스 색)
    },
    GroundSettings: {
      groundColor: "#ff0000", // 빨간색 (바닥 색)
    },
  });

  return (
    <>
      <Lights />

  
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={BoxSettings.boxColor} />
      </mesh>


      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial color={GroundSettings.groundColor} /> 
      </mesh>

    
      <OrbitControls />
    </>
  );
}
