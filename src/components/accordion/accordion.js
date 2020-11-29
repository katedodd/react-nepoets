import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionContent } from "./accordionContent";
import "../styles/accordion.css";

const AccordionHolder = ({ i, expanded, setExpanded, headerContent }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#40dbb4" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="nepoetTitle">{headerContent}</div>
      </motion.header>
      <AnimatePresence initial={true}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordionContent />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = ({ content }) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0);

  return accordionIds.map((i) => (
    <AccordionHolder i={i} expanded={expanded} setExpanded={setExpanded} headerContent={content} />
  ));
};

const accordionIds = [0];
