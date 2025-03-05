import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
   
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial color="orange" />
      </mesh>

    </>
  );
}
