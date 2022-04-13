import React from 'react';
import './Star.css'
function generateRandom(min = 0, max = 100) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

class Star extends React.Component {

    







    render() {
      return (
        <svg viewBox='0 0 20 20' style={{position:"absolute",left:generateRandom(0,window.innerWidth),top:generateRandom(0,window.innerHeight),transform:"rotate(30deg)"}} height="10"  width="10" className={`blink-${generateRandom(1,5)}`} >
        <polygon style={{fill:"#8a5eb3"}} points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
      </svg>
      );
    }
  }

export default Star;

