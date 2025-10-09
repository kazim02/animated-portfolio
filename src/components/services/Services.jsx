import "./services.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const serviceData = [
  {
    title: "branding",
    desc: "We help define your visual identity and brand voice to make your business stand out in the crowd.",
  },
  {
    title: "design",
    desc: "We craft user-friendly, stunning designs that align with your brand and engage your audience.",
  },
  {
    title: "strategy",
    desc: "We create growth-driven strategies that align with your goals and deliver measurable results.",
  },
  {
    title: "marketing",
    desc: "We build data-driven marketing campaigns to boost your online presence and drive conversions.",
  },
];

const Services = () => {
  const [selected, setSelected] = useState("branding");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      {/* top text */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>

      {/* title */}
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

      {/* list for desktop */}
      {!isMobile && (
        <motion.div className="listContainer" variants={variants}>
          {serviceData.map((item, i) => (
            <motion.div
              key={i}
              className="box"
              whileHover={{ backgroundColor: "lightgray", color: "black" }}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>GO</button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* button + single box for mobile */}
      {isMobile && (
        <motion.div className="mobileContainer" variants={variants}>
          <div className="buttonRow">
            {serviceData.map((item) => (
              <button
                key={item.title}
                className={selected === item.title ? "active" : ""}
                onClick={() => setSelected(item.title)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <motion.div
            key={selected}
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>{selected}</h2>
            <p>{serviceData.find((s) => s.title === selected)?.desc}</p>
            <button>GO</button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Services;
