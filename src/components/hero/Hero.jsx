import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scrollButton = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVarients = {
    initial: { x: "100%" },
    animate: {
      x: "-100%",
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={item}>KAZIM SAIYED</motion.h2>
          <motion.h1 variants={item}>web developer and designer</motion.h1>
          <motion.div className="button">
            <motion.button variants={item}>see the latest work</motion.button>
            <motion.button variants={item}>Contact Me</motion.button>
            <motion.img
              variants={scrollButton}
              initial="initial"
              animate="animate"
              src="/scroll.png"
              alt="Scroll down"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="sliddingTextContainer"
        variants={sliderVarients}
        initial="initial"
        animate="animate"
      >
        kazim
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
