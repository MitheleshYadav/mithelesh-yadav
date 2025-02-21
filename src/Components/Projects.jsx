import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  return (
    <div className="min-h-screen pb-9 bg-background bg-radial-dark text-[#E0E0E0] flex justify-center items-center">
      <div className="project-heading flex flex-col w-3/4 mt-28">
        <div className="text-[#E0E0E0]">
          <h3>MY WORK</h3>
        </div>
        <div className="font-archivo text-purple-600 text-5xl sm:text-7xl my-6">
          <h1>Projects.</h1>
        </div>
        <div className="w-full text-[15px] sm:text-[18px] sm:w-1/2 text-[#B3B3B3]">
          <p>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          <div className="project-work glass-card border-glow hover-glow">
            <img src="/images/zentry.png" alt=""></img>
            <h2 className="font-archivo my-2 sm:my-3">Zentry Clone</h2>
            <p className="text-[#BEBEBE] text-[14px] sm:text-[16px]">
              I built a Zentry: The Metagame website clone using React and GSAP,
              replicating its dynamic design with smooth animations. This
              project showcases my skills in GSAP animations, responsive UI, and
              interactive web experiences.
            </p>
            <p className="my-2 sm:my-3">
              <span className="text-[#A020F0]">#react</span>{" "}
              <span className="text-[#00FFFF]">#tailwind css</span>{" "}
              <span className="text-[#A020F0]">#gsap</span>
            </p>
          </div>
          <div className="project-work glass-card border-glow hover-glow">
            <img
              src="/images/chatapp.jpg"
              className=" object-cover"
              alt=""
            ></img>
            <h2 className="font-archivo my-2 sm:my-3">Chattify</h2>
            <p className="text-[#BEBEBE] text-[14px] sm:text-[16px]">
              A real-time chat application built using the MERN stack and
              Socket.IO, allowing users to add friends, send friend requests,
              and chat instantly. Featuring seamless WebSocket communication for
              an interactive messaging experience.
            </p>
            <p className="my-2 sm:my-3">
              <span className="text-[#00FFFF]">#react</span>{" "}
              <span className="text-[#A020F0]">#tailwind-css</span>{" "}
              <span className="text-[#00FFFF]">#mongodb</span>{" "}
              <span className="text-[#A020F0]">#nodejs</span>{" "}
              <span className="text-[#00FFFF]">#express</span>
            </p>
          </div>
          <div className="project-work glass-card border-glow hover-glow">
            <img src="/images/coaching.jpg" alt=""></img>
            <h2 className="font-archivo my-2 sm:my-3">Coaching-app</h2>
            <p className="text-[#BEBEBE] text-[14px] sm:text-[16px]">
              A feature-rich coaching website built using the MERN stack,
              allowing users to register and log in as students or tutors.
              Includes functionalities like course management, scheduling,
              interactive sessions, and a seamless user experience for online
              learning
            </p>
            <p className="my-2 sm:my-3">
              <span className="text-[#A020F0]">#react</span>{" "}
              <span className="text-[#00FFFF]">#tailwind css</span>{" "}
              <span className="text-[#A020F0]">#gsap</span>
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
