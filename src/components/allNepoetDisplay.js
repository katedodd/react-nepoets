import * as React from "react";
// import { useState } from "react";
import "../styles/allNepoetDisplay.css";
import NepoetDisplay from './nepoetDisplay';

function AllNepoetDisplay() {
    
    return nepoetCount.map((i) => (
      <NepoetDisplay i={i} headerContent={content} />
    ));

};

export default AllNepoetDisplay;