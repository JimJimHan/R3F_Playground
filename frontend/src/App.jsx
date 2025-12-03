import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {

  return (
    <>
      <Canvas className="canvas" camera={{ position: [0, 0, 12], fov: 50 }}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 6, 6]} />
          <meshStandardMaterial color="blue" roughness={0.4} />
        </mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
      </Canvas>
    </>
  )
}

export default App
