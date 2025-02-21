import React, { useState } from "react";
import Globe from "react-globe.gl";
import data from "./Cords";

function Contact() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="bg-[#0d0d0d] w-full min-h-screen flex flex-col items-center justify-center pt-13 pb-13 overflow-hidden">
      {/* Heading */}
      <div className="flex-none mb-11">
        <h1 className="font-archivo text-purple-600 text-7xl text-center">
          GET IN TOUCH
        </h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col sm:flex-row w-3/4 h-fit justify-center items-center">
        {/* Globe - Visible Only on Smaller Devices */}
        <div className="flex items-center rounded-3xl w-full h-[350px] sm:h-[300px] justify-center sm:hidden border border-glow glass-card overflow-hidden">
          <Globe
            width={380}
            height={400}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            arcsData={data}
            arcColor={() => "rgba(255, 255, 255, 0.8)"}
            arcDashLength={1}
            arcDashGap={0.2}
            arcDashAnimateTime={1000}
            arcStroke={0.5}
            arcAltitude={() => Math.random() * 0.3 + 0.1}
          />
        </div>

        {/* Contact Details - With Background Video */}
        <div className="relative w-full sm:w-[50%] bg-aboutbg text-white rounded-3xl mt-3 py-10 px-5 sm:p-25 flex flex-col overflow-auto h-fit">
          {/* Background Video */}
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 rounded-3xl"
            src="/video/infinty.mp4"
            autoPlay
            loop
            muted
          />

          {/* Content - Placed Above the Video */}
          <div className="relative z-10">
            <h1 className="font-lato text-3xl sm:text-5xl mb-4 text-purple-300">
              Have an idea?
            </h1>
            <h1 className="font-lato text-3xl sm:text-5xl mb-4 text-purple-300">
              Let's do it together
            </h1>
            <p className="w-3/4 mb-12 text-[16px]">
              Get in touch today and let's turn your idea into a remarkable success story!
            </p>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 cursor-pointer mb-6" onClick={() => handleCopy("mithelesh942@gmail.com")}>
                <img src={hasCopied ? "/images/tick.svg" : "/images/copy.svg"} alt="copy" className="h-5 sm:h-7" />
                <p className="text-[13px] sm:text-xl">mithelesh942@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer mb-6" onClick={() => handleCopy("9911051915")}>
                <img src={hasCopied ? "/images/tick.svg" : "/images/copy.svg"} alt="copy" className="h-5 sm:h-7" />
                <p className="text-[13px] sm:text-xl">9911051915</p>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/giy-icon.png" alt="github" className="h-5 sm:h-7" />
                <a href="https://github.com/MitheleshYadav" target="_blank" rel="noopener noreferrer">
                  <p className="text-[13px] sm:text-xl">Github</p>
                </a>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/location.png" alt="location" className="h-5 sm:h-7" />
                <p className="text-[13px] sm:text-xl">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
