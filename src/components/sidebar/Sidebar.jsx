import Links from "./Links/Link";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px )",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      tasnsition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "opne" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
