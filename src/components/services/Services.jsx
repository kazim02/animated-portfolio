import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Idea
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {["branding", "design", "strategy", "marketing"].map((title, i) => (
          <motion.div
            key={i}
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quaerat perspiciatis nulla non in esse sint officiis explicabo,
              ipsam ad omnis iure vitae soluta a voluptatibus. Ex obcaecati
              veritatis beatae?
            </p>
            <button>GO</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
