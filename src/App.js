import './App.css';
import { Canvas } from '@react-three/fiber';
import Animal from './Animal';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';


function App() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  },[]);

  return (
      <div className='App'>
      <Canvas  className='canva' camera={{ fov: 115, zoom: (dimensions.width/dimensions.height) + 0.5, near: 1, far: 1000 }}  >
       <ambientLight intensity={0.5} />
        <Animal  scale={[0.1, 0.1, 0.1]}  position={[0, -1, 0]} />
        <OrbitControls enableZoom={false} minPolarAngle = {Math.PI/2}  maxPolarAngle = {Math.PI/2} enablePan={false} />
      </Canvas>
      </div>
  );
}

export default App;
