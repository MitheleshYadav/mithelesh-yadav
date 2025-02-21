import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

function TechBelt() {
  const marqueeRef = useRef(null);
  const [speed, setSpeed] = useState(10); // Default speed

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;

    // Duplicate the entire marquee content
    const duplicateContent = marquee.innerHTML; // Copy existing elements
    marquee.innerHTML += duplicateContent; // Append duplicate for seamless scrolling

    // Adjust speed based on screen size
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        setSpeed(4); // Slower speed on small screens
      } else {
        setSpeed(10); // Default speed on larger screens
      }
    };

    updateSpeed(); // Set initial speed
    window.addEventListener("resize", updateSpeed); // Update speed on resize

    // Ensure proper positioning
    gsap.set(marquee, { xPercent: 0 });

    // Infinite scroll animation
    const marqueeAnimation = gsap.to(marquee, {
      xPercent: -50, // Moves exactly half for seamless effect
      repeat: -1,
      duration: speed, // Use dynamic speed
      ease: "linear",
    });

    return () => {
      window.removeEventListener("resize", updateSpeed);
      marqueeAnimation.kill(); // Cleanup animation on unmount
    };
  }, [speed]); // Re-run animation when speed changes

  return (
    <div className="w-full overflow-hidden bg-aboutbg py-5">
      <div ref={marqueeRef} className="gap-10 sm:gap-20 flex whitespace-nowrap">
        {[
          "express",
          "html",
          "react",
          "node",
          "mongo",
          "javascript",
          "gsap",
          "css",
          "github",
          "three",
        ].map((tech, i) => (
          <img
            key={i}
            className="h-16 w-auto object-contain"
            src={`/images/${tech}.png`}
            alt={tech}
          />
        ))}
      </div>
    </div>
  );
}

export default TechBelt;
