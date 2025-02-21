import gsap from "gsap";
import { useRef } from "react";

function Gsapone() {
  const box = useRef(null);

  function randomNumberGenerator() {
    const x = Math.floor(Math.random() * 500);
    const y = Math.floor(Math.random() * 500);
    console.log(x + ', ' + y); // Log random x and y values
    return { x, y }; // Return the correct variables
  }

  function handleClick() {
    const { x, y } = randomNumberGenerator(); // Destructure the returned object
    gsap.to(box.current, {
      x: x,
      y: y,
      duration: 1,
    });
  }

  return (
    <div className="flex h-dvh">
      <div
        ref={box}
        onClick={handleClick}
        className="w-20 h-20 p-20 bg-amber-700 hover:cursor-pointer"
      ></div>
    </div>
  );
}

export default Gsapone;
