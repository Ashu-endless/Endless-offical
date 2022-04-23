import React from 'react';
import './App.css';
import OurServices from './sections/OurServies';
import EndlessLogo from './sections/EndlessLogo';
import ConnectWithUs from './sections/ConnectWithUs';
// import ScrollAnimation from 'react-animate-on-scroll'
// import "../node_modules/animate.css/animate.min.css";
// import './animation.css'
// import { Controller, Scene } from 'react-scrollmagic';
// const SectionWipesStyled = styled.div`
//   overflow: hidden;

//   .panel {
//     height: 100vh;
//     width: 100vw;
//     text-align: center;
//   }
  
//   .panel span {
//     position: relative;
//     display: block;
//     overflow: visible;
//     top: 50%;
//     font-size: 80px;
//   }
  
//   .panel.blue {
//     background-color: #3883d8;
//   }
  
//   .panel.turqoise {
//     background-color: #38ced7;
//   }
  
//   .panel.green {
//     background-color: #22d659;
//     margin-bottom: 800px;
//   }
  
//   .panel.bordeaux {
//     background-color: #953543;
//   }

// `;
function App() {

  


  return (
    <>
  {/* <div className='scale-in-ver-center' ></div> */}
  
      <EndlessLogo/>

      <OurServices/>


     <ConnectWithUs/> 

    </>
    
  );
}

export default App;
