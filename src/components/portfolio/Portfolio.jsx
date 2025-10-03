import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Single Card
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 200]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio List
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"], // makes progress bar sync nicely
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const items = [
    {
      id: 1,
      title: "react app",
      img: "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 2,
      title: "full stack app",
      img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 3,
      title: "next js app",
      img: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 4,
      title: "back end app",
      img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
