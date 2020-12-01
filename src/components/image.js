import React from 'react';

function Image(props) {
    let color = props.petColor;
    let species = props.petSpecies;
    return(
        <img src={`../imgs/nepoets/happy/happy_${color}_${species}.png`} alt='nepoet'/>
    );
}

export default Image;