import './Home.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react'
import Title from './Title';
import Logo1 from './Logo1'
function Home() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(dimensions);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);


  return (
    <div className='home-div'>
      <Title />
      <Canvas className='canva' camera={{ fov: 115, zoom: (dimensions.width / dimensions.height) + 1.5, near: 1, far: 1000 }}  >
        <ambientLight intensity={0.5} />
        <Logo1 scale={window.innerHeight>800?[0.02, 0.02, 0.02]:[0.03, 0.03, 0.03]} position={[0, -0.5, 0]} />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default Home;
