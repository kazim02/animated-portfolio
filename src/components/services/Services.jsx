import "./services.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const boxHover = {
  hover: {
    scale: 1.05,
    backgroundColor: "lightgray",
    color: "black",
    transition: { duration: 0.3 },
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
    <div className="services">
      {/* Top Text */}
      <motion.div
        className="textContainer"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>

      {/* Title Section */}
      <motion.div
        className="titleContainer"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.05 }} transition={{ duration: 0.3 }}>
              Unique
            </motion.b>{" "}
            Idea
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.05 }} transition={{ duration: 0.3 }}>
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      {/* List for Desktop */}
      {!isMobile && (
        <motion.div
          className="listContainer"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          {serviceData.map((item, i) => (
            <motion.div key={i} className="box" variants={boxHover} whileHover="hover">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>GO</button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Mobile View */}
      {isMobile && (
        <motion.div
          className="mobileContainer"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
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
            variants={boxHover}
            whileHover="hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <h2>{selected}</h2>
            <p>{serviceData.find((s) => s.title === selected)?.desc}</p>
            <button>GO</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
