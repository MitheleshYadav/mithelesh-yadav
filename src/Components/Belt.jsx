import { useRef, useEffect } from "react";
import gsap from "gsap"; // Make sure GSAP is imported
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Belt() {
  const infiniteRef = useRef(null);
  const scrollRef = useRef(null);
  useEffect(() => {
    const marquee = infiniteRef.current;

    gsap.to(marquee, {
      x: "-50%", // Move only half so the duplicate text keeps looping smoothly
      duration: 5, // Adjust speed
      repeat: -1, // Infinite loop
      ease: "linear",
    });
    gsap.to(scrollRef.current, {
      x: "-100%", // Moves the text left as you scroll down
      ease: "linear",
      scrollTrigger: {
        trigger: marquee,
        start: "top bottom", // Animation starts when belt enters viewport
        end: "bottom top", // Ends when it leaves viewport
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-background">
      {/* Welcome Text with Duplicates for Seamless Loop */}
      <div className="flex whitespace-nowrap">
        <div
          ref={infiniteRef}
          className="flex text-white text-5xl sm:text-9xl font-archivo space-x-16"
        >
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">WELCOME!</span>
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">WELCOME!</span>
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">WELCOME!</span>
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">WELCOME!</span>
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">WELCOME!</span> {/* Duplicate for smooth loop */}
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">WELCOME!</span>
        </div>
      </div>
    </div>
  );
}

export default Belt;
