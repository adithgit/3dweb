import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useRef, useState , Suspense } from 'react'
import Title from './Title';
import { Html, useProgress } from '@react-three/drei'
import ReactLoading from 'react-loading';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';
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
    {Math.floor(progress)}%
    </div>
    </Html>
  }

  const Model = () => {
    const meshRef = useRef();
    const gltf = useLoader(GLTFLoader, '/thandava22.gltf');
    useFrame(()=>{
      meshRef.current.rotation.y += 0.03;
    })
    return(
      <>
        <mesh ref={ meshRef }>
        <primitive object={ gltf.scene } scale={25} position={[0, -1, 0]} />
        </mesh>
      </>
    ) 
  }
  return (
    <div className='home-div'>
      <Title />
      <Canvas className='canva'camera={{ fov:dimensions.width>1000?65:70 }}>
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={1}/>
        <Model />
        <OrbitControls  enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
        <Environment preset='sunset' />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Home;
