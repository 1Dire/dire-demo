import { useControls } from "leva";

export default function Lights() {

  const { directionalLightIntensity, ambientLightIntensity, lightPosition } = useControls({
    directionalLightIntensity: { value: 4.5, min: 0, max: 10, step: 0.1 },  
    ambientLightIntensity: { value: 1.5, min: 0, max: 10, step: 0.1 },    
    lightPosition: { value: [4, 4, 1], min: [-10, -10, -10], max: [10, 10, 10] },  
  });

  return (
    <>
  
      <directionalLight
        castShadow
        position={lightPosition} 
        intensity={directionalLightIntensity} 
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />

   
      <ambientLight intensity={ambientLightIntensity} />
    </>
  );
}
