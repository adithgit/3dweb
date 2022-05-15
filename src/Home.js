import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useEffect, useState , Suspense } from 'react'
import Title from './Title';
import { Html, useProgress } from '@react-three/drei'
import ReactLoading from 'react-loading';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
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

  const Model = () => {
    const gltf = useLoader(GLTFLoader, '/3dmodel.gltf');
    return(
      <>
        <primitive object={ gltf.scene } scale={25} position={[0, -1, 0]} />
      </>
    ) 
  }
  return (
    <div className='home-div'>
      <Title />
      <Canvas className='canva'camera={{ fov:60 }}>
        <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls  autoRotate enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8}/>
        <Environment preset='sunset' />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Home;
