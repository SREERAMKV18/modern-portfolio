import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 w-full min-h-screen lg:h-screen relative overflow-hidden">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full w-full px-4 md:px-8 
                        /* Padding kept from previous step for mobile alignment */
                        pt-40 md:pt-40 lg:pt-40 pb-20 lg:pb-0">
          
          {/* TITLE SECTION - FORCED SINGLE LINES */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-4 font-bold"
          >
            {/* LINE 1: whitespace-nowrap forces it to NEVER break line */}
            {/* We use text-[15px] on mobile so it fits the screen width */}
            <span className="block whitespace-nowrap text-[14px] sm:text-lg md:text-xl lg:text-3xl">
              Forest & Agro-ecosystems Research
            </span>
            {/* LINE 2: whitespace-nowrap forces it to NEVER break line */}
            <span className="block whitespace-nowrap text-[14px] sm:text-lg md:text-xl lg:text-3xl mt-1 md:mt-2">
              Remote Sensing | Hydrology | Ecosystems Researcher
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xs md:max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 lg:mb-16 text-sm md:text-base opacity-80"
          >
            Researcher working on forest and agro-ecosystem responses to climate variability, hydrological and
            fluvial geomorphological processes, and vegetation–water interactions. Skilled in R and Python,
            with experience in remote sensing–based ecosystem monitoring and field investigations.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center lg:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden lg:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      {/* avatar and background (Desktop) */}
      <div className="absolute right-0 bottom-0 w-[1280px] h-full pointer-events-none hidden lg:block">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[737px] h-[678px] absolute bottom-0 right-[8%] pointer-events-none"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* avatar - mobile only */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="lg:hidden absolute w-[180px] md:w-[400px] h-auto bottom-0 md:bottom-0 right-0 md:right-2 pointer-events-none opacity-60"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
