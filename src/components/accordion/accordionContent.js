import * as React from "react";
import { motion } from "framer-motion";
import "../styles/accordionContent.css";

export const AccordionContent = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.4 }}
    className="content-placeholder"
  >
    <p className="accordionText">mega ultra text</p>
  </motion.div>
);
