import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function MotionDiv(props){
    return(    
        <AnimatePresence>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="motionDiv"
            >
                {props.content}
            </motion.div>
        </AnimatePresence>
    );
}