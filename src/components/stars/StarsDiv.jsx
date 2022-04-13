import React from 'react';
import Star from './Star';
var starsdict = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
let j = 0;
while( j < 100){
    starsdict.push(1)
    j = j + 1
}
class StarsDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Allstars: starsdict.map(star => {
            return (
              <Star/>
              
            )
          }),
        };
        
        // this.BeeDict = this.BeeDict.bind(this)
      }








    render() {
      return (
          <>
        {this.state.Allstars}
        </>
      );
    }
  }

export default StarsDiv;
