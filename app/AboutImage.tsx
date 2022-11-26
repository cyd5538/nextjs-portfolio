import React, {useState, useEffect, useRef} from 'react'
import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
import {motion} from 'framer-motion';

function Model(props:any) {
  const { scene } = useGLTF("/macbook.glb");
  return <primitive object={scene} {...props} />;
}

function useInterval(callback: () => void, delay:number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => {
      savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
      function tick() {
          savedCallback.current() ;
      }
      if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
      }
  }, [delay]);
}

const AboutImage = () => {
  const [count, setCount] = useState<number>(0)

  useInterval(()=>{
    setCount(count => count+0.05);
  }, 100);

  return (
    <motion.div 
    initial={{
      x: -200,
      opacity : 0
    }}
    transition={{
      duration: 1.2
    }}
    whileInView={{x:0, opacity:1}}
    viewport={{once: true}}
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[400px]'
    >
    <Canvas dpr={[1,2]} shadows camera={{fov: 45}} >
      <color attach="background" args={["rgb(100,100,101)"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/ 3]} rotation={[0,count,0]}>
        <Stage environment={"studio"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </motion.div>
  )
}

export default AboutImage;