import './styles/home.css';
import React from 'react';
import NepoetDisplay from "../components/nepoetDisplay";
import MotionDiv from "../components/motionDiv";

function Home() {
  return (
    <MotionDiv content={content}/>
  );
}

const content = (
  <div>
    <h1>Home page</h1>
    <NepoetDisplay/>
  </div>
);

export default Home;
