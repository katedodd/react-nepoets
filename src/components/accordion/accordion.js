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
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="nepoetTitle">{headerContent}</div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                scale: 0.5,
                opacity: 0,
                transition: { duration: 1.5, ...transition }
              }
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
  const [expanded, setExpanded] = useState(1);

  return accordionIds.map((i) => (
    <AccordionHolder i={i} expanded={expanded} setExpanded={setExpanded} headerContent={content} />
  ));
};

const accordionIds = [0];

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

