import { useRef, useState } from "react";
import Globe from "react-globe.gl";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardsref1 = useRef(null);
  const cardsref2 = useRef(null);
  const cardsref3 = useRef(null);
  const cardsref4 = useRef(null);
  const cardsref5 = useRef(null);
  const [hasCopied, setHasCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(" mithelesh942@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  useGSAP(()=>{
    const animate = (card)=>{
      gsap.from(card,{
        opacity: 0,  // Initially invisible
        y: 100,  // Moves 50px downward
        ease: "power2.out",
        scrollTrigger: {
          trigger: card, // The card itself triggers the animation
          start: "top 90%", // When 85% of the card enters the viewport
          end: "bottom 70%", // Animation completes when 60% of the card is in view
          toggleActions: "play none none reverse", // Play when entering, reverse when leaving
        },
      })
    }
     animate(cardsref1.current);
     animate(cardsref2.current);
     animate(cardsref3.current);
     animate(cardsref4.current);
     animate(cardsref5.current);
  })
  // border-black-300 bg-aboutbg - bento
  return (
    <section
      className=" bg-background bg-radial-dark sm:px-10 px-10 py-20 flex justify-center"
      id="about"
    >
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full sm:w-3/4">
        <div className="col-span-1 xl:row-span-3">
          <div ref={cardsref1} className=" w-full h-full border glass-card border-glow hover-glow rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/images/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="text-xl font-semibold mb-2 text-[#A020F0] font-generalsans">
                Hi, I’m Mithelesh Yadav
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I am a Full Stack Developer with strong expertise in both
                frontend and backend development. Currently diving deep into 3D
                web development while continuously upskilling myself with the
                latest and emerging technologies to stay ahead in the
                ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div ref={cardsref2} className="w-full h-full border glass-card border-glow hover-glow rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/images/tech.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain mask-image-radial"
            />

            <div>
              <p className="text-xl font-semibold mb-2 text-[#A020F0] font-generalsans">
                Tech Stack
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I have a strong command of the MERN Stack, along with expertise
                in Git/GitHub, SQL, GSAP, and Three.js. These technologies
                empower me to build dynamic, interactive, and highly scalable
                applications, ensuring seamless performance and modern user
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div ref={cardsref3} className="w-full h-full border glass-card border-glow hover-glow rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28,
                    lng: 77,
                    text: "Delhi",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-[#A020F0] font-generalsans">
                Flexible with time zones, communication methods, and locations.
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Located in Delhi, India, and available for remote projects
                worldwide—no boundaries, just great work.
              </p>
              <button className="relative w-full mt-10 btn-contact py-5 rounded-3xl overflow-hidden">
                Contact Me
                <span className="absolute inset-0 border-2 border-[#afb0b6] blur-[5px] rounded-3xl"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div ref={cardsref4} className="w-full h-full border glass-card border-glow hover-glow rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/images/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="text-xl font-semibold mb-2 text-[#A020F0] font-generalsans">
                My Passion for Coding
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I am passionate about solving complex problems and bringing
                ideas to life through code. Programming isn’t just my
                profession—it’s what drives me. I thrive on exploring new
                technologies, pushing boundaries, and continuously enhancing my
                skills to stay ahead in the ever-evolving tech world
              </p>
              <a href="/MITHELESH_RESUME.pdf" download="mithelesh_resume.pdf">
                <button className="relative w-full mt-10 btn-contact py-5 rounded-3xl overflow-hidden">
                  Resume
                  <span className="absolute inset-0 border-2 border-[#afb0b6] blur-[5px] rounded-3xl"></span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div ref={cardsref5} className="w-full h-full border glass-card border-glow hover-glow rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/images/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] object-contain sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base font-generalsans text-center">
                Contact me
              </p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "/images/tick.svg" : "/images/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-[#8A2BE2]">
                  mithelesh942@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
