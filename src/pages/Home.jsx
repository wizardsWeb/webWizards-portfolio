import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  const [ isPlayingMusic, setIsPlayingMusic ] = useState(false); 

  useEffect(() => {
    if( isPlayingMusic ) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }

  }, [isPlayingMusic])

  const [isRotating, setIsRotating] = useState(false);
  const [ currentStage, setCurrentStage ] = useState(1); 

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    // screen position includes 3 values which is x-axis, y-axis, z-axis 
    let screenPosition = [0, -6.5, -43];

    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; 
    }
    else {
      screenScale = [1, 1, 1];
    }

    return [ screenScale, screenPosition, rotation  ]; 
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition ;

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]; 
      screenPosition = [0, -1.5, 0]
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [ screenScale, screenPosition  ]; 
  }

  const [ islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize();
  const [ planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
       <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {/* This will be acting as an root component for our 3D model */}
        {/* All this objects and the lights will be rendered inside */}
        {/* To load something inside the canvas it should be 3D  */}
        {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas 
          className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} `}
          // Objects that are near the 0.1 or that are far from 1000 value that won't be rendered
          camera={{ near: 0.1, far: 1000 }}
        >  
          {/* We can use the Suspense as an wrapper used for rendering the loading screen */}
          {/* Until the 3D model is loading this will fire up the loader */}
          <Suspense fallback={<Loader  />}>

            {/* All the types of lighting */}
            
            {/* this gives the effect of sunlight */}
            <directionalLight position={[1, 1, 1]} intensity={2} />
            {/* Dominates all objects equally without casting shadows  */}
            <ambientLight intensity={0.5} />
            {/* Emittes all the light  */}
            {/* <pointLight /> */}
            {/* It provides a light from one particular direction on a particular part */}
            {/* <spotLight /> */}

            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} /> 
            
            <Bird />
            <Sky 
              isRotating={isRotating}
            />
            {/* 3D model JSX file */}
            <Island 
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage }
            />
            <Plane 
              isRotating={isRotating}
              position={planePosition}
              scale={planeScale}
              rotation={[0, 20, 0]}
            /> 

          </Suspense>
        </Canvas>

        <div className='absolute bottom-2 left-2'>
          <img src={!isPlayingMusic ? soundoff : soundon} alt="sound" className='w-10 h-10 cursor-pointer object-contain' onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
        </div>

    </section>
  )
}

export default Home
