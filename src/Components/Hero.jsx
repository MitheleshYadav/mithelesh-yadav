import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const heroText = useRef(null);

  useGSAP(() => {
    gsap.from("h1", {
      y: 100,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      stagger: 0.25,
    });
  });

  return (
    <div className="relative min-h-[100vh] bg-background bg-radial-dark flex justify-center items-center">
      {/* Video container */}
      <div className="flex flex-row overflow-x-hidden justify-center items-center h-full sm:mt-24 w-screen sm:w-3/4">
        <div className="flex flex-col w-full h-full overflow-hidden mb-8">
          <div className="mb-4">
            <h1 className="leading-relaxed text-center font-identity text-4xl sm:text-9xl text-purple-900">
              DESIGNING
            </h1>
            <h1 className="font-identity text-white text-2xl sm:text-5xl leading-relaxed text-center">
              THE FUTURE
            </h1>
            <h1 className="leading-relaxed text-center font-identity text-4xl sm:text-9xl text-purple-900">
              CODING
            </h1>
            <h1 className="font-identity text-white text-2xl sm:text-5xl leading-relaxed text-center">
              THE PRESENT
            </h1>
          </div>
          <video
            className="rounded-6xl filter transition-all duration-500 mask-radial blend-mode"
            src="/background.mp4"
            loop
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
