import React, { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress, Html } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loader() {
  const { progress } = useProgress(); // Get loading progress
  return (
    <Html center>
      <p>Loading... {Math.round(progress)}%</p>
    </Html>
  );
}

function Model({ onLoaded }) {
  const { scene } = useGLTF("/models/island.glb");

  useEffect(() => {
    onLoaded(); // Call when model is loaded
  }, [onLoaded]);

  scene.position.set(1, -1, 5);
  scene.scale.set(0.1, 0.1, 0.1);
  return <primitive object={scene} />;
}

function AdjustCamera() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(8, 0, 2);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

function Landing() {
  const textArea = useRef(null);
  const btn = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(gsap);
  }, []);

  useGSAP(() => {
    if (!isLoaded) return;
    setTimeout(() => {
      gsap.fromTo(
        textArea.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
      );
      console.log("textarea is animated");
  
      gsap.fromTo(
        btn.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8 }
      );
      console.log("btn is animated");
    }, 0);
  }, [isLoaded]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Show text only if model has loaded */}
      {isLoaded && (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center flex-col">
          <h1
            ref={textArea}
            className="sm:text-[20px] text-center relative rounded-xl py-4 px-8 text-white mx-5 shadow-2xl"
          >
            Hi, I'm
            <span className="font-semibold mx-2 text-black">
              Mithelesh Yadav
            </span>
            <br />A Full Stack Web Developer
          </h1>

          {/* Know More Button */}
          <Link to={"/hero"}>
            <button
              ref={btn}
              className="mt-4 bg-white text-black text-[10px] sm:text-[15px] sm:font-semibold py-2 px-6 rounded-xl shadow-md hover:bg-[#2b77e7] hover:text-white transition duration-300"
            >
              Know More About Me
            </button>
          </Link>
        </div>
      )}

      {/* 3D Scene */}
      <Canvas style={{ background: "transparent" }}>
        <Suspense fallback={<Loader />}>
          <AdjustCamera />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} intensity={2} />
          <Model onLoaded={() => setIsLoaded(true)} />
          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Landing;
