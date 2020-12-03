import React from 'react';
import { motion } from 'framer-motion';

function Image(props) {
    let color = props.petColor;
    let species = props.petSpecies;
    return(
        <motion.img src={`../imgs/nepoets/happy/happy_${props.color}_${props.species}.png`} alt='nepoet'/>
    );
}

export default Image;