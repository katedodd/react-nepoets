import './styles/adopt.css';
import React from 'react';
import MotionDiv from "../components/motionDiv";

function Adopt() {
  return (
    <MotionDiv content={content}/>
  );
}

const content = (
  <div>
    <h1>Adoption page</h1>
  </div>
);

export default Adopt;
