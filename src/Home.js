import './Home.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState , Suspense } from 'react'
import Title from './Title';
import Logo1 from './Logo1'
import { Html, useProgress } from '@react-three/drei'
import ReactLoading from 'react-loading';


function Home() {

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function Loader() {
    const { progress } = useProgress()
    return <Html >
    <div className='loader' >
    <ReactLoading type='cylon' />
    {progress}%
    </div>
    </Html>
  }

  return (
    <div className='home-div'>
      <Title />
      <Canvas className='canva' camera={{ fov: 115, zoom: (dimensions.width / dimensions.height) + 1.5, near: 1, far: 1000 }}  >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <Logo1 scale={window.innerHeight > 800 ? [0.02, 0.02, 0.02] : [0.03, 0.03, 0.03]} position={[0, -0.5, 0]} />
          <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Home;
