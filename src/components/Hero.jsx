import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[-30px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0FF7FF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className={`${styles.heroHeadText} text-white-100 text-3xl sm:text-4xl`}>
           Hi, I'm{" "}
            <span className="text-[#0FF7FF]">
            <span className="sm:hidden">Naufal</span>
          <span className="hidden sm:inline">Naufal Ziyaadaturrahman</span>
          </span>
            </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-base sm:text-xl`}>
            Software Engineer Intern at Idemia Labs Indonesia
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      <StarsCanvas />
    </section>
  );
};

export default Hero;