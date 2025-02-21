import gsap from "gsap";
import { useRef } from "react";

function Buttonhover() {
  const button = useRef(null);

  function handleHover() {
    gsap.to(button.current, {
      scale: 1.5,
      duration: 0.5,
      backgroundColor: "red", // Change to backgroundColor instead of background
      rotate: 360,
    });
  }

  function handleOutsideHover() {
    gsap.to(button.current, {
      scale: 1,
      duration: 0.5,
      backgroundColor: "orange", // Change to backgroundColor instead of background
      rotate: 0,
    });
  }

  return (
    <div className="h-dvh flex justify-center items-center">
      <div
        ref={button}
        onMouseEnter={handleHover}
        onMouseLeave={handleOutsideHover}
        className="w-24 h-20 bg-amber-600 text-black align-middle flex justify-center items-center rounded-xl hover:cursor-pointer"
      >
        click me
      </div>
    </div>
  );
}

export default Buttonhover;
