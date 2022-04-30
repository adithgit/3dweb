import React, { useRef } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import texture from "./thandava.jpg"
import { useLoader } from '@react-three/fiber';


const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.009 ))
  return (
    <mesh ref={mesh} >
      <boxBufferGeometry attach='geometry' args={[1,1,1]}  />
      <meshStandardMaterial  attach='material'  color={'white'} />
    </mesh>
  )
}
function App() {
  return (
    <>
      <Canvas className='canva'  >
        <ambientLight intensity={.3} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight color={"green"} intensity={1.5} position={[-10, 0, -20]} />
        <pointLight color={"yellow"} intensity={1.5} position={[10, 10, -20]} />
        <Box />

        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach={'geometry'} args={[100, 100, 100]} />
            <meshBasicMaterial attach={'material'} color={"red"} />
          </mesh>
        </group>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
