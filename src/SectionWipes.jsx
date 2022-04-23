// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import OurServices from './sections/OurServies';
import EndlessLogo from './sections/EndlessLogo';
import ConnectWithUs from './sections/ConnectWithUs';
const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-image: linear-gradient(270deg,#1b1429,#140f23);
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }

`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel blue"><EndlessLogo/></div>
        {/* <Intro/> */}
      </Scene>
      <Scene pin>
        <div className="panel turqoise"><OurServices/></div>
      </Scene>
      <Scene pin>
        <div className="panel green"><ConnectWithUs/></div>
      </Scene>
      {/* <Scene pin>
        <div className="panel bordeaux"><span>Panel</span></div>
      </Scene> */}
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;