import './styles/home.css';
import React from 'react';
import NepoetDisplay from "../components/nepoetDisplay";
import MotionDiv from "../components/motionDiv";

function Home() {

  const pageContent = (
    <div>
      <h1>Home page</h1>
      {/* <button>Get Name</button> */}
      <NepoetDisplay/>
    </div>
  );

  return (
    <MotionDiv content={pageContent}/>
  );
}



export default Home;
