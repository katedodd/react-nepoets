import * as React from "react";
import { motion } from "framer-motion";
import "../styles/accordionContent.css";

export const AccordionContent = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.4 }}
    className="content-placeholder"
  >
    <p className="accordionText">{getData()}</p>
    <p>mega ultra slugmarine</p>
  </motion.div>
);

function getData() {
  let nameData = localStorage.getItem('nameData');
  let speciesData = localStorage.getItem('speciesData');
  let colorData = localStorage.getItem('colorData');
  console.log(nameData);
  return(
    <table>
      <tr>{nameData}</tr>
      <tr>{speciesData}</tr>
      <tr>{colorData}</tr>
    </table>
  );
}
