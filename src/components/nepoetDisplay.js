import './styles/nepoetDisplay.css';
import React from 'react';
import { motion } from "framer-motion";
import happyK from "../imgs/nepoets/happy/happy_blue_kajeek.png";
import { Accordion } from "./accordion/accordion";

function NepoetDisplay() {
  return (
    <div className="home">
      <h1>nepoet</h1>
      <div className="gallery">
        <motion.div
          className="thumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={
            { exit: { transition: { staggerChildren: 0.1 } } }
          }
        >
          {Thumbnail}
        </motion.div>
      </div>
    </div>
  );
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const nepoetImg = (
  <div>
    <motion.img
      src={happyK}
      alt="kajeek"
      transition={transition}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.75 }}
    />
  </div>
);

const Thumbnail = (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <Accordion content={nepoetImg}/>
    <motion.div
      className="frame"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >      
    </motion.div>
  </motion.div>
);

export default NepoetDisplay;