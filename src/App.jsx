import { Center, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";


function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4}>
      <Center> <Experience /></Center>
       
      </ScrollControls>
    </Canvas>
  );
}

export default App;