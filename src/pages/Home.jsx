import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import D20Dice from '../models/d20'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}

      {/* Canvas Tag - This acts as a root component that sets up a 3d Scene - All objects and lights will be rendered in this. */}
      <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000}}> 
        <Suspense fallback={<Loader />}>
          <directionalLight/>
          <ambientLight/>
          <pointLight/>
          <spotLight/>
          <hemisphereLight/>

          <D20Dice/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home